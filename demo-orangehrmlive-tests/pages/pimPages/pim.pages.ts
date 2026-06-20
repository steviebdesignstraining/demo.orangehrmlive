import { Page, Locator, expect } from "@playwright/test";
import { PimSelectors } from "../../selectors/pimSelectors/pim.selectors";
import { leftNavSelectors } from "../../selectors/leftNav/leftNav.selectors";
import { urlPatterns } from "../../test-data/urlPatterns";

export class PimPage {
  readonly page: Page;

  // Filter inputs
  readonly employeeNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly employmentStatusDropdown: Locator;
  readonly includeDropdown: Locator;
  readonly supervisorNameInput: Locator;
  readonly jobTitleDropdown: Locator;
  readonly subUnitDropdown: Locator;

  // Buttons
  readonly resetButton: Locator;
  readonly searchButton: Locator;

  // Records
  readonly addButton: Locator;
  readonly recordsFoundText: Locator;

  // Table
  readonly table: Locator;
  readonly tableBody: Locator;
  readonly tableRows: Locator;
  readonly selectAllCheckbox: Locator;

  // Headers
  readonly idHeader: Locator;
  readonly firstNameHeader: Locator;
  readonly lastNameHeader: Locator;
  readonly jobTitleHeader: Locator;
  readonly employmentStatusHeader: Locator;
  readonly subUnitHeader: Locator;
  readonly supervisorHeader: Locator;
  readonly actionsHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    this.employeeNameInput = page.locator(PimSelectors.employeeNameInput);
    this.employeeIdInput = page.locator(PimSelectors.employeeIdInput);
    this.employmentStatusDropdown = page.locator(
      PimSelectors.employmentStatusDropdown,
    );
    this.includeDropdown = page.locator(PimSelectors.includeDropdown);
    this.supervisorNameInput = page.locator(PimSelectors.supervisorNameInput);
    this.jobTitleDropdown = page.locator(PimSelectors.jobTitleDropdown);
    this.subUnitDropdown = page.locator(PimSelectors.subUnitDropdown);

    this.resetButton = page.locator(PimSelectors.resetButton);
    this.searchButton = page.locator(PimSelectors.searchButton);

    this.addButton = page.locator(PimSelectors.addButton);
    this.recordsFoundText = page.locator(PimSelectors.recordsFoundText);

    this.table = page.locator(PimSelectors.table);
    this.tableBody = page.locator(PimSelectors.tableBody);
    this.tableRows = page.locator(PimSelectors.tableRows);
    this.selectAllCheckbox = page.locator(PimSelectors.selectAllCheckbox);

    this.idHeader = page.locator(PimSelectors.idHeader);
    this.firstNameHeader = page.locator(PimSelectors.firstNameHeader);
    this.lastNameHeader = page.locator(PimSelectors.lastNameHeader);
    this.jobTitleHeader = page.locator(PimSelectors.jobTitleHeader);
    this.employmentStatusHeader = page.locator(
      PimSelectors.employmentStatusHeader,
    );
    this.subUnitHeader = page.locator(PimSelectors.subUnitHeader);
    this.supervisorHeader = page.locator(PimSelectors.supervisorHeader);
    this.actionsHeader = page.locator(PimSelectors.actionsHeader);
  }

  async clickPim(): Promise<void> {
    await this.page.click(leftNavSelectors.pimMenuItem);
    await expect(this.page).toHaveURL(urlPatterns.employeeList, { timeout: 10000 });
  }

  async verifyPimSectionPageLoaded(): Promise<void> {
    await expect(this.page.locator(PimSelectors.pageTitle)).toBeVisible();
  }

  // ========================================
  // FILTERS
  // ========================================

  async searchByEmployeeName(employeeName: string): Promise<void> {
    await this.employeeNameInput.fill(employeeName);
    await this.searchButton.click();
  }

  async searchByEmployeeId(employeeId: string): Promise<void> {
    await this.employeeIdInput.fill(employeeId);
    await this.searchButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  // ========================================
  // RECORDS
  // ========================================

  async clickAdd(): Promise<void> {
    await this.addButton.click();
  }

  async getRecordCount(): Promise<number> {
    await this.table.scrollIntoViewIfNeeded();
    await expect(this.table).toBeVisible({ timeout: 30000 });
    await this.page.waitForLoadState("networkidle").catch(() => {});
    await this.page.waitForFunction(
      () =>
        document.querySelectorAll(".orangehrm-container .oxd-table-card")
          .length > 0 ||
        Array.from(document.querySelectorAll("span")).some((element) =>
          element.textContent?.includes("No Records Found"),
        ),
      undefined,
      { timeout: 30000 },
    );

    if (await this.page.locator('span:has-text("No Records Found")').isVisible().catch(() => false)) {
      return 0;
    }

    return await this.tableRows.count();
  }

  async selectAllRecords(): Promise<void> {
    await this.selectAllCheckbox.check();
  }

  // ========================================
  // DYNAMIC TABLE HELPERS
  // ========================================

  getRowByEmployeeName(employeeName: string): Locator {
    const nameParts = employeeName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts[nameParts.length - 1] || '';
    return this.tableRows.filter({
      hasText: firstName,
    }).filter({
      hasText: lastName,
    });
  }

  getRowByEmployeeId(employeeId: string): Locator {
    return this.tableRows.filter({
      hasText: employeeId,
    });
  }

  async clickEditByEmployeeId(employeeId: string): Promise<void> {
    // Wait for table to be stable
    await this.table.waitFor({ state: 'visible', timeout: 10000 });
    
    const row = this.tableRows.filter({ hasText: employeeId }).first();
    const editButton = row.locator(".bi-pencil-fill");
    await editButton.waitFor({ state: 'visible', timeout: 10000 });
    await editButton.click({ timeout: 10000 });
  }

  async clickEditByEmployeeName(employeeName: string): Promise<void> {
    // Split name - use firstName for column 1 and lastName for column 2
    const nameParts = employeeName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts[nameParts.length - 1] || '';
    
    // Filter for rows matching both firstName and lastName (in separate table columns)
    const row = this.tableRows.filter({ hasText: firstName }).filter({ hasText: lastName }).first();
    const editButton = row.locator(".bi-pencil-fill");
    await editButton.waitFor({ state: 'visible', timeout: 10000 });
    await editButton.click({ timeout: 10000 });
  }

  async clickDeleteByEmployeeName(employeeName: string): Promise<void> {
    const row = this.getRowByEmployeeName(employeeName);
    const deleteButton = row.locator(".bi-trash");
    await deleteButton.waitFor({ state: 'visible', timeout: 10000 });
    await deleteButton.click({ timeout: 10000 });
  }

  async verifyEmployeeExists(employeeName: string): Promise<void> {
    // Search by employee name and verify results are returned
    await this.searchByEmployeeName(employeeName);
    const count = await this.getRecordCount();
    expect(count).toBeGreaterThan(0);
  }

  async getEmployeeIdByFullName(employeeName: string): Promise<string> {
    const nameParts = employeeName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts[nameParts.length - 1] || '';
    
    const row = this.tableRows.filter({ hasText: firstName }).filter({ hasText: lastName }).first();
    const idCell = row.locator('.oxd-table-cell:nth-child(2) div').first();
    const idText = await idCell.textContent();
    return idText?.trim() || '';
  }

  async verifyEmployeeDoesNotExist(employeeName: string): Promise<void> {
    const count = await this.getRowByEmployeeName(employeeName).count();
    expect(count).toBe(0);
  }

  getDeleteButtonByEmployeeName(employeeName: string): Locator {
    return this.getRowByEmployeeName(employeeName)
      .locator(".bi-trash")
      .first();
  }

  getEditButtonByEmployeeName(employeeName: string): Locator {
    return this.getRowByEmployeeName(employeeName)
      .locator(".bi-pencil-fill")
      .first();
  }

  async deleteEmployee(employeeName: string): Promise<void> {
    await this.getDeleteButtonByEmployeeName(employeeName).click();
  }

  async editEmployee(employeeName: string): Promise<void> {
    await this.getEditButtonByEmployeeName(employeeName).click();
  }

  async isTableLoaded(): Promise<boolean> {
    return (await this.getRecordCount()) > 0;
  }

  async generateUniqueEmployeeId(maxAttempts = 3): Promise<string> {
    await this.clickPim();
    await expect(this.page).toHaveURL(urlPatterns.employeeList, { timeout: 10000 });

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const employeeId = `JB${randomNum}`;

      await this.searchByEmployeeId(employeeId);

      const noRecords = this.page.locator('span:has-text("No Records Found")');
      const hasNoRecords = await noRecords.isVisible({ timeout: 1000 }).catch(() => false);

      if (hasNoRecords) {
        return employeeId;
      }

      const count = await this.tableRows.count();
      if (count === 0) {
        return employeeId;
      }

      console.log(`Employee ID ${employeeId} already exists, trying another...`);
    }

    const fallbackId = `JB${Date.now()}`;
    console.log(`Using fallback ID: ${fallbackId}`);
    return fallbackId;
  }

  async getByOption(dropdownLocator: Locator, optionText?: string): Promise<Locator> {
    // Click dropdown to open options
    await dropdownLocator.click();
    // Wait for dropdown to be visible
    await expect(this.page.locator(".oxd-select-dropdown")).toBeVisible();
    // Wait for options to load
    await this.page.waitForTimeout(500);
    // Get options using getByRole
    const options = this.page.getByRole('option');
    if (optionText) {
      // Get specific option by text
      const option = options.filter({ hasText: optionText }).first();
      await option.waitFor({ state: 'visible', timeout: 120_000 });
      return option;
    }
    // Get first option
    const firstOption = options.first();
    await firstOption.waitFor({ state: 'visible', timeout: 120_000 });
    return firstOption;
  }
}

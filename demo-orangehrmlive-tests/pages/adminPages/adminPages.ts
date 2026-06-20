import { Page, Locator, expect } from "@playwright/test";
import { AdminSelectors } from "../../selectors/adminSelectors/adminSelectors";
import { leftNavSelectors } from "../../selectors/leftNav/leftNav.selectors";
import { urlPatterns } from "../../test-data/urlPatterns";

export class AdminPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly userRoleDropdown: Locator;
  readonly employeeNameInput: Locator;
  readonly statusDropdown: Locator;

  readonly resetButton: Locator;
  readonly searchButton: Locator;

  readonly addButton: Locator;
  readonly recordsFoundText: Locator;

  readonly table: Locator;
  readonly tableRows: Locator;
  readonly selectAllCheckbox: Locator;

  readonly usernameHeader: Locator;
  readonly userRoleHeader: Locator;
  readonly employeeNameHeader: Locator;
  readonly statusHeader: Locator;
  readonly actionsHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator(AdminSelectors.usernameInput);
    this.userRoleDropdown = page.locator(AdminSelectors.userRoleDropdown);
    this.employeeNameInput = page.locator(AdminSelectors.employeeNameInput);
    this.statusDropdown = page.locator(AdminSelectors.statusDropdown);

    this.resetButton = page.locator(AdminSelectors.resetButton);
    this.searchButton = page.locator(AdminSelectors.searchButton);

    this.addButton = page.locator(AdminSelectors.addButton);
    this.recordsFoundText = page.locator(AdminSelectors.recordsFoundText);

    this.table = page.locator(AdminSelectors.table);
    this.tableRows = page.locator(AdminSelectors.tableRows);
    this.selectAllCheckbox = page.locator(AdminSelectors.selectAllCheckbox);

    this.usernameHeader = page.locator(AdminSelectors.usernameHeader);
    this.userRoleHeader = page.locator(AdminSelectors.userRoleHeader);
    this.employeeNameHeader = page.locator(AdminSelectors.employeeNameHeader);
    this.statusHeader = page.locator(AdminSelectors.statusHeader);
    this.actionsHeader = page.locator(AdminSelectors.actionsHeader);
  }

  async clickAdmin(): Promise<void> {
    await this.page.click(leftNavSelectors.adminMenuItem);
  }

  async verifyAdminSectionPageLoaded(): Promise<void> {
    await expect(this.page.locator(AdminSelectors.pageTitle)).toBeVisible();
  }

  // ========================================
  // FILTERS
  // ========================================

  async searchByUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.searchButton.click();
  }

  async searchByEmployee(employeeName: string): Promise<void> {
    await this.employeeNameInput.fill(employeeName);
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

  getRowByUsername(username: string): Locator {
    return this.tableRows.filter({
      hasText: username,
    });
  }

  async openAddUserPage(): Promise<void> {
    await this.addButton.click();
    await expect(this.page).toHaveURL(urlPatterns.saveAdminUser);
  }

  async clickEditByUsername(username: string): Promise<void> {
    const row = this.getRowByUsername(username);
    await row.locator(".bi-pencil-fill").first().click();
    await expect(this.page).toHaveURL(urlPatterns.saveAdminUser);
  }

  async clickDeleteByUsername(username: string): Promise<void> {
    const row = this.getRowByUsername(username);
    await row.locator(".bi-trash").first().click();
  }

  async verifyUserExists(username: string): Promise<void> {
    const count = await this.getRowByUsername(username).count();
    expect(count).toBeGreaterThan(0);
  }

  async verifyUserDoesNotExist(username: string): Promise<void> {
    const count = await this.getRowByUsername(username).count();
    expect(count).toBe(0);
  }

  getDeleteButtonByUsername(username: string): Locator {
    return this.getRowByUsername(username).locator(".bi-trash").first();
  }

  getEditButtonByUsername(username: string): Locator {
    return this.getRowByUsername(username).locator(".bi-pencil-fill").first();
  }

  async deleteUser(username: string): Promise<void> {
    await this.getDeleteButtonByUsername(username).click();
  }

  async editUser(username: string): Promise<void> {
    await this.getEditButtonByUsername(username).click();
  }
  async isTableLoaded(): Promise<boolean> {
    return (await this.getRecordCount()) > 0;
  }

  async generateUniqueUsername(baseUsername: string, maxAttempts = 5): Promise<string> {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const username = `${baseUsername}${randomNum}`;

      await this.clickAdmin();
      await this.searchByUsername(username);
      const count = await this.getRecordCount();

      if (count === 0) {
        return username;
      }

      console.log(`Username ${username} already exists, trying another...`);
    }

    const fallbackUsername = `${baseUsername}${Date.now()}`;
    console.log(`Using fallback username: ${fallbackUsername}`);
    return fallbackUsername;
  }
}

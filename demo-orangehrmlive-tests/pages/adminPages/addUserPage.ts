import { Page, Locator, expect } from "@playwright/test";
import { AddUserSelectors } from "../../selectors/adminSelectors/addUserSelectors";

export class AddUserPage {
  readonly page: Page;

  // ========================================
  // FORM ELEMENTS
  // ========================================

  readonly userRoleDropdown: Locator;
  readonly employeeNameInput: Locator;
  readonly statusDropdown: Locator;
  readonly usernameInput: Locator;

  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;

  // ========================================
  // BUTTONS
  // ========================================

  readonly cancelButton: Locator;
  readonly saveButton: Locator;

  // ========================================
  // INFO
  // ========================================

  readonly passwordHint: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userRoleDropdown = page.locator(AddUserSelectors.userRoleDropdown);
    this.employeeNameInput = page.locator(AddUserSelectors.employeeNameInput);
    this.statusDropdown = page.locator(AddUserSelectors.statusDropdown);
    this.usernameInput = page.locator(AddUserSelectors.usernameInput);

    this.passwordInput = page.locator(AddUserSelectors.passwordInput);
    this.confirmPasswordInput = page.locator(
      AddUserSelectors.confirmPasswordInput,
    );

    this.cancelButton = page.locator(AddUserSelectors.cancelButton);
    this.saveButton = page.locator(AddUserSelectors.saveButton);

    this.passwordHint = page.locator(AddUserSelectors.passwordHint);
  }

  // ========================================
  // NAVIGATION / VALIDATION
  // ========================================

  async verifyAddUserPageLoaded(): Promise<void> {
    await expect(this.page.locator(AddUserSelectors.pageTitle)).toBeVisible();
  }

  // ========================================
  // ACTIONS - FORM FILLING
  // ========================================

  async selectUserRole(role: string): Promise<void> {
    await this.userRoleDropdown.click();
    await this.page.locator(`.oxd-select-dropdown span:has-text("${role}")`).click();
  }

  async selectStatus(status: string): Promise<void> {
    await this.statusDropdown.click();
    await this.page.locator(`.oxd-select-dropdown span:has-text("${status}")`).click();
  }

  async enterEmployeeName(name: string): Promise<void> {
    await this.employeeNameInput.fill(name);

    // wait for autocomplete dropdown to appear, then select the option by name
    const autocompleteOption = this.page.getByRole('option', { name: name });
    await autocompleteOption.waitFor({ state: 'visible', timeout: 10000 });
    await autocompleteOption.click();
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async replaceUsername(username: string): Promise<void> {
    await this.usernameInput.fill("");
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(password: string): Promise<void> {
    await this.confirmPasswordInput.fill(password);
  }

  // ========================================
  // ACTIONS - BUTTONS
  // ========================================

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickCancel(): Promise<void> {
    await this.cancelButton.click();
  }

  // ========================================
  // FULL FLOW
  // ========================================

  async createUser(user: {
    role: string;
    employeeName: string;
    status: string;
    username: string;
    password: string;
  }): Promise<void> {
    await this.selectUserRole(user.role);
    await this.enterEmployeeName(user.employeeName);
    await this.selectStatus(user.status);
    await this.enterUsername(user.username);
    await this.enterPassword(user.password);
    await this.enterConfirmPassword(user.password);

    await this.clickSave();
  }
}

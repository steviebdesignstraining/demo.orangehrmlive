import { Page, expect } from '@playwright/test';
import { loginSelectors } from '../../selectors/loginSelectors/login.selectors';
import { env } from '../../utils/env';
import { urlPatterns } from '../../test-data/urlPatterns';

export class LoginPage {
  constructor(private page: Page) {}

  // Navigation

  async navigate() {
    await this.page.goto(env.baseUrl);
  }

  // Actions

  async enterUsername(username: string) {
    await this.page.fill(
      loginSelectors.usernameInput,
      username
    );
  }

  async enterPassword(password: string) {
    await this.page.fill(
      loginSelectors.passwordInput,
      password
    );
  }

  async clickLogin() {
    await this.page.click(
      loginSelectors.loginButton
    );
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await Promise.all([
      // this.page.waitForURL(urlPatterns.dashboard, { timeout: 15000 }),
      this.page.click(loginSelectors.loginButton),
    ]);
  }

  async clickForgotPassword() {
    await this.page.click(
      loginSelectors.forgotPasswordLink
    );
  }

  // Getters

  async getErrorMessage() {
    return this.page.locator(
      loginSelectors.errorMessage
    );
  }

  async getUsernameField() {
    return this.page.locator(
      loginSelectors.usernameInput
    );
  }

  async getPasswordField() {
    return this.page.locator(
      loginSelectors.passwordInput
    );
  }

  // Assertions

  async verifyLoginPageDisplayed() {
    await expect(
      this.page.locator(loginSelectors.pageTitle)
    ).toBeVisible();

    await expect(
      this.page.locator(loginSelectors.usernameInput)
    ).toBeVisible();

    await expect(
      this.page.locator(loginSelectors.passwordInput)
    ).toBeVisible();

    await expect(
      this.page.locator(loginSelectors.loginButton)
    ).toBeVisible();
  }

  async verifyInvalidCredentialsError() {
    await expect(
      this.page.locator(loginSelectors.errorMessage)
    ).toContainText('Invalid credentials');
  }

  async verifyRequiredFieldError(expectedCount = 1) {
    const errors = this.page.locator(loginSelectors.requiredFieldMessage);
    await expect(errors).toHaveCount(expectedCount);
    await expect(errors.first()).toContainText('Required');
  }

  async verifyDemoCredentialsVisible() {
    await expect(
      this.page.locator(loginSelectors.demoUsernameText)
    ).toBeVisible();

    await expect(
      this.page.locator(loginSelectors.demoPasswordText)
    ).toBeVisible();
  }
}
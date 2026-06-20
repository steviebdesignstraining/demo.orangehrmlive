import { Page, expect } from '@playwright/test';
import { topNavSelectors } from '../../selectors/TopNav/topNav.selectors';

export class TopNavPage {
  constructor(private page: Page) {}

  // Actions

  async clickUserDropdown() {
    await this.page.click(topNavSelectors.userDropdownIcon);
  }

  async clickLogout() {
    await this.page.click(topNavSelectors.logoutOption);
  }

  async clickAbout() {
    await this.page.click(topNavSelectors.aboutOption);
  }

  async clickSupport() {
    await this.page.click(topNavSelectors.supportOption);
  }

  async clickChangePassword() {
    await this.page.click(topNavSelectors.changePasswordOption);
  }

  // Getters

  async getUserDropdownName() {
    return this.page.locator(topNavSelectors.userDropdownName);
  }

  // Assertions

  async verifyUserLoggedIn(username: string) {
    await expect(this.page.locator(topNavSelectors.userDropdownName)).toContainText(username);
  }
}
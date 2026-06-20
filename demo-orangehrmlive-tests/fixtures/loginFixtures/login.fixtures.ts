import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPages/login.pages';
import { TopNavPage } from '../../pages/topNavPages/topNav.pages';
import { LeftNavPage } from '../../pages/leftNavPages/leftNav.pages';
import { loginData } from '../../test-data/loginCredentials/login.data';

// Extend the base test with custom fixtures
type LoginFixtures = {
  loginPage: LoginPage;
  topNav: TopNavPage;
  leftNav: LeftNavPage;
};

// Create a test fixture that provides a LoginPage instance
export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  topNav: async ({ page }, use) => {
    const topNav = new TopNavPage(page);
    await use(topNav);
  },
  leftNav: async ({ page }, use) => {
    const leftNav = new LeftNavPage(page);
    await use(leftNav);
  },
});

// Re-export login data for use in tests
export { loginData };

export { expect };
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPages/login.pages';
import { LeftNavPage } from '../../pages/leftNavPages/leftNav.pages';
import { AdminPage } from '../../pages/adminPages/adminPages';
import { AdminTopNavPage } from '../../pages/adminPages/adminTopNavPage';
import { AddUserPage } from '../../pages/adminPages/addUserPage';
import { loginData } from '../../test-data/loginCredentials/login.data';
import { adminTestData } from '../../test-data/admin/admin.test-data';

export type AdminFixtures = {
  loginPage: LoginPage;
  leftNav: LeftNavPage;
  adminPage: AdminPage;
  adminTopNav: AdminTopNavPage;
  addUserPage: AddUserPage;
};

export const test = base.extend<AdminFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  leftNav: async ({ page }, use) => {
    const leftNav = new LeftNavPage(page);
    await use(leftNav);
  },
  adminPage: async ({ page }, use) => {
    const adminPage = new AdminPage(page);
    await use(adminPage);
  },
  adminTopNav: async ({ page }, use) => {
    const adminTopNav = new AdminTopNavPage(page);
    await use(adminTopNav);
  },
  addUserPage: async ({ page }, use) => {
    const addUserPage = new AddUserPage(page);
    await use(addUserPage);
  },
});

export { loginData };
export { adminTestData };

export { expect };
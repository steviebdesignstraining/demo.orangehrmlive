import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPages/login.pages';
import { LeftNavPage } from '../../pages/leftNavPages/leftNav.pages';
import { PimPage } from '../../pages/pimPages/pim.pages';
import { AddEmployeePage } from '../../pages/pimPages/addEmployeePage';
import { loginData } from '../../test-data/loginCredentials/login.data';
import { pimTestData } from '../../test-data/pim/pim.test-data';
import { adminTestData } from '../../test-data/admin/admin.test-data';

export type PimFixtures = {
  loginPage: LoginPage;
  leftNav: LeftNavPage;
  pimPage: PimPage;
  addEmployeePage: AddEmployeePage;
};

export const test = base.extend<PimFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  leftNav: async ({ page }, use) => {
    const leftNav = new LeftNavPage(page);
    await use(leftNav);
  },
  pimPage: async ({ page }, use) => {
    const pimPage = new PimPage(page);
    await use(pimPage);
  },
  addEmployeePage: async ({ page }, use) => {
    const addEmployeePage = new AddEmployeePage(page);
    await use(addEmployeePage);
  },
});

export { loginData };
export { pimTestData };
export { adminTestData };

export { expect };

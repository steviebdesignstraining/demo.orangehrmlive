import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPages/login.pages';
import { TopNavPage } from '../../pages/topNavPages/topNav.pages';
import { LeftNavPage } from '../../pages/leftNavPages/leftNav.pages';
import { DashboardPage } from '../../pages/dashboardPages/dashboard.pages';
import { loginData } from '../../test-data/loginCredentials/login.data';

type DashboardFixtures = {
  loginPage: LoginPage;
  topNav: TopNavPage;
  leftNav: LeftNavPage;
  dashboardPage: DashboardPage;
};

export const test = base.extend<DashboardFixtures>({
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
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
});

export { loginData };

export { expect };

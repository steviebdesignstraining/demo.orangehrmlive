import {
  test,
  expect,
  loginData,
} from "../../fixtures/dashboardFixtures/dashboard.fixtures";
import { urlPatterns } from "../../test-data/urlPatterns";

test.describe.configure({ mode: "serial" });

test.describe("Dashboard scenarios", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    await expect(page).toHaveURL(urlPatterns.dashboard);
  });

  test("Dashboard displays all widgets after login", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardDisplayed();
  });

  test("Left navigation displays all menu items after login", async ({
    leftNav,
  }) => {
    await leftNav.verifyLeftNavDisplayed();
    await leftNav.verifyAllMenuItemsDisplayed();
    await leftNav.verifyDashboardMenuItemActive();
  });

  test("Left navigation closes and open", async ({ leftNav }) => {
    await leftNav.verifyLeftNavDisplayed();
    await leftNav.verifyLeftNavClosed();
    await leftNav.verifyLeftNavOpened();
  });

  test("Quick Launch section displays correctly, click and verify that the correct page is loaded", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyQuickLaunchWidgetDisplayed();
    await dashboardPage.quickLaunchLinks();
  });

  test("Employee distribution charts display with dynamic legend data", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyEmployeeDistributionChartsDisplayed();
  });

  test("Dashboard widgets remain visible after page refresh", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardWidgetsVisibleAfterRefresh();
  });

  test("Dashboard loads after browser refresh multiple times", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardLoadsAfterBrowserRefreshMultipleTimes();
  });
});

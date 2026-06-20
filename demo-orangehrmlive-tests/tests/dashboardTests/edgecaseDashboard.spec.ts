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

  test("Dashboard loads after browser back and forward navigation", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardLoadsAfterBrowserBackAndForwardNavigation();
  });

  test("Dashboard remains functional after session inactivity within timeout period", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardRemainsFunctionalAfterSessionInactivityWithinTimeoutPeriod();
  });

  test("Dashboard remains functional after browser tab is closed and reopened", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardRemainsFunctionalAfterBrowserTabIsClosedAndReopened();
  });

  test("Dashboard remains functional after browser window is closed and reopened", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardRemainsFunctionalAfterBrowserWindowIsClosedAndReopened();
  });

  test("Dashboard redirects after session timeout", async ({
    dashboardPage,
  }) => {
    await dashboardPage.verifyDashboardRedirectsAfterSessionTimeout();
  });

  test("Dashboard state remains stable after rapid menu clicks", async ({
    dashboardPage,
    leftNav,
  }) => {
    await dashboardPage.verifyDashboardStateRemainsStableAfterRapidMenuClicks(leftNav);
  });
});

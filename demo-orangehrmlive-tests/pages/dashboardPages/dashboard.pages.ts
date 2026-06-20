import { Page, expect, Locator } from "@playwright/test";
import { leftNavSelectors } from "../../selectors/leftNav/leftNav.selectors";
import { dashboardSelectors } from "../../selectors/dashboardSelectors/dashboard.selectors";
import {
  optionalDashboardWidgets,
  requiredDashboardWidgets,
  type DashboardWidget,
} from "../../test-data/dashboard/dashboard.config";
import { expectVisibleIfPresent, isPresent } from "../../utils/optionalElement";
import { urlPatterns } from "../../test-data/urlPatterns";
import { LeftNavPage } from "../../pages/leftNavPages/leftNav.pages";

const dashboardWidgetGetters: Record<
  DashboardWidget,
  (page: DashboardPage) => ReturnType<DashboardPage["getTimeAtWorkWidget"]>
> = {
  timeAtWork: (page) => page.getTimeAtWorkWidget(),
  myActions: (page) => page.getMyActionsWidget(),
  quickLaunch: (page) => page.getQuickLaunchWidget(),
  buzz: (page) => page.getBuzzWidget(),
  employeesOnLeave: (page) => page.getEmployeesOnLeaveWidget(),
  subUnitDistribution: (page) => page.getSubUnitDistributionWidget(),
  locationDistribution: (page) => page.getLocationDistributionWidget(),
};

export class DashboardPage {
  constructor(private page: Page) {}

  // Getters

  getDashboardGrid() {
    return this.page.locator(dashboardSelectors.dashboardGrid);
  }

  getTimeAtWorkWidget() {
    return this.page.locator(dashboardSelectors.timeAtWorkWidget);
  }

  getMyActionsWidget() {
    return this.page.locator(dashboardSelectors.myActionsWidget);
  }

  getQuickLaunchWidget() {
    return this.page.locator(dashboardSelectors.quickLaunchWidget);
  }

  getBuzzWidget() {
    return this.page.locator(dashboardSelectors.buzzWidget);
  }

  getEmployeesOnLeaveWidget() {
    return this.page.locator(dashboardSelectors.employeesOnLeaveWidget);
  }

  getSubUnitDistributionWidget() {
    return this.page.locator(dashboardSelectors.subUnitDistributionWidget);
  }

  getLocationDistributionWidget() {
    return this.page.locator(dashboardSelectors.locationDistributionWidget);
  }

  // Actions

  async clickAttendanceAction() {
    await this.page.click(dashboardSelectors.attendanceActionButton);
  }

  async clickAssignLeave() {
    await this.page.click(dashboardSelectors.assignLeaveButton);
  }

  async clickLeaveList() {
    await this.page.click(dashboardSelectors.leaveListButton);
  }

  async clickTimesheets() {
    await this.page.click(dashboardSelectors.timesheetsButton);
  }

  async clickApplyLeave() {
    await this.page.click(dashboardSelectors.applyLeaveButton);
  }

  async clickMyLeave() {
    await this.page.click(dashboardSelectors.myLeaveButton);
  }

  async clickMyTimesheet() {
    await this.page.click(dashboardSelectors.myTimesheetButton);
  }

  // Assertions

  async verifyDashboardDisplayed() {
    await expect(this.getDashboardGrid()).toBeVisible();

    for (const widget of requiredDashboardWidgets) {
      await expectVisibleIfPresent(dashboardWidgetGetters[widget](this));
    }

    for (const widget of optionalDashboardWidgets) {
      await expectVisibleIfPresent(dashboardWidgetGetters[widget](this));
    }
  }

  async verifyDashboardStateRemainsStableAfterRapidMenuClicks(
    leftNav: LeftNavPage,
    clickCount = 5,
  ) {
    await this.verifyDashboardDisplayed();

    const dashboardMenuItem = this.page.locator(
      leftNavSelectors.dashboardMenuItem,
    );
    await expect(dashboardMenuItem).toBeVisible();

    // Navigate to PIM first since we're on dashboard
    await leftNav.clickPim();

    // Rapidly click between Dashboard and PIM to test state stability
    for (let index = 0; index < clickCount; index++) {
      // Click dashboard (navigate to dashboard)
      await dashboardMenuItem.click();
      await expect(this.page).toHaveURL(urlPatterns.dashboard);

      // Click PIM (navigate away)
      await leftNav.clickPim();
    }

    // Final click back to dashboard
    await dashboardMenuItem.click();
    await expect(this.page).toHaveURL(urlPatterns.dashboard);
    await expect(
      this.page.locator(leftNavSelectors.activeMenuItem),
    ).toHaveText("Dashboard");
    await this.verifyDashboardDisplayed();
  }

  async verifyDashboardWidgetsVisibleAfterRefresh() {
    await this.verifyDashboardDisplayed();
    await this.page.reload();
    await expect(this.page).toHaveURL(urlPatterns.dashboard);
    await this.verifyDashboardDisplayed();
  }

  async verifyDashboardLoadsAfterBrowserRefreshMultipleTimes(
    refreshCount = 3,
  ) {
    await this.verifyDashboardDisplayed();

    for (let attempt = 0; attempt < refreshCount; attempt++) {
      await this.page.reload();
      await expect(this.page).toHaveURL(urlPatterns.dashboard);
      await this.verifyDashboardDisplayed();
    }
  }

  async verifyDashboardLoadsAfterBrowserBackAndForwardNavigation() {
    await this.verifyDashboardDisplayed();

    await this.page.locator(dashboardSelectors.applyLeaveButton).click();
    await expect(this.page).toHaveURL(urlPatterns.leaveApply);

    await this.page.goBack();
    await expect(this.page).toHaveURL(urlPatterns.dashboard);
    await this.verifyDashboardDisplayed();

    await this.page.goForward();
    await expect(this.page).toHaveURL(urlPatterns.leaveApply);

    await this.page.goBack();
    await expect(this.page).toHaveURL(urlPatterns.dashboard);
    await this.verifyDashboardDisplayed();
  }

  async verifyDashboardRemainsFunctionalAfterSessionInactivityWithinTimeoutPeriod(
    inactivityMs = 5000,
  ) {
    await this.verifyDashboardDisplayed();

    await this.page.waitForTimeout(inactivityMs);

    await expect(this.page).toHaveURL(urlPatterns.dashboard);
    await this.verifyDashboardDisplayed();

    await this.page.locator(dashboardSelectors.myLeaveButton).click();
    await expect(this.page).toHaveURL(urlPatterns.leaveMyLeaveList);

    await this.page.goBack();
    await expect(this.page).toHaveURL(urlPatterns.dashboard);
    await this.verifyDashboardDisplayed();
  }

  async verifyDashboardRemainsFunctionalAfterBrowserTabIsClosedAndReopened() {
    await this.verifyDashboardDisplayed();

    const context = this.page.context();
    const dashboardUrl = this.page.url();
    await this.page.close();

    const reopenedTab = await context.newPage();
    await reopenedTab.goto(dashboardUrl);
    await expect(reopenedTab).toHaveURL(urlPatterns.dashboard);

    const reopenedDashboard = new DashboardPage(reopenedTab);
    await reopenedDashboard.verifyDashboardDisplayed();

    await reopenedTab.locator(dashboardSelectors.myLeaveButton).click();
    await expect(reopenedTab).toHaveURL(urlPatterns.leaveMyLeaveList);

    await reopenedTab.goBack();
    await expect(reopenedTab).toHaveURL(urlPatterns.dashboard);
    await reopenedDashboard.verifyDashboardDisplayed();
  }

  async verifyDashboardRemainsFunctionalAfterBrowserWindowIsClosedAndReopened() {
    await this.verifyDashboardDisplayed();

    const browser = this.page.context().browser();
    if (!browser) {
      throw new Error("Browser instance is required to reopen a window.");
    }

    const dashboardUrl = this.page.url();
    const storageState = await this.page.context().storageState();
    await this.page.context().close();

    const reopenedContext = await browser.newContext({ storageState });
    const reopenedPage = await reopenedContext.newPage();
    await reopenedPage.goto(dashboardUrl);
    await expect(reopenedPage).toHaveURL(urlPatterns.dashboard);

    const reopenedDashboard = new DashboardPage(reopenedPage);
    await reopenedDashboard.verifyDashboardDisplayed();

    await reopenedPage.locator(dashboardSelectors.myLeaveButton).click();
    await expect(reopenedPage).toHaveURL(urlPatterns.leaveMyLeaveList);

    await reopenedPage.goBack();
    await expect(reopenedPage).toHaveURL(urlPatterns.dashboard);
    await reopenedDashboard.verifyDashboardDisplayed();

    await reopenedContext.close();
  }

  async verifyDashboardRedirectsAfterSessionTimeout() {
    await this.verifyDashboardDisplayed();

    await this.page.context().clearCookies();
    await this.page.reload();

    await expect(this.page).toHaveURL(urlPatterns.login);
    await expect(
      this.page.getByRole("heading", { name: "Login" }),
    ).toBeVisible();
  }

  async verifyTimeAtWorkWidgetDisplayed() {
    const widget = this.getTimeAtWorkWidget();

    if (!(await isPresent(widget))) {
      return;
    }

    await expect(widget).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceCard),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceProfileImage),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceState),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceDetails),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceFullTime),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceActionButton),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceSummaryWeek),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceSummaryTotal),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.attendanceChart),
    ).toBeVisible();
  }

  async verifyMyActionsWidgetDisplayed() {
    const widget = this.getMyActionsWidget();

    if (!(await isPresent(widget))) {
      return;
    }

    await expect(widget).toBeVisible();
    await expect(widget.locator(dashboardSelectors.todoList)).toBeVisible();
    await expectVisibleIfPresent(
      widget.locator(dashboardSelectors.timesheetsToApprove),
    );
    await expectVisibleIfPresent(
      widget.locator(dashboardSelectors.pendingSelfReview),
    );
    await expectVisibleIfPresent(
      widget.locator(dashboardSelectors.candidateToInterview),
    );
  }

  async verifyQuickLaunchWidgetDisplayed() {
    const widget = this.getQuickLaunchWidget();

    if (!(await isPresent(widget))) {
      return;
    }

    await expect(widget).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.quickLaunchGrid),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.assignLeaveButton),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.leaveListButton),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.timesheetsButton),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.applyLeaveButton),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.myLeaveButton),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.myTimesheetButton),
    ).toBeVisible();
  }

  async verifyBuzzWidgetDisplayed() {
    const widget = this.getBuzzWidget();

    if (!(await isPresent(widget))) {
      return;
    }

    await expect(widget).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.buzzWidgetGrid),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.buzzWidgetCard).first(),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.buzzHeaderEmployee).first(),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.buzzHeaderTime).first(),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.buzzBody).first(),
    ).toBeVisible();
  }

  async verifyEmployeesOnLeaveWidgetDisplayed() {
    const widget = this.getEmployeesOnLeaveWidget();

    if (!(await isPresent(widget))) {
      return;
    }

    await expect(widget).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.leaveCardIcon),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.employeesOnLeaveNoContent),
    ).toBeVisible();
    await expect(
      widget.locator(dashboardSelectors.employeesOnLeaveEmptyImage),
    ).toBeVisible();
    await expect(
      this.page.locator(dashboardSelectors.employeesOnLeaveEmptyText),
    ).toBeVisible();
  }

  /**
   * Checks both distribution chart widgets when they are on the page.
   * Skips quietly when a widget is missing (role/config dependent).
   */
  async verifyEmployeeDistributionChartsDisplayed() {
    await this.verifySubUnitDistributionWidgetDisplayed();
    await this.verifyLocationDistributionWidgetDisplayed();
  }

  private async verifyDistributionChartWidget(widget: Locator) {
    if (!(await isPresent(widget))) {
      return;
    }

    await expect(widget).toBeVisible();
    await expect(widget.locator(dashboardSelectors.pieChart)).toBeVisible();

    const canvas = widget.locator(dashboardSelectors.pieChartCanvas);
    await expect(canvas).toBeVisible();

    const canvasSize = await canvas.boundingBox();
    expect(canvasSize?.width).toBeGreaterThan(0);
    expect(canvasSize?.height).toBeGreaterThan(0);

    const legend = widget.locator(dashboardSelectors.chartLegend);
    await expect(legend).toBeVisible();

    const legendItems = widget.locator(dashboardSelectors.chartLegendItem);
    const legendCount = await legendItems.count();
    expect(legendCount).toBeGreaterThan(0);

    const legendLabels = widget.locator(dashboardSelectors.chartLegendLabel);
    const labelCount = await legendLabels.count();
    expect(labelCount).toBeGreaterThan(0);

    for (let index = 0; index < labelCount; index++) {
      const label = legendLabels.nth(index);
      await expect(label).toBeVisible();

      const labelText = (await label.innerText()).trim();
      expect(labelText.length).toBeGreaterThan(0);

      const colorKey = legendItems
        .nth(index)
        .locator(dashboardSelectors.chartLegendColorKey);
      await expect(colorKey).toBeVisible();
    }
  }

  async verifySubUnitDistributionWidgetDisplayed() {
    const widget = this.getSubUnitDistributionWidget();

    await this.verifyDistributionChartWidget(widget);
  }

  async verifyLocationDistributionWidgetDisplayed() {
    const widget = this.getLocationDistributionWidget();

    await this.verifyDistributionChartWidget(widget);
  }

  async quickLaunchLinks() {
    const dashboardLinks = [
      {
        selector: dashboardSelectors.assignLeaveButton,
        header: "Assign Leave",
      },
      {
        selector: dashboardSelectors.leaveListButton,
        header: "Leave List",
      },
      {
        selector: dashboardSelectors.timesheetsButton,
        header: "Select Employee",
      },
      {
        selector: dashboardSelectors.applyLeaveButton,
        header: "Apply Leave",
      },
      {
        selector: dashboardSelectors.myLeaveButton,
        header: "My Leave",
      },
      {
        selector: dashboardSelectors.myTimesheetButton,
        header: "My Timesheet",
      },
    ];

    for (const item of dashboardLinks) {
      const responsePromise = this.page.waitForResponse(
        (response) =>
          response.request().resourceType() === "document" &&
          response.status() === 200,
      );

      await this.page.locator(item.selector).click();

      const response = await responsePromise;
      expect(response.status()).toBe(200);

      await expect(
        this.page.getByRole("heading", { name: item.header }),
      ).toBeVisible();

      await this.page.goBack();
    }
  }
}

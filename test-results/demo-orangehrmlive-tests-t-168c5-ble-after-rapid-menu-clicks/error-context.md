# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo-orangehrmlive-tests/tests/dashboardTests/edgecaseDashboard.spec.ts >> Dashboard scenarios >> Dashboard state remains stable after rapid menu clicks
- Location: demo-orangehrmlive-tests/tests/dashboardTests/edgecaseDashboard.spec.ts:53:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a.oxd-main-menu-item[href*="dashboard/index"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Yazeed Ali
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "Add Employee" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "Reports" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "Employee Information" [level=5] [ref=e150]
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
        - separator [ref=e155]
        - generic [ref=e157]:
          - generic [ref=e159]:
            - generic [ref=e161]:
              - generic [ref=e163]: Employee Name
              - textbox "Type for hints..." [ref=e167]
            - generic [ref=e169]:
              - generic [ref=e171]: Employee Id
              - textbox [ref=e173]
            - generic [ref=e175]:
              - generic [ref=e177]: Employment Status
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: "-- Select --"
                - generic [ref=e183]: 
            - generic [ref=e185]:
              - generic [ref=e187]: Include
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: Current Employees Only
                - generic [ref=e193]: 
            - generic [ref=e195]:
              - generic [ref=e197]: Supervisor Name
              - textbox "Type for hints..." [ref=e201]
            - generic [ref=e203]:
              - generic [ref=e205]: Job Title
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: "-- Select --"
                - generic [ref=e211]: 
            - generic [ref=e213]:
              - generic [ref=e215]: Sub Unit
              - generic [ref=e218] [cursor=pointer]:
                - generic [ref=e219]: "-- Select --"
                - generic [ref=e221]: 
          - separator [ref=e222]
          - generic [ref=e223]:
            - button "Reset" [ref=e224] [cursor=pointer]
            - button "Search" [ref=e225] [cursor=pointer]
      - generic [ref=e226]:
        - button " Add" [ref=e228] [cursor=pointer]:
          - generic [ref=e229]: 
          - text: Add
        - table [ref=e231]
    - generic [ref=e236]:
      - paragraph [ref=e237]: OrangeHRM OS 5.8
      - paragraph [ref=e238]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e239] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  24  | };
  25  | 
  26  | export class DashboardPage {
  27  |   constructor(private page: Page) {}
  28  | 
  29  |   // Getters
  30  | 
  31  |   getDashboardGrid() {
  32  |     return this.page.locator(dashboardSelectors.dashboardGrid);
  33  |   }
  34  | 
  35  |   getTimeAtWorkWidget() {
  36  |     return this.page.locator(dashboardSelectors.timeAtWorkWidget);
  37  |   }
  38  | 
  39  |   getMyActionsWidget() {
  40  |     return this.page.locator(dashboardSelectors.myActionsWidget);
  41  |   }
  42  | 
  43  |   getQuickLaunchWidget() {
  44  |     return this.page.locator(dashboardSelectors.quickLaunchWidget);
  45  |   }
  46  | 
  47  |   getBuzzWidget() {
  48  |     return this.page.locator(dashboardSelectors.buzzWidget);
  49  |   }
  50  | 
  51  |   getEmployeesOnLeaveWidget() {
  52  |     return this.page.locator(dashboardSelectors.employeesOnLeaveWidget);
  53  |   }
  54  | 
  55  |   getSubUnitDistributionWidget() {
  56  |     return this.page.locator(dashboardSelectors.subUnitDistributionWidget);
  57  |   }
  58  | 
  59  |   getLocationDistributionWidget() {
  60  |     return this.page.locator(dashboardSelectors.locationDistributionWidget);
  61  |   }
  62  | 
  63  |   // Actions
  64  | 
  65  |   async clickAttendanceAction() {
  66  |     await this.page.click(dashboardSelectors.attendanceActionButton);
  67  |   }
  68  | 
  69  |   async clickAssignLeave() {
  70  |     await this.page.click(dashboardSelectors.assignLeaveButton);
  71  |   }
  72  | 
  73  |   async clickLeaveList() {
  74  |     await this.page.click(dashboardSelectors.leaveListButton);
  75  |   }
  76  | 
  77  |   async clickTimesheets() {
  78  |     await this.page.click(dashboardSelectors.timesheetsButton);
  79  |   }
  80  | 
  81  |   async clickApplyLeave() {
  82  |     await this.page.click(dashboardSelectors.applyLeaveButton);
  83  |   }
  84  | 
  85  |   async clickMyLeave() {
  86  |     await this.page.click(dashboardSelectors.myLeaveButton);
  87  |   }
  88  | 
  89  |   async clickMyTimesheet() {
  90  |     await this.page.click(dashboardSelectors.myTimesheetButton);
  91  |   }
  92  | 
  93  |   // Assertions
  94  | 
  95  |   async verifyDashboardDisplayed() {
  96  |     await expect(this.getDashboardGrid()).toBeVisible();
  97  | 
  98  |     for (const widget of requiredDashboardWidgets) {
  99  |       await expectVisibleIfPresent(dashboardWidgetGetters[widget](this));
  100 |     }
  101 | 
  102 |     for (const widget of optionalDashboardWidgets) {
  103 |       await expectVisibleIfPresent(dashboardWidgetGetters[widget](this));
  104 |     }
  105 |   }
  106 | 
  107 |   async verifyDashboardStateRemainsStableAfterRapidMenuClicks(
  108 |     leftNav: LeftNavPage,
  109 |     clickCount = 5,
  110 |   ) {
  111 |     await this.verifyDashboardDisplayed();
  112 | 
  113 |     const dashboardMenuItem = this.page.locator(
  114 |       leftNavSelectors.dashboardMenuItem,
  115 |     );
  116 |     await expect(dashboardMenuItem).toBeVisible();
  117 | 
  118 |     // Navigate to PIM first since we're on dashboard
  119 |     await leftNav.clickPim();
  120 | 
  121 |     // Rapidly click between Dashboard and PIM to test state stability
  122 |     for (let index = 0; index < clickCount; index++) {
  123 |       // Click dashboard (navigate to dashboard)
> 124 |       await dashboardMenuItem.click();
      |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  125 |       await expect(this.page).toHaveURL(urlPatterns.dashboard);
  126 | 
  127 |       // Click PIM (navigate away)
  128 |       await leftNav.clickPim();
  129 |     }
  130 | 
  131 |     // Final click back to dashboard
  132 |     await dashboardMenuItem.click();
  133 |     await expect(this.page).toHaveURL(urlPatterns.dashboard);
  134 |     await expect(
  135 |       this.page.locator(leftNavSelectors.activeMenuItem),
  136 |     ).toHaveText("Dashboard");
  137 |     await this.verifyDashboardDisplayed();
  138 |   }
  139 | 
  140 |   async verifyDashboardWidgetsVisibleAfterRefresh() {
  141 |     await this.verifyDashboardDisplayed();
  142 |     await this.page.reload();
  143 |     await expect(this.page).toHaveURL(urlPatterns.dashboard);
  144 |     await this.verifyDashboardDisplayed();
  145 |   }
  146 | 
  147 |   async verifyDashboardLoadsAfterBrowserRefreshMultipleTimes(
  148 |     refreshCount = 3,
  149 |   ) {
  150 |     await this.verifyDashboardDisplayed();
  151 | 
  152 |     for (let attempt = 0; attempt < refreshCount; attempt++) {
  153 |       await this.page.reload();
  154 |       await expect(this.page).toHaveURL(urlPatterns.dashboard);
  155 |       await this.verifyDashboardDisplayed();
  156 |     }
  157 |   }
  158 | 
  159 |   async verifyDashboardLoadsAfterBrowserBackAndForwardNavigation() {
  160 |     await this.verifyDashboardDisplayed();
  161 | 
  162 |     await this.page.locator(dashboardSelectors.applyLeaveButton).click();
  163 |     await expect(this.page).toHaveURL(urlPatterns.leaveApply);
  164 | 
  165 |     await this.page.goBack();
  166 |     await expect(this.page).toHaveURL(urlPatterns.dashboard);
  167 |     await this.verifyDashboardDisplayed();
  168 | 
  169 |     await this.page.goForward();
  170 |     await expect(this.page).toHaveURL(urlPatterns.leaveApply);
  171 | 
  172 |     await this.page.goBack();
  173 |     await expect(this.page).toHaveURL(urlPatterns.dashboard);
  174 |     await this.verifyDashboardDisplayed();
  175 |   }
  176 | 
  177 |   async verifyDashboardRemainsFunctionalAfterSessionInactivityWithinTimeoutPeriod(
  178 |     inactivityMs = 5000,
  179 |   ) {
  180 |     await this.verifyDashboardDisplayed();
  181 | 
  182 |     await this.page.waitForTimeout(inactivityMs);
  183 | 
  184 |     await expect(this.page).toHaveURL(urlPatterns.dashboard);
  185 |     await this.verifyDashboardDisplayed();
  186 | 
  187 |     await this.page.locator(dashboardSelectors.myLeaveButton).click();
  188 |     await expect(this.page).toHaveURL(urlPatterns.leaveMyLeaveList);
  189 | 
  190 |     await this.page.goBack();
  191 |     await expect(this.page).toHaveURL(urlPatterns.dashboard);
  192 |     await this.verifyDashboardDisplayed();
  193 |   }
  194 | 
  195 |   async verifyDashboardRemainsFunctionalAfterBrowserTabIsClosedAndReopened() {
  196 |     await this.verifyDashboardDisplayed();
  197 | 
  198 |     const context = this.page.context();
  199 |     const dashboardUrl = this.page.url();
  200 |     await this.page.close();
  201 | 
  202 |     const reopenedTab = await context.newPage();
  203 |     await reopenedTab.goto(dashboardUrl);
  204 |     await expect(reopenedTab).toHaveURL(urlPatterns.dashboard);
  205 | 
  206 |     const reopenedDashboard = new DashboardPage(reopenedTab);
  207 |     await reopenedDashboard.verifyDashboardDisplayed();
  208 | 
  209 |     await reopenedTab.locator(dashboardSelectors.myLeaveButton).click();
  210 |     await expect(reopenedTab).toHaveURL(urlPatterns.leaveMyLeaveList);
  211 | 
  212 |     await reopenedTab.goBack();
  213 |     await expect(reopenedTab).toHaveURL(urlPatterns.dashboard);
  214 |     await reopenedDashboard.verifyDashboardDisplayed();
  215 |   }
  216 | 
  217 |   async verifyDashboardRemainsFunctionalAfterBrowserWindowIsClosedAndReopened() {
  218 |     await this.verifyDashboardDisplayed();
  219 | 
  220 |     const browser = this.page.context().browser();
  221 |     if (!browser) {
  222 |       throw new Error("Browser instance is required to reopen a window.");
  223 |     }
  224 | 
```
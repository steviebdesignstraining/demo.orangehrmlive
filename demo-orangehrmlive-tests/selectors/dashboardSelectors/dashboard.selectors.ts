interface DashboardSelectors {
  // Layout
  dashboardContext: string;
  dashboardGrid: string;
  dashboardWidget: string;
  widgetHeader: string;
  widgetName: string;
  widgetBody: string;
  widgetDivider: string;

  // Time at Work
  timeAtWorkWidget: string;
  attendanceCard: string;
  attendanceProfileImage: string;
  attendanceState: string;
  attendanceDetails: string;
  attendanceFullTime: string;
  attendanceActionButton: string;
  attendanceSummaryWeek: string;
  attendanceSummaryTotal: string;
  attendanceChart: string;

  // My Actions
  myActionsWidget: string;
  todoList: string;
  todoListItem: string;
  timesheetsToApprove: string;
  pendingSelfReview: string;
  candidateToInterview: string;

  // Quick Launch
  quickLaunchWidget: string;
  quickLaunchGrid: string;
  quickLaunchCard: string;
  assignLeaveButton: string;
  leaveListButton: string;
  timesheetsButton: string;
  applyLeaveButton: string;
  myLeaveButton: string;
  myTimesheetButton: string;

  // Buzz Latest Posts
  buzzWidget: string;
  buzzWidgetGrid: string;
  buzzWidgetCard: string;
  buzzProfileImage: string;
  buzzHeaderEmployee: string;
  buzzHeaderTime: string;
  buzzBody: string;
  buzzPicture: string;

  // Employees on Leave Today
  employeesOnLeaveWidget: string;
  leaveCardIcon: string;
  employeesOnLeaveNoContent: string;
  employeesOnLeaveEmptyImage: string;
  employeesOnLeaveEmptyText: string;

  // Employee Distribution by Sub Unit
  subUnitDistributionWidget: string;
  subUnitDistributionChart: string;

  // Employee Distribution by Location
  locationDistributionWidget: string;
  locationDistributionChart: string;

  // Shared chart elements
  pieChart: string;
  pieChartCanvas: string;
  chartLegend: string;
  chartLegendItem: string;
  chartLegendLabel: string;
  chartLegendColorKey: string;
}

export const dashboardSelectors: DashboardSelectors = {
  // Layout
  dashboardContext: '.oxd-layout-context',
  dashboardGrid: '.orangehrm-dashboard-grid',
  dashboardWidget: '.orangehrm-dashboard-widget',
  widgetHeader: '.orangehrm-dashboard-widget-header',
  widgetName: '.orangehrm-dashboard-widget-name',
  widgetBody: '.orangehrm-dashboard-widget-body',
  widgetDivider: '.oxd-divider',

  // Time at Work
  timeAtWorkWidget: '.oxd-grid-item.orangehrm-dashboard-widget:has(.orangehrm-attendance-card)',
  attendanceCard: '.orangehrm-attendance-card',
  attendanceProfileImage: '.orangehrm-attendance-card-profile-image img',
  attendanceState: '.orangehrm-attendance-card-state',
  attendanceDetails: '.orangehrm-attendance-card-details',
  attendanceFullTime: '.orangehrm-attendance-card-bar .orangehrm-attendance-card-fulltime',
  attendanceActionButton: '.orangehrm-attendance-card-action',
  attendanceSummaryWeek: '.orangehrm-attendance-card-summary-week',
  attendanceSummaryTotal: '.orangehrm-attendance-card-summary-total',
  attendanceChart: '.emp-attendance-chart canvas',

  // My Actions
  myActionsWidget: '.oxd-grid-item.orangehrm-dashboard-widget:has(.orangehrm-todo-list)',
  todoList: '.orangehrm-todo-list',
  todoListItem: '.orangehrm-todo-list-item',
  timesheetsToApprove: '.orangehrm-todo-list-item:has-text("Timesheets to Approve")',
  pendingSelfReview: '.orangehrm-todo-list-item:has-text("Pending Self Review")',
  candidateToInterview: '.orangehrm-todo-list-item:has-text("Candidate to Interview")',

  // Quick Launch
  quickLaunchWidget: '.oxd-grid-item.orangehrm-dashboard-widget:has(.orangehrm-quick-launch)',
  quickLaunchGrid: '.orangehrm-quick-launch',
  quickLaunchCard: '.orangehrm-quick-launch-card',
  assignLeaveButton: 'button[title="Assign Leave"]',
  leaveListButton: 'button[title="Leave List"]',
  timesheetsButton: 'button[title="Timesheets"]',
  applyLeaveButton: 'button[title="Apply Leave"]',
  myLeaveButton: 'button[title="My Leave"]',
  myTimesheetButton: 'button[title="My Timesheet"]',

  // Buzz Latest Posts
  buzzWidget: '.oxd-grid-item.orangehrm-dashboard-widget:has(.orangehrm-buzz-widget)',
  buzzWidgetGrid: '.orangehrm-buzz-widget',
  buzzWidgetCard: '.orangehrm-buzz-widget-card',
  buzzProfileImage: '.orangehrm-buzz-profile-image img',
  buzzHeaderEmployee: '.orangehrm-buzz-widget-header-emp',
  buzzHeaderTime: '.orangehrm-buzz-widget-header-time',
  buzzBody: '.orangehrm-buzz-widget-body',
  buzzPicture: '.orangehrm-buzz-widget-picture',

  // Employees on Leave Today
  employeesOnLeaveWidget:
    '.oxd-grid-item.orangehrm-dashboard-widget:has-text("Employees on Leave Today")',
  leaveCardIcon: '.orangehrm-leave-card-icon',
  employeesOnLeaveNoContent: '.orangehrm-dashboard-widget-body-nocontent',
  employeesOnLeaveEmptyImage: '.orangehrm-dashboard-widget-img',
  employeesOnLeaveEmptyText: 'text=No Employees are on Leave Today',

  // Employee Distribution by Sub Unit
  subUnitDistributionWidget:
    '.oxd-grid-item.orangehrm-dashboard-widget:has-text("Employee Distribution by Sub Unit")',
  subUnitDistributionChart:
    '.oxd-grid-item.orangehrm-dashboard-widget:has-text("Employee Distribution by Sub Unit") .emp-distrib-chart',

  // Employee Distribution by Location
  locationDistributionWidget:
    '.oxd-grid-item.orangehrm-dashboard-widget:has-text("Employee Distribution by Location")',
  locationDistributionChart:
    '.oxd-grid-item.orangehrm-dashboard-widget:has-text("Employee Distribution by Location") .emp-distrib-chart',

  // Shared chart elements
  pieChart: '.oxd-pie-chart',
  pieChartCanvas: '.oxd-pie-chart canvas',
  chartLegend: '.oxd-chart-legend',
  chartLegendItem: '.oxd-chart-legend li',
  chartLegendLabel: '.oxd-chart-legend li span.oxd-text',
  chartLegendColorKey: '.oxd-chart-legend-key',
};

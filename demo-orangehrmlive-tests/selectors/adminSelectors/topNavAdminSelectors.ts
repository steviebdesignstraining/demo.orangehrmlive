export const TopNavAdminSelectors = {
  topNavContainer: ".oxd-topbar-body",
  topNavMenu: ".oxd-topbar-body-nav",
  topNavTabs: ".oxd-topbar-body-nav-tab",

  userManagementTab:
    'span.oxd-topbar-body-nav-tab-item:has-text("User Management")',

  jobTab: 'span.oxd-topbar-body-nav-tab-item:has-text("Job")',

  organizationTab: 'span.oxd-topbar-body-nav-tab-item:has-text("Organization")',

  qualificationsTab:
    'span.oxd-topbar-body-nav-tab-item:has-text("Qualifications")',

  moreTab: 'span.oxd-topbar-body-nav-tab-item:has-text("More")',

  helpButton: 'button[title="Help"]',
};

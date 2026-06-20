interface LeftNavSelectors {
  // Navigation
  sideNav: string;
  sidepanelHeader: string;
  sidepanelCloseButton: string;

  // Brand
  brandLink: string;
  brandLogo: string;
  brandBanner: string;

  // Search
  mainMenu: string;
  searchContainer: string;
  searchInput: string;
  menuCollapseButton: string;
  menuDivider: string;

  // Menu structure
  menuList: string;
  menuItemWrapper: string;
  menuItem: string;
  menuItemIcon: string;
  menuItemName: string;
  activeMenuItem: string;

  // Menu items
  adminMenuItem: string;
  pimMenuItem: string;
  leaveMenuItem: string;
  timeMenuItem: string;
  recruitmentMenuItem: string;
  myInfoMenuItem: string;
  performanceMenuItem: string;
  dashboardMenuItem: string;
  directoryMenuItem: string;
  maintenanceMenuItem: string;
  claimMenuItem: string;
  buzzMenuItem: string;
}

export const leftNavSelectors: LeftNavSelectors = {
  // Navigation
  sideNav: 'nav.oxd-navbar-nav',
  sidepanelHeader: '.oxd-sidepanel-header',
  sidepanelCloseButton: '.oxd-sidepanel-header-close',

  // Brand
  brandLink: 'a.oxd-brand',
  brandLogo: '.oxd-brand-logo img',
  brandBanner: '.oxd-brand-banner img',

  // Search
  mainMenu: '.oxd-main-menu',
  searchContainer: '.oxd-main-menu-search',
  searchInput: '.oxd-main-menu-search input.oxd-input',
  menuCollapseButton: '.oxd-main-menu-button',
  menuDivider: '.oxd-main-menu-divider',

  // Menu structure
  menuList: 'ul.oxd-main-menu',
  menuItemWrapper: '.oxd-main-menu-item-wrapper',
  menuItem: 'a.oxd-main-menu-item',
  menuItemIcon: '.oxd-main-menu-item--icon',
  menuItemName: '.oxd-main-menu-item--name',
  activeMenuItem: 'a.oxd-main-menu-item.active',

  // Menu items
  adminMenuItem: 'a.oxd-main-menu-item[href*="admin/viewAdminModule"]',
  pimMenuItem: 'a.oxd-main-menu-item[href*="pim/viewPimModule"]',
  leaveMenuItem: 'a.oxd-main-menu-item[href*="leave/viewLeaveModule"]',
  timeMenuItem: 'a.oxd-main-menu-item[href*="time/viewTimeModule"]',
  recruitmentMenuItem: 'a.oxd-main-menu-item[href*="recruitment/viewRecruitmentModule"]',
  myInfoMenuItem: 'a.oxd-main-menu-item[href*="pim/viewMyDetails"]',
  performanceMenuItem: 'a.oxd-main-menu-item[href*="performance/viewPerformanceModule"]',
  dashboardMenuItem: 'a.oxd-main-menu-item[href*="dashboard/index"]',
  directoryMenuItem: 'a.oxd-main-menu-item[href*="directory/viewDirectory"]',
  maintenanceMenuItem: 'a.oxd-main-menu-item[href*="maintenance/viewMaintenanceModule"]',
  claimMenuItem: 'a.oxd-main-menu-item[href*="claim/viewClaimModule"]',
  buzzMenuItem: 'a.oxd-main-menu-item[href*="buzz/viewBuzz"]',
};

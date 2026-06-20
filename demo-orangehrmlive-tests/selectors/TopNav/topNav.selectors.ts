interface TopNavSelectors {
  topbarHeader: string;
  hamburgerMenu: string;
  breadcrumbModule: string;
  upgradeButton: string;
  userDropdown: string;
  userDropdownImg: string;
  userDropdownName: string;
  userDropdownIcon: string;
  userDropdownMenu: string;
  aboutOption: string;
  supportOption: string;
  changePasswordOption: string;
  logoutOption: string;
}

export const topNavSelectors: TopNavSelectors = {
  // Topbar Header
  topbarHeader: '.oxd-topbar-header',

  // Hamburger Menu
  hamburgerMenu: '.oxd-topbar-header-hamburger',

  // Breadcrumb
  breadcrumbModule: '.oxd-topbar-header-breadcrumb-module',

  // Upgrade Button
  upgradeButton: '.orangehrm-upgrade-button',

  // User Dropdown
  userDropdown: '.oxd-userdropdown',
  userDropdownImg: '.oxd-userdropdown-img',
  userDropdownName: '.oxd-userdropdown-name',
  userDropdownIcon: '.oxd-userdropdown-icon',
  userDropdownMenu: '.oxd-dropdown-menu',
  aboutOption: 'a.oxd-userdropdown-link:has-text("About")',
  supportOption: 'a.oxd-userdropdown-link:has-text("Support")',
  changePasswordOption: 'a.oxd-userdropdown-link:has-text("Change Password")',
  logoutOption: 'a.oxd-userdropdown-link:has-text("Logout")',
};
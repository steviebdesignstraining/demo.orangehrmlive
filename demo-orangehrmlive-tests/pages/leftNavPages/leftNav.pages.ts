import { Page, expect } from "@playwright/test";
import { leftNavSelectors } from "../../selectors/leftNav/leftNav.selectors";
import {
  optionalLeftNavMenuItems,
  requiredLeftNavMenuItems,
  type LeftNavMenuItem,
} from "../../test-data/dashboard/dashboard.config";
import { expectVisibleIfPresent } from "../../utils/optionalElement";
import { urlPatterns } from "../../test-data/urlPatterns";

const leftNavMenuItemSelectors: Record<LeftNavMenuItem, string> = {
  admin: leftNavSelectors.adminMenuItem,
  pim: leftNavSelectors.pimMenuItem,
  leave: leftNavSelectors.leaveMenuItem,
  time: leftNavSelectors.timeMenuItem,
  recruitment: leftNavSelectors.recruitmentMenuItem,
  myInfo: leftNavSelectors.myInfoMenuItem,
  performance: leftNavSelectors.performanceMenuItem,
  dashboard: leftNavSelectors.dashboardMenuItem,
  directory: leftNavSelectors.directoryMenuItem,
  maintenance: leftNavSelectors.maintenanceMenuItem,
  claim: leftNavSelectors.claimMenuItem,
  buzz: leftNavSelectors.buzzMenuItem,
};

export class LeftNavPage {
  constructor(private page: Page) {}

  // Getters

  getSideNav() {
    return this.page.locator(leftNavSelectors.sideNav);
  }

  getSearchInput() {
    return this.page.locator(leftNavSelectors.searchInput);
  }

  // Actions

  async searchMenu(query: string) {
    await this.page.fill(leftNavSelectors.searchInput, query);
  }

  async clickMenuCollapse() {
    await this.page.click(leftNavSelectors.menuCollapseButton);
  }

  async clickSidepanelClose() {
    await this.page.click(leftNavSelectors.sidepanelCloseButton);
  }

  async clickAdmin() {
    await this.page.click(leftNavSelectors.adminMenuItem);
    await expect(this.page).toHaveURL(urlPatterns.adminUsers);
  }

  async clickPim() {
    await this.page.click(leftNavSelectors.pimMenuItem);
    await expect(this.page).toHaveURL(urlPatterns.employeeList);
  }

  async clickLeave() {
    await this.page.click(leftNavSelectors.leaveMenuItem);
  }

  async clickTime() {
    await this.page.click(leftNavSelectors.timeMenuItem);
  }

  async clickRecruitment() {
    await this.page.click(leftNavSelectors.recruitmentMenuItem);
  }

  async clickMyInfo() {
    await this.page.click(leftNavSelectors.myInfoMenuItem);
  }

  async clickPerformance() {
    await this.page.click(leftNavSelectors.performanceMenuItem);
  }

  async clickDashboard() {
    if (this.page.url().includes("/dashboard/index")) {
      return;
    }
    await this.page.click(leftNavSelectors.dashboardMenuItem);
    await expect(this.page).toHaveURL(urlPatterns.dashboard);
  }

  async clickDirectory() {
    await this.page.click(leftNavSelectors.directoryMenuItem);
  }

  async clickMaintenance() {
    await this.page.click(leftNavSelectors.maintenanceMenuItem);
  }

  async clickClaim() {
    await this.page.click(leftNavSelectors.claimMenuItem);
  }

  async clickBuzz() {
    await this.page.click(leftNavSelectors.buzzMenuItem);
  }

  // Assertions

  async verifyLeftNavDisplayed() {
    const sideNav = this.getSideNav();

    await expect(sideNav).toBeVisible();
    await expect(
      sideNav.locator(leftNavSelectors.sidepanelHeader),
    ).toBeVisible();
    await expect(sideNav.locator(leftNavSelectors.brandLink)).toBeVisible();
    await expect(sideNav.locator(leftNavSelectors.searchInput)).toBeVisible();
    await expect(sideNav.locator(leftNavSelectors.menuList)).toBeVisible();
  }

  async verifyAllMenuItemsDisplayed() {
    const sideNav = this.getSideNav();

    for (const menuItem of requiredLeftNavMenuItems) {
      await expect(
        sideNav.locator(leftNavMenuItemSelectors[menuItem]),
      ).toBeVisible();
    }

    for (const menuItem of optionalLeftNavMenuItems) {
      await expectVisibleIfPresent(
        sideNav.locator(leftNavMenuItemSelectors[menuItem]),
      );
    }
  }

  async verifyDashboardMenuItemActive() {
    await expect(this.page.locator(leftNavSelectors.activeMenuItem)).toHaveText(
      "Dashboard",
    );
  }

  async verifyLeftNavClosed() {
    await this.clickMenuCollapse();

    const sideNav = this.getSideNav();
    await expect(
      sideNav.locator(leftNavSelectors.menuItemName).first(),
    ).toBeHidden();
  }

  async verifyLeftNavOpened() {
    await this.clickMenuCollapse();

    const sideNav = this.getSideNav();
    await expect(
      sideNav.locator(leftNavSelectors.menuItemName).first(),
    ).toBeVisible();
  }
}

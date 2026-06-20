import { Page, Locator, expect } from "@playwright/test";
import { TopNavAdminSelectors } from "../../selectors/adminSelectors/topNavAdminSelectors";

export class AdminTopNavPage {
  readonly page: Page;
  readonly topNavContainer: Locator;
  readonly topNavMenu: Locator;
  readonly topNavTabs: Locator;
  readonly userManagementTab: Locator;
  readonly jobTab: Locator;
  readonly organizationTab: Locator;
  readonly moreTab: Locator;
  readonly helpButton: Locator;
  readonly qualificationsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topNavContainer = page.locator(TopNavAdminSelectors.topNavContainer);
    this.topNavMenu = page.locator(TopNavAdminSelectors.topNavMenu);
    this.topNavTabs = page.locator(TopNavAdminSelectors.topNavTabs);
    this.userManagementTab = page.locator(
      TopNavAdminSelectors.userManagementTab,
    );
    this.jobTab = page.locator(TopNavAdminSelectors.jobTab);
    this.organizationTab = page.locator(TopNavAdminSelectors.organizationTab);
    this.moreTab = page.locator(TopNavAdminSelectors.moreTab);
    this.helpButton = page.locator(TopNavAdminSelectors.helpButton);
    this.qualificationsTab = page.locator(
      TopNavAdminSelectors.qualificationsTab,
    );
  }

  async verifyTopNavVisible(): Promise<void> {
    await expect(this.topNavContainer).toBeVisible();
  }

  async clickUserManagement(): Promise<void> {
    await this.userManagementTab.click();
  }

  async clickJob(): Promise<void> {
    await this.jobTab.click();
  }

  async clickOrganization(): Promise<void> {
    await this.organizationTab.click();
  }

  async clickMore(): Promise<void> {
    await this.moreTab.click();
  }

  async clickHelp(): Promise<void> {
    await this.helpButton.click();
  }

  async clickQualifications(): Promise<void> {
    await this.qualificationsTab.click();
  }
}

import { Page, Locator, expect } from "@playwright/test";
import { PimSelectors } from "../../selectors/pimSelectors/pim.selectors";
import { urlPatterns } from "../../test-data/urlPatterns";

export class AddEmployeePage {
  readonly page: Page;

  // Add Employee form
  readonly addEmployeeForm: Locator;
  readonly addEmployeeTitle: Locator;

  // Profile image
  readonly profileImageInput: Locator;
  readonly profileImage: Locator;
  readonly addImageButton: Locator;

  // Employee Full Name
  readonly employeeFullNameLabel: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;

  // Employee Id
  readonly formEmployeeIdInput: Locator;

  // Create Login Details
  readonly createLoginDetailsHeader: Locator;
  readonly createLoginSwitch: Locator;
  readonly createLoginSwitchLabel: Locator;

  // Login Details fields
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;

  // Form buttons
  readonly cancelButton: Locator;
  readonly saveButton: Locator;

  // Edit Employee form
  readonly editEmployeeContainer: Locator;
  readonly editEmployeeName: Locator;
  readonly editEmployeeImage: Locator;

  // Tabs
  readonly tabsContainer: Locator;
  readonly personalDetailsTab: Locator;
  readonly contactDetailsTab: Locator;
  readonly emergencyContactsTab: Locator;
  readonly dependentsTab: Locator;
  readonly immigrationTab: Locator;
  readonly jobTab: Locator;
  readonly salaryTab: Locator;
  readonly reportToTab: Locator;
  readonly qualificationsTab: Locator;
  readonly membershipsTab: Locator;

  // Personal Details form fields
  readonly personalDetailsTitle: Locator;
  readonly otherIdInput: Locator;
  readonly driversLicenseInput: Locator;
  readonly licenseExpiryDateInput: Locator;
  readonly nationalityDropdown: Locator;
  readonly maritalStatusDropdown: Locator;
  readonly dateOfBirthInput: Locator;
  readonly genderMaleRadio: Locator;
  readonly genderFemaleRadio: Locator;

  // Custom Fields
  readonly customFieldsTitle: Locator;
  readonly bloodTypeDropdown: Locator;
  readonly testFieldInput: Locator;

  // Attachments
  readonly attachmentsTitle: Locator;
  readonly addAttachmentButton: Locator;
  readonly attachmentsTable: Locator;
  readonly noRecordsFound: Locator;

  constructor(page: Page) {
    this.page = page;

    // Add Employee form
    this.addEmployeeForm = page.locator(PimSelectors.addEmployeeForm);
    this.addEmployeeTitle = page.locator(PimSelectors.addEmployeeTitle);

    // Profile image
    this.profileImageInput = page.locator(PimSelectors.profileImageInput);
    this.profileImage = page.locator(PimSelectors.profileImage);
    this.addImageButton = page.locator(PimSelectors.addImageButton);

    // Employee Full Name
    this.employeeFullNameLabel = page.locator(PimSelectors.employeeFullNameLabel);
    this.firstNameInput = page.locator(PimSelectors.firstNameInput);
    this.middleNameInput = page.locator(PimSelectors.middleNameInput);
    this.lastNameInput = page.locator(PimSelectors.lastNameInput);

    // Employee Id
    this.formEmployeeIdInput = page.locator(PimSelectors.formEmployeeIdInput);

    // Create Login Details
    this.createLoginDetailsHeader = page.locator(
      PimSelectors.createLoginDetailsHeader,
    );
    this.createLoginSwitch = page.locator(PimSelectors.createLoginSwitch);
    this.createLoginSwitchLabel = page.locator(
      PimSelectors.createLoginSwitchLabel,
    );

    // Login Details fields
    this.usernameInput = page.locator(PimSelectors.usernameInput);
    this.passwordInput = page.locator(PimSelectors.passwordInput).first();
    this.confirmPasswordInput = page.locator(PimSelectors.confirmPasswordInput).nth(1);

    // Form buttons
    this.cancelButton = page.locator(PimSelectors.cancelButton);
    this.saveButton = page.locator(PimSelectors.saveButton);

    // Edit Employee form
    this.editEmployeeContainer = page.locator(PimSelectors.editEmployeeContainer);
    this.editEmployeeName = page.locator(PimSelectors.editEmployeeName);
    this.editEmployeeImage = page.locator(PimSelectors.editEmployeeImage);

    // Tabs
    this.tabsContainer = page.locator(PimSelectors.tabsContainer);
    this.personalDetailsTab = page.locator(PimSelectors.personalDetailsTab);
    this.contactDetailsTab = page.locator(PimSelectors.contactDetailsTab);
    this.emergencyContactsTab = page.locator(PimSelectors.emergencyContactsTab);
    this.dependentsTab = page.locator(PimSelectors.dependentsTab);
    this.immigrationTab = page.locator(PimSelectors.immigrationTab);
    this.jobTab = page.locator(PimSelectors.jobTab);
    this.salaryTab = page.locator(PimSelectors.salaryTab);
    this.reportToTab = page.locator(PimSelectors.reportToTab);
    this.qualificationsTab = page.locator(PimSelectors.qualificationsTab);
    this.membershipsTab = page.locator(PimSelectors.membershipsTab);

    // Personal Details form fields
    this.personalDetailsTitle = page.locator(PimSelectors.personalDetailsTitle);
    this.otherIdInput = page.locator(PimSelectors.otherIdInput);
    this.driversLicenseInput = page.locator(PimSelectors.driversLicenseInput);
    this.licenseExpiryDateInput = page.locator(
      PimSelectors.licenseExpiryDateInput,
    );
    this.nationalityDropdown = page.locator(PimSelectors.nationalityDropdown);
    this.maritalStatusDropdown = page.locator(PimSelectors.maritalStatusDropdown);
    this.dateOfBirthInput = page.locator(PimSelectors.dateOfBirthInput);
    this.genderMaleRadio = page.locator(PimSelectors.genderMaleRadio);
    this.genderFemaleRadio = page.locator(PimSelectors.genderFemaleRadio);

    // Custom Fields
    this.customFieldsTitle = page.locator(PimSelectors.customFieldsTitle);
    this.bloodTypeDropdown = page.locator(PimSelectors.bloodTypeDropdown);
    this.testFieldInput = page.locator(PimSelectors.testFieldInput);

    // Attachments
    this.attachmentsTitle = page.locator(PimSelectors.attachmentsTitle);
    this.addAttachmentButton = page.locator(PimSelectors.addAttachmentButton);
    this.attachmentsTable = page.locator(PimSelectors.attachmentsTable);
    this.noRecordsFound = page.locator(PimSelectors.noRecordsFound);
  }

  async verifyAddEmployeePageLoaded(): Promise<void> {
    await expect(this.addEmployeeTitle).toBeVisible();
  }

  async fillEmployeeName(firstName: string, lastName: string, middleName?: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    if (middleName) {
      await this.middleNameInput.fill(middleName);
    }
    await this.lastNameInput.fill(lastName);
  }

  async fillEmployeeId(employeeId: string): Promise<void> {
    await this.formEmployeeIdInput.fill(employeeId);
  }

  async toggleCreateLoginDetails(enable: boolean): Promise<void> {
    // Wait for any form loaders to disappear before interacting with the switch
    await this.page.waitForSelector('.oxd-form-loader', { state: 'hidden', timeout: 30000 }).catch(() => {});

    const isCurrentlyEnabled = await this.createLoginSwitch.isChecked();

    if (isCurrentlyEnabled !== enable) {
      await this.createLoginSwitchLabel.click();
    }

    if (enable) {
      await expect(this.usernameInput).toBeVisible({ timeout: 10000 });
      await expect(this.usernameInput).toBeEditable({ timeout: 10000 });
      await expect(this.passwordInput).toBeVisible({ timeout: 10000 });
      await expect(this.passwordInput).toBeEditable({ timeout: 10000 });
      await expect(this.confirmPasswordInput).toBeVisible({ timeout: 10000 });
      await expect(this.confirmPasswordInput).toBeEditable({ timeout: 10000 });
    } else {
      await expect(this.usernameInput).toBeHidden({ timeout: 10000 });
    }
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(password: string): Promise<void> {
    await this.confirmPasswordInput.fill(password);
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
    // Wait for navigation to complete after save (navigates to personal details page)
    await this.page.waitForURL(/\/pim\/viewPersonalDetails|\/pim\/addEmployee/, { timeout: 30000 });
  }

  async clickCancel(): Promise<void> {
    await this.cancelButton.click();
  }

  async verifyEditEmployeePageLoaded(firstName: string, lastName: string): Promise<void> {
    const expectedName = `${firstName} ${lastName}`;
    await expect(this.editEmployeeName).toHaveText(expectedName);
  }

  async clickPersonalDetailsTab(): Promise<void> {
    await this.personalDetailsTab.click();
  }

  async clickContactDetailsTab(): Promise<void> {
    await this.contactDetailsTab.click();
  }

  async clickEmergencyContactsTab(): Promise<void> {
    await this.emergencyContactsTab.click();
  }

  async clickDependentsTab(): Promise<void> {
    await this.dependentsTab.click();
  }

  async clickImmigrationTab(): Promise<void> {
    await this.immigrationTab.click();
  }

  async clickJobTab(): Promise<void> {
    await this.jobTab.click();
  }

  async clickSalaryTab(): Promise<void> {
    await this.salaryTab.click();
  }

  async clickReportToTab(): Promise<void> {
    await this.reportToTab.click();
  }

  async clickQualificationsTab(): Promise<void> {
    await this.qualificationsTab.click();
  }

  async clickMembershipsTab(): Promise<void> {
    await this.membershipsTab.click();
  }

  async getByOption(dropdownLocator: Locator, optionText?: string): Promise<Locator> {
    // Click dropdown to open options
    await dropdownLocator.click();
    // Wait for dropdown to be visible
    await expect(this.page.locator(".oxd-select-dropdown")).toBeVisible();
    // Wait for options to load
    await this.page.waitForTimeout(500);
    // Get options using getByRole
    const options = this.page.getByRole('option');
    if (optionText) {
      // Get specific option by text
      const option = options.filter({ hasText: optionText }).first();
      await option.waitFor({ state: 'visible', timeout: 120_000 });
      return option;
    }
    // Get first option
    const firstOption = options.first();
    await firstOption.waitFor({ state: 'visible', timeout: 120_000 });
    return firstOption;
  }

  async fillPersonalDetails(data: {
    otherId?: string;
    driversLicense?: string;
    licenseExpiryDate?: string;
    nationality?: string;
    maritalStatus?: string;
    dateOfBirth?: string;
    gender?: "male" | "female";
  }): Promise<void> {
    if (data.otherId) {
      await this.otherIdInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.otherIdInput.fill(data.otherId);
    }
    if (data.driversLicense) {
      await this.driversLicenseInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.driversLicenseInput.fill(data.driversLicense);
    }
    if (data.licenseExpiryDate) {
      await this.licenseExpiryDateInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.licenseExpiryDateInput.fill(data.licenseExpiryDate);
    }
    if (data.nationality) {
      const option = await this.getByOption(this.nationalityDropdown, data.nationality);
      await option.click();
    }
    if (data.maritalStatus) {
      const option = await this.getByOption(this.maritalStatusDropdown, data.maritalStatus);
      await option.click();
    }
    if (data.dateOfBirth) {
      await this.dateOfBirthInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.dateOfBirthInput.fill(data.dateOfBirth);
    }
    if (data.gender) {
      if (data.gender === "male") {
        await this.genderMaleRadio.click({ force: true });
      } else {
        await this.genderFemaleRadio.click({ force: true });
      }
    }
  }

  async fillCustomFields(data: {
    bloodType?: string;
    testField?: string;
  }): Promise<void> {
    if (data.bloodType) {
      const option = await this.getByOption(this.bloodTypeDropdown, data.bloodType);
      await option.click();
    }
    if (data.testField) {
      await this.testFieldInput.fill(data.testField);
    }
  }

  async clickAddAttachment(): Promise<void> {
    await this.addAttachmentButton.click();
  }

  async isAttachmentsTableVisible(): Promise<boolean> {
    return await this.attachmentsTable.isVisible();
  }

  async verifyNoAttachments(): Promise<void> {
    await expect(this.noRecordsFound).toBeVisible();
  }
}

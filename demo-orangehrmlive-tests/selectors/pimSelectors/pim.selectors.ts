export const PimSelectors = {
  // ========================================
  // PAGE
  // ========================================
  pageTitle: 'h5:has-text("Employee Information")',

  // ========================================
  // TOP NAVIGATION
  // ========================================
  topNavContainer: ".oxd-topbar-body",
  topNavMenu: ".oxd-topbar-body-nav",
  topNavTabs: ".oxd-topbar-body-nav-tab",

  configurationTab: 'span.oxd-topbar-body-nav-tab-item:has-text("Configuration")',
  employeeListTab: 'a.oxd-topbar-body-nav-tab-item:has-text("Employee List")',
  addEmployeeTab: 'a.oxd-topbar-body-nav-tab-item:has-text("Add Employee")',
  reportsTab: 'a.oxd-topbar-body-nav-tab-item:has-text("Reports")',
  helpButton: 'button[title="Help"]',

  // ========================================
  // FILTER SECTION
  // ========================================
  filterSection: ".oxd-table-filter",
  filterTitle: 'h5:has-text("Employee Information")',
  collapseFilterButton: ".oxd-table-filter-header-options button",

  // Employee Name
  employeeNameLabel: 'label:has-text("Employee Name")',
  employeeNameInput: '.oxd-input-group:has(label:text("Employee Name")) input',

  // Employee Id
  employeeIdLabel: 'label:has-text("Employee Id")',
  employeeIdInput: '.oxd-input-group:has(label:text("Employee Id")) input',

  // Employment Status
  employmentStatusLabel: 'label:has-text("Employment Status")',
  employmentStatusDropdown:
    '.oxd-input-group:has(label:text("Employment Status")) .oxd-select-text',

  // Include
  includeLabel: 'label:has-text("Include")',
  includeDropdown:
    '.oxd-input-group:has(label:text("Include")) .oxd-select-text',

  // Supervisor Name
  supervisorNameLabel: 'label:has-text("Supervisor Name")',
  supervisorNameInput: '.oxd-input-group:has(label:text("Supervisor Name")) input',

  // Job Title
  jobTitleLabel: 'label:has-text("Job Title")',
  jobTitleDropdown:
    '.oxd-input-group:has(label:text("Job Title")) .oxd-select-text',

  // Sub Unit
  subUnitLabel: 'label:has-text("Sub Unit")',
  subUnitDropdown:
    '.oxd-input-group:has(label:text("Sub Unit")) .oxd-select-text',

  // Buttons
  resetButton: 'button:has-text("Reset")',
  searchButton: 'button:has-text("Search")',

  // ========================================
  // RECORDS SECTION
  // ========================================
  recordsContainer: ".orangehrm-paper-container",

  addButton: 'button:has-text("Add")',

  recordsFoundText: ".orangehrm-horizontal-padding .oxd-text--span",

  // ========================================
  // TABLE
  // ========================================
  table: ".orangehrm-container .oxd-table",
  tableHeader: ".orangehrm-container .oxd-table-header",
  tableBody: ".orangehrm-container .oxd-table-body",

  selectAllCheckbox: ".oxd-table-header .oxd-checkbox-input",

  // Headers
  idHeader: '.oxd-table-header [role="columnheader"]:nth-child(2):has-text("Id")',
  firstNameHeader: '.oxd-table-header [role="columnheader"]:nth-child(3):has-text("First (& Middle) Name")',
  lastNameHeader: '.oxd-table-header [role="columnheader"]:nth-child(4):has-text("Last Name")',
  jobTitleHeader: '.oxd-table-header [role="columnheader"]:nth-child(5):has-text("Job Title")',
  employmentStatusHeader: '.oxd-table-header [role="columnheader"]:nth-child(6):has-text("Employment Status")',
  subUnitHeader: '.oxd-table-header [role="columnheader"]:nth-child(7):has-text("Sub Unit")',
  supervisorHeader: '.oxd-table-header [role="columnheader"]:nth-child(8):has-text("Supervisor")',
  actionsHeader: '.oxd-table-header [role="columnheader"]:nth-child(9):has-text("Actions")',

  // Sorting
  idSortIcon:
    '.oxd-table-header [role="columnheader"]:nth-child(2):has-text("Id") .oxd-table-header-sort-icon',
  firstNameSortIcon:
    '.oxd-table-header [role="columnheader"]:nth-child(3):has-text("First (& Middle) Name") .oxd-table-header-sort-icon',
  lastNameSortIcon:
    '.oxd-table-header [role="columnheader"]:nth-child(4):has-text("Last Name") .oxd-table-header-sort-icon',
  jobTitleSortIcon:
    '.oxd-table-header [role="columnheader"]:nth-child(5):has-text("Job Title") .oxd-table-header-sort-icon',
  employmentStatusSortIcon:
    '.oxd-table-header [role="columnheader"]:nth-child(6):has-text("Employment Status") .oxd-table-header-sort-icon',
  subUnitSortIcon:
    '.oxd-table-header [role="columnheader"]:nth-child(7):has-text("Sub Unit") .oxd-table-header-sort-icon',
  supervisorSortIcon:
    '.oxd-table-header [role="columnheader"]:nth-child(8):has-text("Supervisor") .oxd-table-header-sort-icon',

  // ========================================
  // ROWS
  // ========================================
  tableRows: ".orangehrm-container .oxd-table-card",
  rowCheckboxes: '.oxd-table-body input[type="checkbox"]',

  deleteButtons: ".oxd-table-cell-actions .bi-trash",

  editButtons: ".oxd-table-cell-actions .bi-pencil-fill",

  // ========================================
  // PAGINATION
  // ========================================
  paginationContainer: ".orangehrm-bottom-container",
  paginationList: ".orangehrm-bottom-container",
  paginationPageItem: ".oxd-pagination-page-item",
  paginationPreviousNext: ".oxd-pagination-page-item--previous-next",
  paginationNextButton: ".oxd-pagination-page-item--previous-next .bi-chevron-right",

  // ========================================
  // ADD EMPLOYEE FORM
  // ========================================
  addEmployeeForm: ".orangehrm-card-container",
  addEmployeeTitle: 'h6:has-text("Add Employee")',

  // Profile image
  profileImageInput: 'input[type="file"].oxd-file-input',
  profileImage: ".employee-image",
  addImageButton: 'button.employee-image-action',

  // Employee Full Name
  employeeFullNameLabel: 'label:has-text("Employee Full Name")',
  firstNameInput: 'input[name="firstName"].orangehrm-firstname',
  middleNameInput: 'input[name="middleName"].orangehrm-middlename',
  lastNameInput: 'input[name="lastName"].orangehrm-lastname',

  // Employee Id
  formEmployeeIdInput: '.oxd-input-group:has(label:text("Employee Id")) input',

  // Create Login Details
  createLoginDetailsHeader: 'p:has-text("Create Login Details")',
  createLoginSwitch: ".oxd-switch-wrapper input[type='checkbox']",
  createLoginSwitchLabel: ".oxd-switch-input",

  // Login Details fields
  usernameInput: '.oxd-input-group:has(label:text("Username")) input',
  passwordInput: 'input[type="password"]',
  confirmPasswordInput: 'input[type="password"]',

  // Form buttons
  // NOTE: The Edit Employee > Personal Details page renders TWO "Save" buttons:
  // one for the Personal Details form and one for the Custom Fields form.
  // Scope the locator to the form that contains the "Employee Full Name" label
  // (the Personal Details form on the edit page, and the Add Employee form on the
  // add page). The Custom Fields form has no "Employee Full Name" label, so its
  // Save button is excluded and the locator resolves to exactly ONE element.
  cancelButton: 'button:has-text("Cancel")',
  saveButton: 'form:has(label:has-text("Employee Full Name")) button:has-text("Save")',

  // Save success toast (OrangeHRM shows "Successfully Saved" after a successful save)
  saveSuccessToast: '.oxd-toast--success',
  saveSuccessToastText: 'Successfully Saved',

  // ========================================
  // EDIT EMPLOYEE FORM
  // ========================================
  editEmployeeContainer: ".orangehrm-edit-employee",
  editEmployeeName: 'h6.oxd-text--h6.--strong',
  editEmployeeImage: ".orangehrm-edit-employee-image img",

  // Tabs
  tabsContainer: ".orangehrm-tabs",
  personalDetailsTab: 'a:has-text("Personal Details")',
  contactDetailsTab: 'a:has-text("Contact Details")',
  emergencyContactsTab: 'a:has-text("Emergency Contacts")',
  dependentsTab: 'a:has-text("Dependents")',
  immigrationTab: 'a:has-text("Immigration")',
  jobTab: 'a:has-text("Job")',
  salaryTab: 'a:has-text("Salary")',
  reportToTab: 'a:has-text("Report-to")',
  qualificationsTab: 'a:has-text("Qualifications")',
  membershipsTab: 'a:has-text("Memberships")',

  // Personal Details form fields
  personalDetailsTitle: 'h6:has-text("Personal Details")',
  otherIdInput: '.oxd-input-group:has(label:text("Other Id")) input',
  driversLicenseInput: '.oxd-input-group:has(label:text("Driver\'s License Number")) input',
  licenseExpiryDateInput: '.oxd-input-group:has(label:text("License Expiry Date")) input',
  nationalityDropdown: '.oxd-input-group:has(label:text("Nationality")) .oxd-select-text',
  maritalStatusDropdown: '.oxd-input-group:has(label:text("Marital Status")) .oxd-select-text',
  dateOfBirthInput: '.oxd-input-group:has(label:text("Date of Birth")) input',
  genderMaleRadio: '.oxd-radio-wrapper input[type="radio"][value="1"]',
  genderFemaleRadio: '.oxd-radio-wrapper input[type="radio"][value="2"]',

  // Custom Fields
  customFieldsTitle: 'h6:has-text("Custom Fields")',
  bloodTypeDropdown: '.oxd-input-group:has(label:text("Blood Type")) .oxd-select-text',
  testFieldInput: '.oxd-input-group:has(label:text("Test_Field")) input',

  // Attachments
  attachmentsTitle: 'h6:has-text("Attachments")',
  addAttachmentButton: 'button:has-text("Add")',
  attachmentsTable: ".oxd-table",
  noRecordsFound: 'span:has-text("No Records Found")',
};

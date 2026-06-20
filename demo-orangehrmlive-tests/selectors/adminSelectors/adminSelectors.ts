export const AdminSelectors = {
  // ========================================
  // PAGE
  // ========================================
  pageTitle: 'h5:has-text("System Users")',

  // ========================================
  // FILTER SECTION
  // ========================================
  systemUsersSection: ".oxd-table-filter",
  systemUsersTitle: 'h5:has-text("System Users")',

  collapseFilterButton: ".oxd-table-filter-header-options button",

  // Username
  usernameLabel: 'label:has-text("Username")',
  usernameInput: '.oxd-input-group:has(label:text("Username")) input',

  // User Role
  userRoleLabel: 'label:has-text("User Role")',
  userRoleDropdown:
    '.oxd-input-group:has(label:text("User Role")) .oxd-select-text',

  // Employee Name
  employeeNameLabel: 'label:has-text("Employee Name")',
  employeeNameInput: '.oxd-input-group:has(label:text("Employee Name")) input',

  // Status
  statusLabel: 'label:has-text("Status")',
  statusDropdown: '.oxd-input-group:has(label:text("Status")) .oxd-select-text',

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
  usernameHeader: 'div[role="columnheader"]:has-text("Username")',
  userRoleHeader: 'div[role="columnheader"]:has-text("User Role")',
  employeeNameHeader: 'div[role="columnheader"]:has-text("Employee Name")',
  statusHeader: 'div[role="columnheader"]:has-text("Status")',
  actionsHeader: 'div[role="columnheader"]:has-text("Actions")',

  // Sorting
  usernameSortIcon:
    'div[role="columnheader"]:has-text("Username") .oxd-table-header-sort-icon',

  userRoleSortIcon:
    'div[role="columnheader"]:has-text("User Role") .oxd-table-header-sort-icon',

  employeeNameSortIcon:
    'div[role="columnheader"]:has-text("Employee Name") .oxd-table-header-sort-icon',

  statusSortIcon:
    'div[role="columnheader"]:has-text("Status") .oxd-table-header-sort-icon',

  // ========================================
  // ROWS
  // ========================================
  tableRows: ".orangehrm-container .oxd-table-card",
  rowCheckboxes: '.oxd-table-body input[type="checkbox"]',

  deleteButtons: ".oxd-table-cell-actions .bi-trash",

  editButtons: ".oxd-table-cell-actions .bi-pencil-fill",
};

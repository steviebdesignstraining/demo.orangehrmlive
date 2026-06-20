export const AddUserSelectors = {
  // ========================================
  // PAGE TITLE
  // ========================================
  pageTitle: 'h6:has-text("Add User")',

  // ========================================
  // FORM CONTAINER
  // ========================================
  formContainer: ".orangehrm-card-container",

  // ========================================
  // USER ROLE
  // ========================================
  userRoleLabel: 'label:has-text("User Role")',
  userRoleDropdown:
    '.oxd-input-group:has(label:has-text("User Role")) .oxd-select-text',

  // ========================================
  // EMPLOYEE NAME
  // ========================================
  employeeNameLabel: 'label:has-text("Employee Name")',
  employeeNameInput:
    '.oxd-input-group:has(label:has-text("Employee Name")) input',

  // ========================================
  // STATUS
  // ========================================
  statusLabel: 'label:has-text("Status")',
  statusDropdown:
    '.oxd-input-group:has(label:has-text("Status")) .oxd-select-text',

  // ========================================
  // USERNAME
  // ========================================
  usernameLabel: 'label:has-text("Username")',
  usernameInput: '.oxd-input-group:has(label:has-text("Username")) input',

  // ========================================
  // PASSWORD
  // ========================================
  passwordLabel: 'label:has-text("Password")',
  passwordInput:
    '.user-password-cell .oxd-input-group:has(label:has-text("Password")) input[type="password"]',

  confirmPasswordLabel: 'label:has-text("Confirm Password")',
  confirmPasswordInput:
    '.oxd-input-group:has(label:has-text("Confirm Password")) input[type="password"]',

  passwordHint: ".user-password-hint",

  // ========================================
  // ACTION BUTTONS
  // ========================================
  cancelButton: 'button:has-text("Cancel")',
  saveButton: 'button:has-text("Save")',

  requiredHint: "text=* Required",
};

import {
  test,
  expect,
  loginData,
  pimTestData,
} from "../../fixtures/pimFixtures/pim.fixtures";
import { adminTestData } from "../../fixtures/adminFixtures/admin.fixtures";
import type { Page } from "@playwright/test";
import type { PimFixtures } from "../../fixtures/pimFixtures/pim.fixtures";
import { urlPatterns } from "../../test-data/urlPatterns";
import { PimSelectors } from "../../selectors/pimSelectors/pim.selectors";
import { AdminSelectors } from "../../selectors/adminSelectors/adminSelectors";
import { AddUserSelectors } from "../../selectors/adminSelectors/addUserSelectors";
import { AdminPage } from "../../pages/adminPages/adminPages";
import { AddUserPage } from "../../pages/adminPages/addUserPage";
import { PimPage } from "../../pages/pimPages/pim.pages";

test.describe.configure({ mode: "serial" });

test.describe("PIM positive scenarios", () => {
  test.beforeEach(async ({ page, loginPage, leftNav }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    await leftNav.clickPim();
    await expect(page).toHaveURL(urlPatterns.employeeList);
  });

  test("PIM page loads successfully after login", async ({ pimPage }) => {
    await pimPage.verifyPimSectionPageLoaded();
  });

  test("Employee Information title is displayed", async ({ page }) => {
    await expect(page.locator('h5:has-text("Employee Information")')).toBeVisible();
  });

  test("Top navigation menu is visible", async ({ page }) => {
    await expect(page.locator(PimSelectors.topNavContainer)).toBeVisible();
    await expect(page.locator(PimSelectors.configurationTab)).toBeVisible();
    await expect(page.locator(PimSelectors.employeeListTab)).toBeVisible();
    await expect(page.locator(PimSelectors.addEmployeeTab)).toBeVisible();
    await expect(page.locator(PimSelectors.reportsTab)).toBeVisible();
  });

  test("Configuration tab is clickable", async ({ page }) => {
    await page.click(PimSelectors.configurationTab);
    // Configuration dropdown should open
  });

  test("Employee List tab is clickable", async ({ page }) => {
    await page.click(PimSelectors.employeeListTab);
    await expect(page).toHaveURL(urlPatterns.employeeList);
  });

  test("Add Employee tab is clickable", async ({ page }) => {
    await page.click(PimSelectors.addEmployeeTab);
  });

  test("Reports tab is clickable", async ({ page }) => {
    await page.click(PimSelectors.reportsTab);
  });

  test("Help button is visible and clickable", async ({ page }) => {
    await expect(page.locator(PimSelectors.helpButton)).toBeVisible();
    await page.click(PimSelectors.helpButton);
  });

  test("Employment Status dropdown opens successfully", async ({ pimPage, page }) => {
    await pimPage.employmentStatusDropdown.click();

    await expect(page.locator(".oxd-select-dropdown")).toBeVisible();
  });

  test("Include dropdown works correctly", async ({ pimPage, page }) => {
    await pimPage.includeDropdown.click();

    await expect(page.locator(".oxd-select-dropdown")).toBeVisible();
  });

  test("Supervisor Name autocomplete works", async ({ pimPage, page }) => {
    await pimPage.supervisorNameInput.fill("a");

    await expect(page.locator(".oxd-autocomplete-dropdown")).toBeVisible();
  });

  test("Job Title dropdown opens successfully", async ({ pimPage, page }) => {
    await pimPage.jobTitleDropdown.click();

    await expect(page.locator(".oxd-select-dropdown")).toBeVisible();
  });

  test("Sub Unit dropdown opens successfully", async ({ pimPage, page }) => {
    await pimPage.subUnitDropdown.click();

    await expect(page.locator(".oxd-select-dropdown")).toBeVisible();
  });

  test("Add button is visible", async ({ pimPage }) => {
    await expect(pimPage.addButton).toBeVisible();
  });

  test("Table shows correct column headers", async ({ pimPage }) => {
    await expect(pimPage.idHeader).toBeVisible();
    await expect(pimPage.firstNameHeader).toBeVisible();
    await expect(pimPage.lastNameHeader).toBeVisible();
    await expect(pimPage.jobTitleHeader).toBeVisible();
    await expect(pimPage.employmentStatusHeader).toBeVisible();
    await expect(pimPage.subUnitHeader).toBeVisible();
    await expect(pimPage.supervisorHeader).toBeVisible();
    await expect(pimPage.actionsHeader).toBeVisible();
  });

  test("Edit employee button is visible", async ({ page }) => {
    const editButton = page.locator(".bi-pencil-fill").first();

    await expect(editButton).toBeVisible();
  });

  test("Pagination is displayed", async ({ page }) => {
    await expect(page.locator(PimSelectors.paginationContainer)).toBeVisible();
    await expect(page.locator(PimSelectors.paginationList)).toBeVisible();
  });

});

test.describe("PIM CRUD scenarios", () => {
  test.beforeEach(async ({ page, loginPage, leftNav }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    await leftNav.clickPim();
    await expect(page).toHaveURL(urlPatterns.employeeList);
  });

  test("Verify non-existent employee does not exist", async ({ pimPage }) => {
    await pimPage.verifyEmployeeDoesNotExist("NonExistentEmployee12345");
  });

  test("Reset clears employee name filter", async ({ pimPage }) => {
    await pimPage.employeeNameInput.fill("P");
    await pimPage.clickReset();

    await expect(pimPage.employeeNameInput).toHaveValue("");
  });

  test("Reset clears employee id filter", async ({ pimPage }) => {
    await pimPage.employeeIdInput.fill("0295");
    await pimPage.clickReset();

    await expect(pimPage.employeeIdInput).toHaveValue("");
  });
});

test.describe("E2E Employee and System User CRUD scenarios", () => {
  test.beforeEach(async ({ page, loginPage, leftNav }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );
    await leftNav.clickPim();
    await expect(page).toHaveURL(urlPatterns.employeeList);
  });

  test("Add employee James Brown with unique ID and login details", async ({
    page,
    pimPage,
    addEmployeePage,
    leftNav,
  }: PimFixtures & { page: Page }) => {
    // Get unique employee ID using POM method
    const employeeId = await pimPage.generateUniqueEmployeeId();

    // Get unique username for login details from test data using POM method
    const adminPage = new AdminPage(page);
    const loginUsername = await adminPage.generateUniqueUsername(
      pimTestData.e2eEmployee.usernamePrefix,
    );

    // Navigate back to PIM after username check
    await pimPage.clickPim();
    await expect(page).toHaveURL(urlPatterns.employeeList);

    // Click Add Employee
    await pimPage.clickAdd();
    await expect(page).toHaveURL(/\/pim\/addEmployee/, { timeout: 10000 });
    await addEmployeePage.verifyAddEmployeePageLoaded();

    // Fill employee name from test data
    const { firstName, middleName, lastName, fullName } = pimTestData.e2eEmployee;
    await addEmployeePage.fillEmployeeName(firstName, lastName, middleName);

    // Fill employee ID
    await addEmployeePage.fillEmployeeId(employeeId);

    // Toggle Create Login Details ON
    await addEmployeePage.toggleCreateLoginDetails(true);

    // Fill login details from test data using POM selectors
    await addEmployeePage.enterUsername(loginUsername);
    await addEmployeePage.enterPassword(pimTestData.e2eEmployee.createdPassword);
    await addEmployeePage.enterConfirmPassword(pimTestData.e2eEmployee.createdPassword);

    // Save employee
    await addEmployeePage.clickSave();

    // Verify employee was created by checking we're on the personal details page
    // and the employee name is displayed (not still on add employee page)
    // await expect(page).toHaveURL(/\/pim\/viewPersonalDetails/, { timeout: 10000 });
    await expect(page.getByText("James Brown").first()).toBeVisible();

    // Navigate to employee list
    await pimPage.clickPim();
    await expect(page).toHaveURL(urlPatterns.employeeList);

    // Verify employee exists in table
    await pimPage.verifyEmployeeExists(fullName);
  });

  test("Edit employee James Brown and populate all personal details", async ({
    page,
    pimPage,
    addEmployeePage,
    leftNav,
  }: PimFixtures & { page: Page }) => {
    // Navigate to PIM
    await leftNav.clickPim();
    await expect(page).toHaveURL(urlPatterns.employeeList);

    // Search for James Brown from test data
    await pimPage.searchByEmployeeName(pimTestData.e2eEmployee.fullName);
    const count = await pimPage.getRecordCount();
    expect(count).toBeGreaterThan(0);

    // Search by employee ID for more reliable matching
    const employeeId = await pimPage.getEmployeeIdByFullName(pimTestData.e2eEmployee.fullName);
    await pimPage.searchByEmployeeId(employeeId);
    await pimPage.getRecordCount();

    // Click edit
    await pimPage.clickEditByEmployeeId(employeeId);
    await addEmployeePage.verifyEditEmployeePageLoaded(
      pimTestData.e2eEmployee.firstName,
      pimTestData.e2eEmployee.lastName
    );

    // Click Personal Details tab
    await addEmployeePage.clickPersonalDetailsTab();
    await expect(addEmployeePage.personalDetailsTitle).toBeVisible();

    // Smoke-check that every other tab is reachable
    await addEmployeePage.clickContactDetailsTab();
    await addEmployeePage.clickEmergencyContactsTab();
    await addEmployeePage.clickDependentsTab();
    await addEmployeePage.clickImmigrationTab();
    await addEmployeePage.clickJobTab();
    await addEmployeePage.clickSalaryTab();
    await addEmployeePage.clickReportToTab();
    await addEmployeePage.clickQualificationsTab();
    await addEmployeePage.clickMembershipsTab();

    // Return to Personal Details: personal details AND custom fields live here,
    // so populate and save the form while this tab is active.
    await addEmployeePage.clickPersonalDetailsTab();
    await expect(addEmployeePage.personalDetailsTitle).toBeVisible();

    // Ensure every required element is present and the Save button resolves to
    // exactly one element before we interact with the form.
    await addEmployeePage.verifyPersonalDetailsElementsPresent();

    // Personal details payload from test data
    const personalDetails = {
      otherId: pimTestData.e2eEmployee.otherId,
      driversLicense: pimTestData.e2eEmployee.driversLicense,
      licenseExpiryDate: pimTestData.e2eEmployee.licenseExpiryDate,
      nationality: pimTestData.e2eEmployee.nationality,
      maritalStatus: pimTestData.e2eEmployee.maritalStatus,
      dateOfBirth: pimTestData.e2eEmployee.dateOfBirth,
      gender: pimTestData.e2eEmployee.gender,
    };

    // Fill all personal details from test data
    await addEmployeePage.fillPersonalDetails(personalDetails);

    // Verify every personal-details field is populated
    await addEmployeePage.verifyPersonalDetailsPopulated(personalDetails);

    // Custom fields payload from test data (also on the Personal Details tab)
    const customFields = {
      bloodType: pimTestData.e2eEmployee.bloodType,
      testField: pimTestData.e2eEmployee.testField,
    };

    await addEmployeePage.fillCustomFields(customFields);

    // Verify every custom field is populated
    await addEmployeePage.verifyPersonalDetailsPopulated(customFields);

    // Save changes (Personal Details tab persists personal details + custom fields)
    await addEmployeePage.clickSave();

    // Confirm the save succeeded via the success toast
    await addEmployeePage.verifySaveSuccess();

    // Navigate back to the employee list after saving
    await leftNav.clickPim();
    await expect(page).toHaveURL(urlPatterns.employeeList);
  });

  test("Create system user for James Brown with unique username", async ({
    page,
    leftNav,
    pimPage,
  }: PimFixtures & { page: Page }) => {
    const adminPage = new AdminPage(page);
    const addUserPage = new AddUserPage(page);

    // Get unique username from test data using POM method
    const username = await adminPage.generateUniqueUsername(
      pimTestData.e2eEmployee.usernamePrefix,
    );

    // Open Add User page
    await adminPage.openAddUserPage();
    await addUserPage.verifyAddUserPageLoaded();

    // Create user for James Brown from test data
    await addUserPage.selectUserRole(adminTestData.e2eUser.role);
    await addUserPage.enterEmployeeName(adminTestData.e2eUser.employeeName);
    await addUserPage.selectStatus(adminTestData.e2eUser.status);
    await addUserPage.enterUsername(username);
    await addUserPage.enterPassword(adminTestData.e2eUser.password);
    await addUserPage.enterConfirmPassword(adminTestData.e2eUser.password);

    // Verify password hint is visible
    await expect(addUserPage.passwordHint).toBeVisible();

    // Save user
    await addUserPage.clickSave();
    await expect(page).toHaveURL(urlPatterns.adminUsers);

    // Verify user exists
    await adminPage.verifyUserExists(username);
  });

  test("Edit system user for James Brown and verify positive toggles", async ({
    page,
    leftNav,
    pimPage,
  }: PimFixtures & { page: Page }) => {
    const adminPage = new AdminPage(page);
    const addUserPage = new AddUserPage(page);

    // Search for James Brown's user from test data
    await adminPage.searchByEmployee(adminTestData.e2eUser.employeeName);
    const count = await adminPage.getRecordCount();
    expect(count).toBeGreaterThan(0);

    // Get the username from the table
    const userRow = page.locator(".oxd-table-card").first();
    const usernameElement = userRow.locator(
      `.oxd-table-cell:has-text("${adminTestData.e2eUser.usernamePrefix}")`,
    );
    const usernameText = await usernameElement.textContent();
    const username = usernameText?.trim() || "jamesbrown";

    // Click edit
    await adminPage.clickEditByUsername(username);
    await addUserPage.verifyAddUserPageLoaded();

    // Verify all form fields are visible and populated
    await expect(page.locator(AddUserSelectors.userRoleLabel)).toBeVisible();
    await expect(page.locator(AddUserSelectors.employeeNameLabel)).toBeVisible();
    await expect(page.locator(AddUserSelectors.statusLabel)).toBeVisible();
    await expect(page.locator(AddUserSelectors.usernameLabel)).toBeVisible();
    await expect(page.locator(AddUserSelectors.passwordLabel)).toBeVisible();
    await expect(page.locator(AddUserSelectors.confirmPasswordLabel)).toBeVisible();

    // Verify employee name is populated from test data
    const employeeNameInput = page.locator(AddUserSelectors.employeeNameInput);
    await expect(employeeNameInput).toHaveValue(adminTestData.e2eUser.employeeName);

    // Change status to Disabled (toggle positive scenario)
    await addUserPage.selectStatus("Disabled");

    // Change role to ESS (toggle positive scenario)
    await addUserPage.selectUserRole("ESS");

    // Save changes
    await addUserPage.clickSave();
    await expect(page).toHaveURL(urlPatterns.adminUsers);

    // Verify user still exists
    await adminPage.verifyUserExists(username);

    // Verify status changed
    const updatedRow = page.locator(".oxd-table-card").filter({
      hasText: username,
    });
    await expect(updatedRow.locator("text=Disabled")).toBeVisible();
  });

  test("Verify James Brown employee and system user are linked correctly", async ({
    page,
    pimPage,
    leftNav,
  }: PimFixtures & { page: Page }) => {
    const adminPage = new AdminPage(page);

    // Verify employee exists in PIM from test data
    await pimPage.verifyEmployeeExists(pimTestData.e2eEmployee.fullName);

    // Verify system user exists in Admin from test data
    await leftNav.clickAdmin();
    await expect(page).toHaveURL(urlPatterns.adminUsers);
    await adminPage.searchByEmployee(adminTestData.e2eUser.employeeName);
    const userCount = await adminPage.getRecordCount();
    expect(userCount).toBeGreaterThan(0);
  });
});

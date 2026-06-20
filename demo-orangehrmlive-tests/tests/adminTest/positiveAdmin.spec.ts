import {
  test,
  expect,
  loginData,
  adminTestData,
} from "../../fixtures/adminFixtures/admin.fixtures";
import type { Page } from "@playwright/test";
import type { AddUserPage } from "../../pages/adminPages/addUserPage";
import type { AdminPage } from "../../pages/adminPages/adminPages";
import type { AdminFixtures } from "../../fixtures/adminFixtures/admin.fixtures";
import { urlPatterns } from "../../test-data/urlPatterns";

test.describe.configure({ mode: "serial" });

test.describe("Admin positive scenarios", () => {
  test.beforeEach(async ({ page, loginPage, leftNav }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    await leftNav.clickAdmin();
    await expect(page).toHaveURL(urlPatterns.adminUsers);
  });

  test("Admin page loads successfully after login", async ({ adminPage }) => {
    await adminPage.verifyAdminSectionPageLoaded();
  });

  test("System Users title is displayed", async ({ page }) => {
    await expect(page.locator('h5:has-text("System Users")')).toBeVisible();
  });

  test("Top navigation menu is visible", async ({ adminTopNav }) => {
    await adminTopNav.verifyTopNavVisible();

    await expect(adminTopNav.userManagementTab).toBeVisible();
    await expect(adminTopNav.jobTab).toBeVisible();
    await expect(adminTopNav.organizationTab).toBeVisible();
  });

  test("User can open User Management dropdown", async ({ adminTopNav }) => {
    await adminTopNav.clickUserManagement();
  });

  test("User can access Job menu", async ({ adminTopNav }) => {
    await adminTopNav.clickJob();
  });

  test("User can open Organization menu", async ({ adminTopNav }) => {
    await adminTopNav.clickOrganization();
  });

  test("Username filter accepts valid input", async ({ adminPage }) => {
    await adminPage.searchByUsername("Admin");

    expect(await adminPage.getRecordCount()).toBeGreaterThan(0);
  });

  test("User Role dropdown opens successfully", async ({ adminPage, page }) => {
    await adminPage.userRoleDropdown.click();

    await expect(page.locator(".oxd-select-dropdown")).toBeVisible();
  });

  test("Employee Name autocomplete works", async ({ adminPage, page }) => {
    await adminPage.employeeNameInput.fill("a");

    await expect(page.locator(".oxd-autocomplete-dropdown")).toBeVisible();
  });

  test("Status dropdown works correctly", async ({ adminPage, page }) => {
    await adminPage.statusDropdown.click();

    await expect(page.locator(".oxd-select-dropdown")).toBeVisible();
  });

  test("Search with empty filters returns all results", async ({
    adminPage,
  }) => {
    await adminPage.clickSearch();

    expect(await adminPage.getRecordCount()).toBeGreaterThan(0);
  });

  test("Reset button clears filters", async ({ adminPage }) => {
    await adminPage.usernameInput.fill("Admin");

    await adminPage.clickReset();

    await expect(adminPage.usernameInput).toHaveValue("");
  });

  test("Add User button navigates to Add User page", async ({
    adminPage,
    page,
  }) => {
    await adminPage.clickAdd();

    await expect(page).toHaveURL(urlPatterns.saveAdminUser);
  });

  test("Table loads with user records", async ({ adminPage }) => {
    expect(await adminPage.getRecordCount()).toBeGreaterThan(0);
  });

  test("Table shows correct column headers", async ({ adminPage }) => {
    await expect(adminPage.usernameHeader).toBeVisible();
    await expect(adminPage.userRoleHeader).toBeVisible();
    await expect(adminPage.employeeNameHeader).toBeVisible();
    await expect(adminPage.statusHeader).toBeVisible();
    await expect(adminPage.actionsHeader).toBeVisible();
  });

  test("Select All checkbox selects all rows", async ({ adminPage }) => {
    await adminPage.selectAllCheckbox.check();

    await expect(adminPage.selectAllCheckbox).toBeChecked();
  });

  test("Individual row checkbox works", async ({ page }) => {
    const checkbox = page
      .locator('.oxd-table-body .oxd-checkbox-input')
      .first();

    await checkbox.check();

    await expect(checkbox).toBeChecked();
  });

  test("Edit user button opens edit form", async ({ page }) => {
    const editButton = page.locator(".bi-pencil-fill").first();

    await editButton.click();

    await expect(page).toHaveURL(urlPatterns.saveAdminUser);
  });

  test.skip("Delete user button triggers confirmation", async ({ page }) => {
    const deleteButton = page.locator(".bi-trash").first();

    await deleteButton.click();

    await expect(page.locator(".orangehrm-dialog-popup")).toBeVisible();
  });

  test("Navigation between Admin and Dashboard works", async ({
    page,
    leftNav,
  }) => {
    await leftNav.clickDashboard();

    await expect(page).toHaveURL(urlPatterns.dashboard);

    await leftNav.clickAdmin();

    await expect(page).toHaveURL(urlPatterns.adminUsers);
  });

  test("Admin page remains stable after refresh", async ({
    page,
    adminPage,
  }) => {
    await page.reload();

    await adminPage.verifyAdminSectionPageLoaded();
  });
});

test.describe("Admin CRUD scenarios", () => {
  test.beforeEach(async ({ page, loginPage, leftNav }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    await leftNav.clickAdmin();
    await expect(page).toHaveURL(urlPatterns.adminUsers);
  });


  test("Create a new admin user", async ({
    page,
    adminPage,
    addUserPage,
  }: AdminFixtures & { page: Page }) => {
    const user = adminTestData.userToCreate;

    await adminPage.openAddUserPage();
    
    await addUserPage.verifyAddUserPageLoaded();

    await addUserPage.createUser(user);

    // await expect(page).toHaveURL(urlPatterns.adminUsers);
    await adminPage.verifyUserExists(user.username);
  });

  test("Edit an admin user", async ({
    page,
    adminPage,
    addUserPage,
  }: AdminFixtures & { page: Page }) => {
    const user = adminTestData.userToEdit;

    await adminPage.openAddUserPage();
    await addUserPage.verifyAddUserPageLoaded();

    await addUserPage.createUser(user);

    await expect(page).toHaveURL(urlPatterns.adminUsers);
    await adminPage.verifyUserExists(user.username);

    await adminPage.clickEditByUsername(user.username);
    await addUserPage.verifyAddUserPageLoaded();

    await addUserPage.replaceUsername(user.editedUsername);
    await addUserPage.clickSave();

    // await expect(page).toHaveURL(urlPatterns.adminUsers);
    await adminPage.verifyUserExists(user.editedUsername);
    await adminPage.verifyUserDoesNotExist(user.username);
  });

  test("Delete an admin user", async ({
    page,
    adminPage,
    addUserPage,
  }: AdminFixtures & { page: Page }) => {
    const user = adminTestData.userToDelete;

    await adminPage.openAddUserPage();
    await addUserPage.verifyAddUserPageLoaded();

    await addUserPage.createUser(user);

    // await expect(page).toHaveURL(urlPatterns.adminUsers);
    await adminPage.verifyUserExists(user.username);

    await adminPage.clickDeleteByUsername(user.username);

    await expect(page.locator(".orangehrm-dialog-popup")).toBeVisible();
    await page.locator(".orangehrm-dialog-popup button:has-text('Yes, Delete')").click();

    await adminPage.verifyUserDoesNotExist(user.username);
  });
});

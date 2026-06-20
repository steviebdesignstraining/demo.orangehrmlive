# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo-orangehrmlive-tests/tests/pimTest/positivePim.spec.ts >> E2E Employee and System User CRUD scenarios >> Add employee James Brown with unique ID and login details
- Location: demo-orangehrmlive-tests/tests/pimTest/positivePim.spec.ts:176:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/pim\/viewPersonalDetails/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    7 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Updated Admin First Name Updated Admin Last Name
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": James
- textbox "Middle Name": T
- textbox "Last Name": Brown
- text: Employee Id
- textbox: JB1655
- separator
- paragraph: Create Login Details
- checkbox [checked]
- text: Username*
- textbox: jamesbrown6310
- text: Status
- radio "Enabled" [checked]
- text: Enabled
- radio "Disabled"
- text: Disabled Strong Password*
- textbox: TempPass123!
- paragraph: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
- text: Confirm Password*
- textbox: TempPass123!
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  120 | 
  121 |     await expect(editButton).toBeVisible();
  122 |   });
  123 | 
  124 |   test("Pagination is displayed", async ({ page }) => {
  125 |     await expect(page.locator(PimSelectors.paginationContainer)).toBeVisible();
  126 |     await expect(page.locator(PimSelectors.paginationList)).toBeVisible();
  127 |   });
  128 | 
  129 | });
  130 | 
  131 | test.describe("PIM CRUD scenarios", () => {
  132 |   test.beforeEach(async ({ page, loginPage, leftNav }) => {
  133 |     await loginPage.navigate();
  134 |     await loginPage.verifyLoginPageDisplayed();
  135 | 
  136 |     await loginPage.login(
  137 |       loginData.validUser.username,
  138 |       loginData.validUser.password,
  139 |     );
  140 | 
  141 |     await leftNav.clickPim();
  142 |     await expect(page).toHaveURL(urlPatterns.employeeList);
  143 |   });
  144 | 
  145 |   test("Verify non-existent employee does not exist", async ({ pimPage }) => {
  146 |     await pimPage.verifyEmployeeDoesNotExist("NonExistentEmployee12345");
  147 |   });
  148 | 
  149 |   test("Reset clears employee name filter", async ({ pimPage }) => {
  150 |     await pimPage.employeeNameInput.fill("P");
  151 |     await pimPage.clickReset();
  152 | 
  153 |     await expect(pimPage.employeeNameInput).toHaveValue("");
  154 |   });
  155 | 
  156 |   test("Reset clears employee id filter", async ({ pimPage }) => {
  157 |     await pimPage.employeeIdInput.fill("0295");
  158 |     await pimPage.clickReset();
  159 | 
  160 |     await expect(pimPage.employeeIdInput).toHaveValue("");
  161 |   });
  162 | });
  163 | 
  164 | test.describe("E2E Employee and System User CRUD scenarios", () => {
  165 |   test.beforeEach(async ({ page, loginPage, leftNav }) => {
  166 |     await loginPage.navigate();
  167 |     await loginPage.verifyLoginPageDisplayed();
  168 |     await loginPage.login(
  169 |       loginData.validUser.username,
  170 |       loginData.validUser.password,
  171 |     );
  172 |     await leftNav.clickPim();
  173 |     await expect(page).toHaveURL(urlPatterns.employeeList);
  174 |   });
  175 | 
  176 |   test("Add employee James Brown with unique ID and login details", async ({
  177 |     page,
  178 |     pimPage,
  179 |     addEmployeePage,
  180 |     leftNav,
  181 |   }: PimFixtures & { page: Page }) => {
  182 |     // Get unique employee ID using POM method
  183 |     const employeeId = await pimPage.generateUniqueEmployeeId();
  184 | 
  185 |     // Get unique username for login details from test data using POM method
  186 |     const adminPage = new AdminPage(page);
  187 |     const loginUsername = await adminPage.generateUniqueUsername(
  188 |       pimTestData.e2eEmployee.usernamePrefix,
  189 |     );
  190 | 
  191 |     // Navigate back to PIM after username check
  192 |     await pimPage.clickPim();
  193 |     await expect(page).toHaveURL(urlPatterns.employeeList);
  194 | 
  195 |     // Click Add Employee
  196 |     await pimPage.clickAdd();
  197 |     await expect(page).toHaveURL(/\/pim\/addEmployee/, { timeout: 10000 });
  198 |     await addEmployeePage.verifyAddEmployeePageLoaded();
  199 | 
  200 |     // Fill employee name from test data
  201 |     const { firstName, middleName, lastName, fullName } = pimTestData.e2eEmployee;
  202 |     await addEmployeePage.fillEmployeeName(firstName, lastName, middleName);
  203 | 
  204 |     // Fill employee ID
  205 |     await addEmployeePage.fillEmployeeId(employeeId);
  206 | 
  207 |     // Toggle Create Login Details ON
  208 |     await addEmployeePage.toggleCreateLoginDetails(true);
  209 | 
  210 |     // Fill login details from test data using POM selectors
  211 |     await addEmployeePage.enterUsername(loginUsername);
  212 |     await addEmployeePage.enterPassword(pimTestData.e2eEmployee.createdPassword);
  213 |     await addEmployeePage.enterConfirmPassword(pimTestData.e2eEmployee.createdPassword);
  214 | 
  215 |     // Save employee
  216 |     await addEmployeePage.clickSave();
  217 | 
  218 |     // Verify employee was created by checking we're on the personal details page
  219 |     // and the employee name is displayed (not still on add employee page)
> 220 |     await expect(page).toHaveURL(/\/pim\/viewPersonalDetails/, { timeout: 10000 });
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  221 |     await expect(page.getByText("James Brown").first()).toBeVisible();
  222 | 
  223 |     // Navigate to employee list
  224 |     await pimPage.clickPim();
  225 |     await expect(page).toHaveURL(urlPatterns.employeeList);
  226 | 
  227 |     // Verify employee exists in table
  228 |     await pimPage.verifyEmployeeExists(fullName);
  229 |   });
  230 | 
  231 |   test("Edit employee James Brown and populate all personal details", async ({
  232 |     page,
  233 |     pimPage,
  234 |     addEmployeePage,
  235 |     leftNav,
  236 |   }: PimFixtures & { page: Page }) => {
  237 |     // Navigate to PIM
  238 |     await leftNav.clickPim();
  239 |     await expect(page).toHaveURL(urlPatterns.employeeList);
  240 | 
  241 |     // Search for James Brown from test data
  242 |     await pimPage.searchByEmployeeName(pimTestData.e2eEmployee.fullName);
  243 |     const count = await pimPage.getRecordCount();
  244 |     expect(count).toBeGreaterThan(0);
  245 | 
  246 |     // Search by employee ID for more reliable matching
  247 |     const employeeId = await pimPage.getEmployeeIdByFullName(pimTestData.e2eEmployee.fullName);
  248 |     await pimPage.searchByEmployeeId(employeeId);
  249 |     await pimPage.getRecordCount();
  250 | 
  251 |     // Click edit
  252 |     await pimPage.clickEditByEmployeeId(employeeId);
  253 |     await addEmployeePage.verifyEditEmployeePageLoaded(pimTestData.e2eEmployee.fullName);
  254 | 
  255 |     // Click Personal Details tab
  256 |     await addEmployeePage.clickPersonalDetailsTab();
  257 |     await expect(addEmployeePage.personalDetailsTitle).toBeVisible();
  258 | 
  259 |     // Fill all personal details from test data
  260 |     await addEmployeePage.fillPersonalDetails({
  261 |       otherId: pimTestData.e2eEmployee.otherId,
  262 |       driversLicense: pimTestData.e2eEmployee.driversLicense,
  263 |       licenseExpiryDate: pimTestData.e2eEmployee.licenseExpiryDate,
  264 |       nationality: pimTestData.e2eEmployee.nationality,
  265 |       maritalStatus: pimTestData.e2eEmployee.maritalStatus,
  266 |       dateOfBirth: pimTestData.e2eEmployee.dateOfBirth,
  267 |       gender: pimTestData.e2eEmployee.gender,
  268 |     });
  269 | 
  270 |     // Verify fields are populated
  271 |     await expect(addEmployeePage.otherIdInput).toHaveValue(pimTestData.e2eEmployee.otherId);
  272 |     await expect(addEmployeePage.driversLicenseInput).toHaveValue(pimTestData.e2eEmployee.driversLicense);
  273 | 
  274 |     // Click Contact Details tab
  275 |     await addEmployeePage.clickContactDetailsTab();
  276 | 
  277 |     // Click Emergency Contacts tab
  278 |     await addEmployeePage.clickEmergencyContactsTab();
  279 | 
  280 |     // Click Dependents tab
  281 |     await addEmployeePage.clickDependentsTab();
  282 | 
  283 |     // Click Immigration tab
  284 |     await addEmployeePage.clickImmigrationTab();
  285 | 
  286 |     // Click Job tab
  287 |     await addEmployeePage.clickJobTab();
  288 | 
  289 |     // Click Salary tab
  290 |     await addEmployeePage.clickSalaryTab();
  291 | 
  292 |     // Click Report-to tab
  293 |     await addEmployeePage.clickReportToTab();
  294 | 
  295 |     // Click Qualifications tab
  296 |     await addEmployeePage.clickQualificationsTab();
  297 | 
  298 |     // Click Memberships tab
  299 |     await addEmployeePage.clickMembershipsTab();
  300 | 
  301 |     // Fill custom fields from test data
  302 |     await addEmployeePage.fillCustomFields({
  303 |       bloodType: pimTestData.e2eEmployee.bloodType,
  304 |       testField: pimTestData.e2eEmployee.testField,
  305 |     });
  306 | 
  307 |     await expect(addEmployeePage.testFieldInput).toHaveValue(pimTestData.e2eEmployee.testField);
  308 | 
  309 |     // Save changes
  310 |     await addEmployeePage.clickSave();
  311 |     await expect(page).toHaveURL(urlPatterns.employeeList);
  312 |   });
  313 | 
  314 |   test("Create system user for James Brown with unique username", async ({
  315 |     page,
  316 |     leftNav,
  317 |     pimPage,
  318 |   }: PimFixtures & { page: Page }) => {
  319 |     const adminPage = new AdminPage(page);
  320 |     const addUserPage = new AddUserPage(page);
```
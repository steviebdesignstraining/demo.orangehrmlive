# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo-orangehrmlive-tests/tests/pimTest/positivePim.spec.ts >> E2E Employee and System User CRUD scenarios >> Edit employee James Brown and populate all personal details
- Location: demo-orangehrmlive-tests/tests/pimTest/positivePim.spec.ts:231:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group:has(label:text("Other Id")) input')
Expected: "OTH789"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('.oxd-input-group:has(label:text("Other Id")) input')
    14 × locator resolved to <input data-v-1f99f73c="" class="oxd-input oxd-input--active"/>
       - unexpected value ""

```

```yaml
- textbox
```

# Test source

```ts
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
  220 |     await expect(page).toHaveURL(/\/pim\/viewPersonalDetails/, { timeout: 10000 });
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
  253 |     await addEmployeePage.verifyEditEmployeePageLoaded(
  254 |       pimTestData.e2eEmployee.firstName,
  255 |       pimTestData.e2eEmployee.lastName
  256 |     );
  257 | 
  258 |     // Click Personal Details tab
  259 |     await addEmployeePage.clickPersonalDetailsTab();
  260 |     await expect(addEmployeePage.personalDetailsTitle).toBeVisible();
  261 | 
  262 |     // Fill all personal details from test data
  263 |     await addEmployeePage.fillPersonalDetails({
  264 |       otherId: pimTestData.e2eEmployee.otherId,
  265 |       driversLicense: pimTestData.e2eEmployee.driversLicense,
  266 |       licenseExpiryDate: pimTestData.e2eEmployee.licenseExpiryDate,
  267 |       nationality: pimTestData.e2eEmployee.nationality,
  268 |       maritalStatus: pimTestData.e2eEmployee.maritalStatus,
  269 |       dateOfBirth: pimTestData.e2eEmployee.dateOfBirth,
  270 |       gender: pimTestData.e2eEmployee.gender,
  271 |     });
  272 | 
  273 |     // Verify fields are populated
> 274 |     await expect(addEmployeePage.otherIdInput).toHaveValue(pimTestData.e2eEmployee.otherId);
      |                                                ^ Error: expect(locator).toHaveValue(expected) failed
  275 |     await expect(addEmployeePage.driversLicenseInput).toHaveValue(pimTestData.e2eEmployee.driversLicense);
  276 | 
  277 |     // Click Contact Details tab
  278 |     await addEmployeePage.clickContactDetailsTab();
  279 | 
  280 |     // Click Emergency Contacts tab
  281 |     await addEmployeePage.clickEmergencyContactsTab();
  282 | 
  283 |     // Click Dependents tab
  284 |     await addEmployeePage.clickDependentsTab();
  285 | 
  286 |     // Click Immigration tab
  287 |     await addEmployeePage.clickImmigrationTab();
  288 | 
  289 |     // Click Job tab
  290 |     await addEmployeePage.clickJobTab();
  291 | 
  292 |     // Click Salary tab
  293 |     await addEmployeePage.clickSalaryTab();
  294 | 
  295 |     // Click Report-to tab
  296 |     await addEmployeePage.clickReportToTab();
  297 | 
  298 |     // Click Qualifications tab
  299 |     await addEmployeePage.clickQualificationsTab();
  300 | 
  301 |     // Click Memberships tab
  302 |     await addEmployeePage.clickMembershipsTab();
  303 | 
  304 |     // Fill custom fields from test data
  305 |     await addEmployeePage.fillCustomFields({
  306 |       bloodType: pimTestData.e2eEmployee.bloodType,
  307 |       testField: pimTestData.e2eEmployee.testField,
  308 |     });
  309 | 
  310 |     await expect(addEmployeePage.testFieldInput).toHaveValue(pimTestData.e2eEmployee.testField);
  311 | 
  312 |     // Save changes
  313 |     await addEmployeePage.clickSave();
  314 |     await expect(page).toHaveURL(urlPatterns.employeeList);
  315 |   });
  316 | 
  317 |   test("Create system user for James Brown with unique username", async ({
  318 |     page,
  319 |     leftNav,
  320 |     pimPage,
  321 |   }: PimFixtures & { page: Page }) => {
  322 |     const adminPage = new AdminPage(page);
  323 |     const addUserPage = new AddUserPage(page);
  324 | 
  325 |     // Get unique username from test data using POM method
  326 |     const username = await adminPage.generateUniqueUsername(
  327 |       pimTestData.e2eEmployee.usernamePrefix,
  328 |     );
  329 | 
  330 |     // Open Add User page
  331 |     await adminPage.openAddUserPage();
  332 |     await addUserPage.verifyAddUserPageLoaded();
  333 | 
  334 |     // Create user for James Brown from test data
  335 |     await addUserPage.selectUserRole(adminTestData.e2eUser.role);
  336 |     await addUserPage.enterEmployeeName(adminTestData.e2eUser.employeeName);
  337 |     await addUserPage.selectStatus(adminTestData.e2eUser.status);
  338 |     await addUserPage.enterUsername(username);
  339 |     await addUserPage.enterPassword(adminTestData.e2eUser.password);
  340 |     await addUserPage.enterConfirmPassword(adminTestData.e2eUser.password);
  341 | 
  342 |     // Verify password hint is visible
  343 |     await expect(addUserPage.passwordHint).toBeVisible();
  344 | 
  345 |     // Save user
  346 |     await addUserPage.clickSave();
  347 |     await expect(page).toHaveURL(urlPatterns.adminUsers);
  348 | 
  349 |     // Verify user exists
  350 |     await adminPage.verifyUserExists(username);
  351 |   });
  352 | 
  353 |   test("Edit system user for James Brown and verify positive toggles", async ({
  354 |     page,
  355 |     leftNav,
  356 |     pimPage,
  357 |   }: PimFixtures & { page: Page }) => {
  358 |     const adminPage = new AdminPage(page);
  359 |     const addUserPage = new AddUserPage(page);
  360 | 
  361 |     // Search for James Brown's user from test data
  362 |     await adminPage.searchByEmployee(adminTestData.e2eUser.employeeName);
  363 |     const count = await adminPage.getRecordCount();
  364 |     expect(count).toBeGreaterThan(0);
  365 | 
  366 |     // Get the username from the table
  367 |     const userRow = page.locator(".oxd-table-card").first();
  368 |     const usernameElement = userRow.locator(
  369 |       `.oxd-table-cell:has-text("${adminTestData.e2eUser.usernamePrefix}")`,
  370 |     );
  371 |     const usernameText = await usernameElement.textContent();
  372 |     const username = usernameText?.trim() || "jamesbrown";
  373 | 
  374 |     // Click edit
```
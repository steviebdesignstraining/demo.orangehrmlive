# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo-orangehrmlive-tests/tests/adminTest/positiveAdmin.spec.ts >> Admin CRUD scenarios >> Create a new admin user
- Location: demo-orangehrmlive-tests/tests/adminTest/positiveAdmin.spec.ts:188:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'James T Brown' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Yazeed Ali
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add User" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - generic [ref=e166]: User Role*
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: Admin
              - generic [ref=e172]: 
          - generic [ref=e174]:
            - generic [ref=e176]: Employee Name*
            - generic [ref=e178]:
              - textbox "Type for hints..." [active] [ref=e180]: James T Brown
              - listbox [ref=e181]:
                - option "No Records Found" [ref=e182] [cursor=pointer]
          - generic [ref=e184]:
            - generic [ref=e186]: Status*
            - generic [ref=e189] [cursor=pointer]:
              - generic [ref=e190]: "-- Select --"
              - generic [ref=e192]: 
          - generic [ref=e194]:
            - generic [ref=e196]: Username*
            - textbox [ref=e198]
        - generic [ref=e200]:
          - generic [ref=e201]:
            - generic [ref=e202]:
              - generic [ref=e204]: Password*
              - textbox [ref=e206]
            - paragraph [ref=e207]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e209]:
            - generic [ref=e211]: Confirm Password*
            - textbox [ref=e213]
        - separator [ref=e214]
        - generic [ref=e215]:
          - paragraph [ref=e216]: "* Required"
          - button "Cancel" [ref=e217] [cursor=pointer]
          - button "Save" [ref=e218] [cursor=pointer]
    - generic [ref=e219]:
      - paragraph [ref=e220]: OrangeHRM OS 5.8
      - paragraph [ref=e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e222] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1   | import { Page, Locator, expect } from "@playwright/test";
  2   | import { AddUserSelectors } from "../../selectors/adminSelectors/addUserSelectors";
  3   | 
  4   | export class AddUserPage {
  5   |   readonly page: Page;
  6   | 
  7   |   // ========================================
  8   |   // FORM ELEMENTS
  9   |   // ========================================
  10  | 
  11  |   readonly userRoleDropdown: Locator;
  12  |   readonly employeeNameInput: Locator;
  13  |   readonly statusDropdown: Locator;
  14  |   readonly usernameInput: Locator;
  15  | 
  16  |   readonly passwordInput: Locator;
  17  |   readonly confirmPasswordInput: Locator;
  18  | 
  19  |   // ========================================
  20  |   // BUTTONS
  21  |   // ========================================
  22  | 
  23  |   readonly cancelButton: Locator;
  24  |   readonly saveButton: Locator;
  25  | 
  26  |   // ========================================
  27  |   // INFO
  28  |   // ========================================
  29  | 
  30  |   readonly passwordHint: Locator;
  31  | 
  32  |   constructor(page: Page) {
  33  |     this.page = page;
  34  | 
  35  |     this.userRoleDropdown = page.locator(AddUserSelectors.userRoleDropdown);
  36  |     this.employeeNameInput = page.locator(AddUserSelectors.employeeNameInput);
  37  |     this.statusDropdown = page.locator(AddUserSelectors.statusDropdown);
  38  |     this.usernameInput = page.locator(AddUserSelectors.usernameInput);
  39  | 
  40  |     this.passwordInput = page.locator(AddUserSelectors.passwordInput);
  41  |     this.confirmPasswordInput = page.locator(
  42  |       AddUserSelectors.confirmPasswordInput,
  43  |     );
  44  | 
  45  |     this.cancelButton = page.locator(AddUserSelectors.cancelButton);
  46  |     this.saveButton = page.locator(AddUserSelectors.saveButton);
  47  | 
  48  |     this.passwordHint = page.locator(AddUserSelectors.passwordHint);
  49  |   }
  50  | 
  51  |   // ========================================
  52  |   // NAVIGATION / VALIDATION
  53  |   // ========================================
  54  | 
  55  |   async verifyAddUserPageLoaded(): Promise<void> {
  56  |     await expect(this.page.locator(AddUserSelectors.pageTitle)).toBeVisible();
  57  |   }
  58  | 
  59  |   // ========================================
  60  |   // ACTIONS - FORM FILLING
  61  |   // ========================================
  62  | 
  63  |   async selectUserRole(role: string): Promise<void> {
  64  |     await this.userRoleDropdown.click();
  65  |     await this.page.locator(`.oxd-select-dropdown span:has-text("${role}")`).click();
  66  |   }
  67  | 
  68  |   async selectStatus(status: string): Promise<void> {
  69  |     await this.statusDropdown.click();
  70  |     await this.page.locator(`.oxd-select-dropdown span:has-text("${status}")`).click();
  71  |   }
  72  | 
  73  |   async enterEmployeeName(name: string): Promise<void> {
  74  |     await this.employeeNameInput.fill(name);
  75  | 
  76  |     // wait for autocomplete dropdown to appear, then select the option by name
  77  |     const autocompleteOption = this.page.getByRole('option', { name: name });
> 78  |     await autocompleteOption.waitFor({ state: 'visible', timeout: 10000 });
      |                              ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  79  |     await autocompleteOption.click();
  80  |   }
  81  | 
  82  |   async enterUsername(username: string): Promise<void> {
  83  |     await this.usernameInput.fill(username);
  84  |   }
  85  | 
  86  |   async replaceUsername(username: string): Promise<void> {
  87  |     await this.usernameInput.fill("");
  88  |     await this.usernameInput.fill(username);
  89  |   }
  90  | 
  91  |   async enterPassword(password: string): Promise<void> {
  92  |     await this.passwordInput.fill(password);
  93  |   }
  94  | 
  95  |   async enterConfirmPassword(password: string): Promise<void> {
  96  |     await this.confirmPasswordInput.fill(password);
  97  |   }
  98  | 
  99  |   // ========================================
  100 |   // ACTIONS - BUTTONS
  101 |   // ========================================
  102 | 
  103 |   async clickSave(): Promise<void> {
  104 |     await this.saveButton.click();
  105 |   }
  106 | 
  107 |   async clickCancel(): Promise<void> {
  108 |     await this.cancelButton.click();
  109 |   }
  110 | 
  111 |   // ========================================
  112 |   // FULL FLOW
  113 |   // ========================================
  114 | 
  115 |   async createUser(user: {
  116 |     role: string;
  117 |     employeeName: string;
  118 |     status: string;
  119 |     username: string;
  120 |     password: string;
  121 |   }): Promise<void> {
  122 |     await this.selectUserRole(user.role);
  123 |     await this.enterEmployeeName(user.employeeName);
  124 |     await this.selectStatus(user.status);
  125 |     await this.enterUsername(user.username);
  126 |     await this.enterPassword(user.password);
  127 |     await this.enterConfirmPassword(user.password);
  128 | 
  129 |     await this.clickSave();
  130 |   }
  131 | }
  132 | 
```
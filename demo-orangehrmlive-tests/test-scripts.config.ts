export interface TestSuiteScript {
  id: string;
  spec: string;
  label: string;
}

export interface TestCaseScript {
  id: string;
  suiteId: string;
  spec: string;
  grep: RegExp;
  label: string;
}

export const testSuiteScripts: TestSuiteScript[] = [
  {
    id: "login-positive",
    spec: "tests/loginTests/positiveLogin.spec.ts",
    label: "Login positive",
  },
  {
    id: "login-negative",
    spec: "tests/loginTests/negativeLogin.spec.ts",
    label: "Login negative",
  },
  {
    id: "dashboard-positive",
    spec: "tests/dashboardTests/positiveDashboard.spec.ts",
    label: "Dashboard positive",
  },
  {
    id: "dashboard-negative",
    spec: "tests/dashboardTests/negativeDashboard.spec.ts",
    label: "Dashboard negative",
  },
  {
    id: "pim-positive",
    spec: "tests/pimTest/positivePim.spec.ts",
    label: "PIM positive",
  },
  {
    id: "admin-positive",
    spec: "tests/adminTest/positiveAdmin.spec.ts",
    label: "Admin positive",
  },
];

export const testCaseScripts: TestCaseScript[] = [
  {
    id: "login-positive-happy-path",
    suiteId: "login-positive",
    spec: "tests/loginTests/positiveLogin.spec.ts",
    grep: /Login with valid credentials \(core happy path\)/,
    label: "Login with valid credentials (core happy path)",
  },
  {
    id: "login-positive-session-persists",
    suiteId: "login-positive",
    spec: "tests/loginTests/positiveLogin.spec.ts",
    grep: /Session persists after successful login/,
    label: "Session persists after successful login",
  },
  {
    id: "login-positive-logout",
    suiteId: "login-positive",
    spec: "tests/loginTests/positiveLogin.spec.ts",
    grep: /Logout returns user to login page/,
    label: "Logout returns user to login page",
  },
  {
    id: "login-negative-invalid-credentials",
    suiteId: "login-negative",
    spec: "tests/loginTests/negativeLogin.spec.ts",
    grep: /Login fails with invalid credentials/,
    label: "Login fails with invalid credentials",
  },
  {
    id: "login-negative-wrong-password",
    suiteId: "login-negative",
    spec: "tests/loginTests/negativeLogin.spec.ts",
    grep: /Login fails with valid username \+ wrong password/,
    label: "Login fails with valid username + wrong password",
  },
  {
    id: "login-negative-empty-fields",
    suiteId: "login-negative",
    spec: "tests/loginTests/negativeLogin.spec.ts",
    grep: /Login fails with empty fields/,
    label: "Login fails with empty fields",
  },
  {
    id: "login-negative-empty-password",
    suiteId: "login-negative",
    spec: "tests/loginTests/negativeLogin.spec.ts",
    grep: /Login fails with empty password only/,
    label: "Login fails with empty password only",
  },
  {
    id: "login-negative-empty-username",
    suiteId: "login-negative",
    spec: "tests/loginTests/negativeLogin.spec.ts",
    grep: /Login fails with empty username only/,
    label: "Login fails with empty username only",
  },
  {
    id: "login-negative-unauthenticated-dashboard",
    suiteId: "login-negative",
    spec: "tests/loginTests/negativeLogin.spec.ts",
    grep: /Direct access to dashboard without authentication/,
    label: "Direct access to dashboard without authentication",
  },
  {
    id: "dashboard-positive-widgets",
    suiteId: "dashboard-positive",
    spec: "tests/dashboardTests/positiveDashboard.spec.ts",
    grep: /Dashboard displays all widgets after login/,
    label: "Dashboard displays all widgets after login",
  },
  {
    id: "dashboard-positive-left-nav-menu",
    suiteId: "dashboard-positive",
    spec: "tests/dashboardTests/positiveDashboard.spec.ts",
    grep: /Left navigation displays all menu items after login/,
    label: "Left navigation displays all menu items after login",
  },
  {
    id: "dashboard-positive-left-nav-toggle",
    suiteId: "dashboard-positive",
    spec: "tests/dashboardTests/positiveDashboard.spec.ts",
    grep: /Left navigation closes and open/,
    label: "Left navigation closes and open",
  },
];

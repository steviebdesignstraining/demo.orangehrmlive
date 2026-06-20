import { defineConfig, devices } from '@playwright/test';
import {
  testCaseScripts,
  testSuiteScripts,
} from './test-scripts.config';

/**
 * Read environment variables from .env file.
 * https://dotenvx.com
 */
import dotenvx from '@dotenvx/dotenvx';
import path from 'path';

dotenvx.config({ path: path.resolve(__dirname, '.env') });

const chrome = devices['Desktop Chrome'];
const firefox = devices['Desktop Firefox'];
const safari = devices['Desktop Safari'];

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests sequentially */
  fullyParallel: false,
  /* Increase test timeout to 120 seconds */
  timeout: 120_000,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Increase assertion timeout to 120 seconds */
  expect: {
    timeout: 120_000,
  },
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...chrome },
    },

    {
      name: 'firefox',
      use: { ...firefox },
    },

    {
      name: 'webkit',
      use: { ...safari },
    },

    ...testSuiteScripts.map((suite) => ({
      name: `suite:${suite.id}`,
      testMatch: suite.spec,
      use: { ...chrome },
    })),

    ...testCaseScripts.map((testCase) => ({
      name: `test:${testCase.id}`,
      testMatch: testCase.spec,
      grep: testCase.grep,
      use: { ...chrome },
    })),

    /* Ordered test execution: Login -> Dashboard -> PIM -> Admin */
    {
      name: 'suite:login-run',
      testMatch: ['tests/loginTests/positiveLogin.spec.ts'],
      use: { ...chrome },
    },
    {
      name: 'suite:dashboard-run',
      testMatch: [
        'tests/dashboardTests/positiveDashboard.spec.ts',
        'tests/dashboardTests/edgecaseDashboard.spec.ts',
      ],
      use: { ...chrome },
      dependencies: ['suite:login-run'],
    },
    {
      name: 'suite:pim-run',
      testMatch: ['tests/pimTest/**/*.spec.ts'],
      use: { ...chrome },
      dependencies: ['suite:dashboard-run'],
    },
    {
      name: 'suite:admin-run',
      testMatch: ['tests/adminTest/**/*.spec.ts'],
      use: { ...chrome },
      dependencies: ['suite:pim-run'],
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

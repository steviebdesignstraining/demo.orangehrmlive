import {
  test,
  expect,
  loginData
} from '../../fixtures/loginFixtures/login.fixtures';
import { urlPatterns } from '../../test-data/urlPatterns';

test.describe('Login with valid credentials scenarios', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();
  });

  test('Login with valid credentials (core happy path)', async ({
    page,
    loginPage
  }) => {

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(urlPatterns.dashboard);
  });

  test('Session persists after successful login', async ({
    page,
    loginPage
  }) => {

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(urlPatterns.dashboard);

    await page.reload();

    await expect(page).toHaveURL(urlPatterns.dashboard);
  });

  test('Logout returns user to login page', async ({
    page,
    loginPage,
    topNav
  }) => {

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(urlPatterns.dashboard);

    await topNav.clickUserDropdown();

    await topNav.clickLogout();

    await expect(page).toHaveURL(urlPatterns.login);
  });

});
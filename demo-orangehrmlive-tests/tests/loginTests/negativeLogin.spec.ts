import {
  test,
  expect,
  loginData
} from '../../fixtures/loginFixtures/login.fixtures';
import { getAppUrl } from '../../utils/env';
import { urlPatterns } from '../../test-data/urlPatterns';

test.describe('Login with invalid credentials scenarios', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.verifyLoginPageDisplayed();
  });

  test('Login fails with invalid credentials', async ({ loginPage }) => {
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await loginPage.verifyInvalidCredentialsError();
  });

  test('Login fails with valid username + wrong password', async ({ loginPage }) => {
    await loginPage.login(
      loginData.validUser.username,
      loginData.invalidUser.password
    );

    await loginPage.verifyInvalidCredentialsError();
  });

  test('Login fails with empty fields', async ({ loginPage }) => {
    await loginPage.login(
      loginData.emptyUser.username,
      loginData.emptyUser.password
    );

    await loginPage.verifyRequiredFieldError(2);
  });

  test('Login fails with empty password only', async ({ loginPage }) => {
    await loginPage.enterUsername(loginData.validUser.username);
    await loginPage.clickLogin();

    await loginPage.verifyRequiredFieldError();
  });

  test('Login fails with empty username only', async ({ loginPage }) => {
    await loginPage.enterPassword(loginData.validUser.password);
    await loginPage.clickLogin();

    await loginPage.verifyRequiredFieldError();
  });

  test('Direct access to dashboard without authentication', async ({ page }) => {
    await page.goto(getAppUrl('/web/index.php/dashboard/index'));

    await expect(page).toHaveURL(urlPatterns.login);
  });

});

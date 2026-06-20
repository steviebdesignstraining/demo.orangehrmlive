interface LoginSelectors {
  pageTitle: string;
  usernameInput: string;
  passwordInput: string;
  loginButton: string;
  errorMessage: string;
  requiredFieldMessage: string;
  forgotPasswordLink: string;
  demoUsernameText: string;
  demoPasswordText: string;
  loginForm: string;
  logo: string;
  footer: string;
  linkedinLink: string;
  facebookLink: string;
  twitterLink: string;
  youtubeLink: string;
}

export const loginSelectors: LoginSelectors = {
  // Page Elements
  pageTitle: 'h5.orangehrm-login-title',

  // Input Fields
  usernameInput: 'input[name="username"]',
  passwordInput: 'input[name="password"]',

  // Buttons
  loginButton: 'button[type="submit"]',

  // Validation / Errors
  errorMessage: '.oxd-alert-content-text',
  requiredFieldMessage: '.oxd-input-field-error-message',

  // Forgot Password
  forgotPasswordLink: 'p.orangehrm-login-forgot-header',

  // Demo Credentials
  demoUsernameText: 'text=Username : Admin',
  demoPasswordText: 'text=Password : admin123',

  // Login Form
  loginForm: 'form.oxd-form',

  // Logo
  logo: 'img[alt="orangehrm-logo"]',

  // Footer
  footer: '.orangehrm-login-footer',

  // Social Links
  linkedinLink: 'a[href*="linkedin"]',
  facebookLink: 'a[href*="facebook"]',
  twitterLink: 'a[href*="twitter"]',
  youtubeLink: 'a[href*="youtube"]'
};
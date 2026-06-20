import { Locator, expect } from '@playwright/test';

/**
 * Returns true when the locator matches at least one element in the DOM.
 */
export async function isPresent(locator: Locator): Promise<boolean> {
  return (await locator.count()) > 0;
}

/**
 * Asserts visibility only when the locator matches at least one element.
 * Use for UI that may be hidden based on role, permissions, or demo config.
 */
export async function expectVisibleIfPresent(locator: Locator) {
  if (await isPresent(locator)) {
    await expect(locator).toBeVisible();
  }
}

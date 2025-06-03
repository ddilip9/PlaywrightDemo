import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('valid login should navigate to products page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

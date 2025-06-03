import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartButton: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartButton = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[class="product_sort_container"]');
  }

  async getProductTitles(): Promise<string[]> {
    await this.page.waitForLoadState('networkidle');
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
    await this.page.waitForLoadState('networkidle');
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }

  async addProductToCart(productName: string): Promise<void> {
    const product = this.page.locator(`.inventory_item:has-text("${productName}")`);
    await product.locator('button').click();
  }

  async getCartItemCount(): Promise<number> {
    const badge = this.page.locator('.shopping_cart_badge');
    try {
      const text = await badge.textContent();
      return parseInt(text || '0');
    } catch {
      return 0;
    }
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    const valueMap = {
      az: 'az',     // Name (A to Z)
      za: 'za',     // Name (Z to A)
      lohi: 'lohi', // Price (low to high)
      hilo: 'hilo'  // Price (high to low)
    };
    await this.sortDropdown.selectOption(valueMap[option]);
    await this.page.waitForTimeout(500); // Give UI time to update
  }
}

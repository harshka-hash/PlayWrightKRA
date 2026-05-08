# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutFromProductPage.spec.js >> TC_09: Verify checkout from product page
- Location: tests/checkoutFromProductPage.spec.js:5:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 617
Received: 617.5
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - button "Go back Back to products" [ref=e16] [cursor=pointer]:
        - img "Go back" [ref=e17]
        - text: Back to products
    - generic [ref=e20]:
      - img "Sauce Labs Backpack" [ref=e22]
      - generic [ref=e23]:
        - generic [ref=e24]: Sauce Labs Backpack
        - generic [ref=e25]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
        - generic [ref=e26]: $29.99
        - button "Add to cart" [ref=e27] [cursor=pointer]
  - contentinfo [ref=e28]:
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Twitter" [ref=e31] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e32]:
        - link "Facebook" [ref=e33] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e34]:
        - link "LinkedIn" [ref=e35] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e36]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | const { loginPage } = require('../pom/LoginPom.js');
  3  | const { TotalProduct } = require('../pom/TotalProduct.js');
  4  | 
  5  | test('TC_09: Verify checkout from product page', async ({page}) => {
  6  |     const login = new loginPage(page);
  7  |     await login.navigate();
  8  |     await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
  9  |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  10 |     const pro = new TotalProduct(page, page.url().toString()); //creating object of total product class and passing page object and url to constructor
  11 |     const products = pro.totalProducts; //storing the locator of total products in a variable to use it in loop to get the product
  12 |     const productName = await products.nth(0).locator(".inventory_item_name"); //locator for the product name of first product to click on it and verify the details of product in checkout page
  13 |     const productPrice = await products.nth(0).locator(".inventory_item_price"); //locator for the product price of first product to store the price and verify it in checkout page
  14 |     const productNameText = await productName.textContent(); //storing the product name in a variable to use it in checkout page to verify the product name in checkout page is same as the product name of product page
  15 |     const productPriceText = await productPrice.textContent(); //storing the product price in a variable to use it in checkout page to verify the product price in checkout page is same as the product price of product page
  16 |     await productName.click(); //clicking on the product name to go to product details page
  17 |     const img = await page.locator(".inventory_details_img"); //locator for the product image in product details page to verify the image size in product details page
  18 |     const imgsize = await img.boundingBox(); //getting the size of the product image in product details page to verify it is same as the image size in product page
  19 |     expect(imgsize.width).toBe(408); //verifying the width of the product image in product details page is same as the width of the product image in product page
> 20 |     expect(imgsize.height).toBe(617); //verifying the height of the product image in product details page is same as the height of the product image in product page
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  21 |     expect(await page.locator(".inventory_details_name").textContent()).toBe(productNameText); //verifying the product name in product details page is same as the product name of product page
  22 |     expect(await page.locator(".inventory_details_price").textContent()).toBe(productPriceText); //verifying the product price in product details page is same as the product price of product page
  23 |     await page.locator("#add-to-cart").click(); //clicking on add to cart button in product details page to add the product to cart and verify the product in cart page and checkout page
  24 |     await page.locator("#shopping_cart_container").click();//clicking on cart icon to go to cart page
  25 |     await expect(page).toHaveURL("https://www.saucedemo.com/cart.html"); //verifying the url of cart page
  26 |     expect(await page.locator(".inventory_item_name").textContent()).toBe(productNameText); //verifying the product name in cart page is same as the product name of product page
  27 |     expect(await page.locator(".inventory_item_price").textContent()).toBe(productPriceText); //verifying the product price in cart page is same as the product price of product page
  28 |     await page.locator("#checkout").click(); //clicking on checkout button in cart page to go to checkout page
  29 |     await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html"); //verifying the url of checkout page
  30 |     await page.locator("#first-name").fill("John"); //filling the first name in checkout page
  31 |     await page.locator("#last-name").fill("Doe"); //filling the last name in checkout page
  32 |     await page.locator("#postal-code").fill("12345"); //filling the postal code in checkout page
  33 |     await page.locator("#continue").click(); //clicking on continue button in checkout page to go to checkout overview page
  34 |     await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html"); //verifying the url of checkout overview page
  35 |     expect(await page.locator(".inventory_item_name").textContent()).toBe(productNameText); //verifying the product name in checkout overview page is same as the product name of product page
  36 |     expect(await page.locator(".inventory_item_price").textContent()).toBe(productPriceText); //verifying the product price in checkout overview page is same as the product price of product page
  37 |     await page.locator("#finish").click(); //clicking on finish button in checkout overview page to complete the checkout process
  38 |     await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html"); //verifying the url of checkout complete page
  39 |     await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!"); //verifying the complete header text in checkout complete page
  40 |     await page.locator("#back-to-products").click(); //clicking on back to products button in checkout complete page to go back to product page
  41 |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html"); //verifying the url of product page
  42 | });
```
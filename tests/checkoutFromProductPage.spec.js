const {test,expect} = require('@playwright/test');
const { loginPage } = require('../pom/LoginPom.js');
const { TotalProduct } = require('../pom/TotalProduct.js');

test('TC_09: Verify checkout from product page', async ({page}) => {
    const login = new loginPage(page);
    await login.navigate();
    await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const pro = new TotalProduct(page, page.url().toString()); //creating object of total product class and passing page object and url to constructor
    const products = pro.totalProducts; //storing the locator of total products in a variable to use it in loop to get the product
    const productName = await products.nth(0).locator(".inventory_item_name"); //locator for the product name of first product to click on it and verify the details of product in checkout page
    const productPrice = await products.nth(0).locator(".inventory_item_price"); //locator for the product price of first product to store the price and verify it in checkout page
    const productNameText = await productName.textContent(); //storing the product name in a variable to use it in checkout page to verify the product name in checkout page is same as the product name of product page
    const productPriceText = await productPrice.textContent(); //storing the product price in a variable to use it in checkout page to verify the product price in checkout page is same as the product price of product page
    await productName.click(); //clicking on the product name to go to product details page
    const img = await page.locator(".inventory_details_img"); //locator for the product image in product details page to verify the image size in product details page
    const imgsize = await img.boundingBox(); //getting the size of the product image in product details page to verify it is same as the image size in product page
    expect(imgsize.width).toBe(408); //verifying the width of the product image in product details page is same as the width of the product image in product page
    expect(imgsize.height).toBeGreaterThanOrEqual(617); //verifying the height of the product image in product details page is same as the height of the product image in product page
    expect(await page.locator(".inventory_details_name").textContent()).toBe(productNameText); //verifying the product name in product details page is same as the product name of product page
    expect(await page.locator(".inventory_details_price").textContent()).toBe(productPriceText); //verifying the product price in product details page is same as the product price of product page
    await page.locator("#add-to-cart").click(); //clicking on add to cart button in product details page to add the product to cart and verify the product in cart page and checkout page
    await page.locator("#shopping_cart_container").click();//clicking on cart icon to go to cart page
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html"); //verifying the url of cart page
    expect(await page.locator(".inventory_item_name").textContent()).toBe(productNameText); //verifying the product name in cart page is same as the product name of product page
    expect(await page.locator(".inventory_item_price").textContent()).toBe(productPriceText); //verifying the product price in cart page is same as the product price of product page
    await page.locator("#checkout").click(); //clicking on checkout button in cart page to go to checkout page
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html"); //verifying the url of checkout page
    await page.locator("#first-name").fill("John"); //filling the first name in checkout page
    await page.locator("#last-name").fill("Doe"); //filling the last name in checkout page
    await page.locator("#postal-code").fill("12345"); //filling the postal code in checkout page
    await page.locator("#continue").click(); //clicking on continue button in checkout page to go to checkout overview page
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html"); //verifying the url of checkout overview page
    expect(await page.locator(".inventory_item_name").textContent()).toBe(productNameText); //verifying the product name in checkout overview page is same as the product name of product page
    expect(await page.locator(".inventory_item_price").textContent()).toBe(productPriceText); //verifying the product price in checkout overview page is same as the product price of product page
    await page.locator("#finish").click(); //clicking on finish button in checkout overview page to complete the checkout process
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html"); //verifying the url of checkout complete page
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!"); //verifying the complete header text in checkout complete page
    await page.locator("#back-to-products").click(); //clicking on back to products button in checkout complete page to go back to product page
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html"); //verifying the url of product page
});
const {expect,test} = require('@playwright/test');
const { loginPage } = require('../pom/LoginPom.js');
const { TotalProduct } = require('../pom/TotalProduct.js');

test('TC_08: Verify Checkout Process: should complete the checkout process successfully @smoke', async ({page}) => {
    const login = new loginPage(page);
    await login.navigate();
    await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const pro = new TotalProduct(page, page.url().toString()); //creating object of total product class and passing page object and url to constructor
    const products = pro.totalProducts; //storing the locator of total products in a variable to use it in loop to get the product
    
    let productname = [];  //To store the product name
    let price = []; //To store the product price
    for(let i=0; i< await products.count(); i++){ 
        await products.nth(i).locator("//button[@class='btn btn_primary btn_small btn_inventory ']").click();
        productname.push(await products.nth(i).locator(".inventory_item_name").textContent());
        //console.log(await products.nth(i).locator(".inventory_item_name").textContent() + " is added to cart");  
        const productPrice = await products.nth(i).locator(".inventory_item_price").textContent();
        price.push(parseFloat(productPrice.replace("$","")));
    }
    
    await page.locator(".shopping_cart_link").click(); //clicking on cart icon
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html"); //verifying the url of cart page
    let cartProductName = []; //To store the product name in cart
    let cartPrice = []; //To store the product price in cart
    let cartProduct = page.locator(".cart_item"); //locator for the product in cart page to use it in loop to get the product name and price in cart page
    for(let i=0; i< await cartProduct.count(); i++){
        cartProductName.push(await cartProduct.nth(i).locator(".inventory_item_name").textContent()); //getting the product name in cart page and storing it in an array
        const cartProductPrice = await cartProduct.nth(i).locator(".inventory_item_price").textContent(); //getting the product price in cart page and storing it in an array
        cartPrice.push(parseFloat(cartProductPrice.replace("$",""))); //removing the $ sign from the price and converting it to float before storing it in an array
    }
    expect(cartProductName).toEqual(productname); //verifying the product name in cart page is same as the product name added to cart
    expect(cartPrice).toEqual(price); //verifying the product price in cart page is same as the product price added to cart

    await page.locator("#checkout").click(); 
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
    await page.locator("#first-name").fill("John");
    await page.locator("#last-name").fill("Doe");
    await page.locator("#postal-code").fill("12345");
    await page.locator("#continue").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");

    let checkoutProductName = []; //To store the product name in checkout page
    let checkoutPrice = [];
    let checkoutProduct = page.locator(".cart_item");
    let total = 0;
    for(let i=0; i< await checkoutProduct.count(); i++){
        checkoutProductName.push(await checkoutProduct.nth(i).locator(".inventory_item_name").textContent());
        const checkoutProductPrice = await checkoutProduct.nth(i).locator(".inventory_item_price").textContent();
        checkoutPrice.push(parseFloat(checkoutProductPrice.replace("$","")));
        total += parseFloat(checkoutProductPrice.replace("$",""));
    }
    expect(checkoutProductName).toEqual(cartProductName);
    expect(checkoutPrice).toEqual(cartPrice);
    expect(await page.locator(".summary_subtotal_label").textContent()).toBe("Item total: $" + total);
    await page.locator("#finish").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
    await page.locator("#back-to-products").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

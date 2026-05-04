const {expect,test} = require('@playwright/test');
const { loginPage } = require('../pom/LoginPom.js');
const { TotalProduct } = require('../pom/TotalProduct.js');

test('TC_07: Verify Cart Badge: should display correct total value in cart', async ({page}) => {
    const login = new loginPage(page);
    await login.navigate();
    await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    
    const pro = new TotalProduct(page, page.url().toString());
    const products = pro.totalProducts;
    
    
    for(let i=0; i< await products.count(); i++){
        await products.nth(i).locator("//button[@class='btn btn_primary btn_small btn_inventory ']").click();  
        expect (await page.locator(".shopping_cart_badge").textContent()).toBe((i+1).toString());
        const productName = await products.nth(i).locator(".inventory_item_name");
        console.log(await productName.textContent() + " is added to cart");


    }
    for(let i=0; i< await products.count(); i++){
        await products.nth(i).locator("//button[@class='btn btn_secondary btn_small btn_inventory ']").click();  
        if(await products.count()-i-1 > 0){
            //console.log("Total products in cart: " + (await products.count()-i-1));
            expect (await page.locator(".shopping_cart_badge").textContent()).toBe((await products.count()-i-1).toString());
            const productName = await products.nth(i).locator(".inventory_item_name");
            console.log(await productName.textContent() + " is removed from cart");
        }
        else{
            await expect(page.locator(".shopping_cart_badge")).toBeHidden();
        }
        
    }

    
}) 

const {expect,test} = require('@playwright/test');
const { loginPage } = require('../pom/LoginPom.js');
const { text } = require('node:stream/consumers');
const { TotalProduct } = require('../pom/TotalProduct.js');
const { time } = require('node:console');

test.describe("Product Filter Functionality", () => {
     
    test('TC_03: Verify Product sorting descending to ascending', async ({ page }) => {
        await commonSteps(page, "za");
    });
    test('TC_04: Verify Product sorting ascending to descending', async ({ page }) => {
        await commonSteps(page, "az"); //passing page object and value to common steps function
    });
    test('TC_05: Verify price sorting function low to high', async ({ page }) => {
        await commonSteps(page, "lohi");
    });
    test('TC_06: Verify price sorting function high to low', async ({ page }) => {
        await commonSteps(page, "hilo");
    });

    async function commonSteps(page, value){
        const login = new loginPage(page);
        await login.navigate();
        await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        
        const pro = new TotalProduct(page, page.url().toString()); //creating object of total product class and passing page object and url to constructor
        const products = pro.totalProducts; //storing the locator of total products in a variable to use it in loop to get the product name and price
        
        let productName = "";  //To store the product name
        let copyProductName = []; //To copy and store the product name to compare with the sorted product name
        let price = ""; //To store the product price
        let copyPrice = []; //To copy and store the product price to compare with the sorted product price

        // To get the product name and price and store it in an array
        
        for(let i=0; i< await products.count(); i++){
            productName = products.nth(i).locator(".inventory_item_name");
            copyProductName.push(await productName.textContent());
            const productPrice = products.nth(i).locator(".inventory_item_price");
            const cp = await productPrice.textContent();
            const pf=parseFloat(cp.replace("$",""));
            copyPrice.push(pf);
        }
        const filterLocator = await page.locator(".product_sort_container");
        await filterLocator.selectOption(value);
        isSortedCheck(await filterLocator.inputValue(),copyProductName,copyPrice);
    }
    async function isSortedCheck(locatorValue, copyProductName, copyPrice) {
        const value = locatorValue;
        if(value === "az"){
            console.log("Products are sorted in ascending order");
            const actual = copyProductName.toSorted();
            expect(copyProductName).toEqual(actual);

        }
        else if(value === "za"){
            // To check if the products are sorted in descending order
            console.log("Products are sorted in descending order");
            const actual = copyProductName.reverse();
            expect(copyProductName).toEqual(actual);
        }
        else if(value === "lohi"){
            // To check if the products are sorted in price low to high
            console.log("Products are sorted in price low to high");
            const actual = copyPrice.sort((a,b) => a-b);
            expect(copyPrice).toEqual(actual);
        }
        else if(value === "hilo"){
            // To check if the products are sorted in price high to low
            console.log("Products are sorted in price high to low");
            const actual = copyPrice.sort((a,b) => b-a);
            expect(copyPrice).toEqual(actual);
        }
    }
});



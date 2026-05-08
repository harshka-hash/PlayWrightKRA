# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductFilter.spec.js >> Product Filter Functionality >> TC_03: Verify Product sorting descending to ascending
- Location: tests/ProductFilter.spec.js:9:5

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('.product_sort_container') to be visible

```

# Test source

```ts
  1  | 
  2  | const {expect,test} = require('@playwright/test');
  3  | const { loginPage } = require('../pom/LoginPom.js');
  4  | const { text } = require('node:stream/consumers');
  5  | const { TotalProduct } = require('../pom/TotalProduct.js');
  6  | 
  7  | test.describe("Product Filter Functionality", () => {
  8  |      
  9  |     test('TC_03: Verify Product sorting descending to ascending', async ({ page }) => {
  10 |         await commonSteps(page, "za");
  11 |     });
  12 |     test('TC_04: Verify Product sorting ascending to descending', async ({ page }) => {
  13 |         await commonSteps(page, "az"); //passing page object and value to common steps function
  14 |     });
  15 |     test('TC_05: Verify price sorting function low to high', async ({ page }) => {
  16 |         await commonSteps(page, "lohi");
  17 |     });
  18 |     test('TC_06: Verify price sorting function high to low', async ({ page }) => {
  19 |         await commonSteps(page, "hilo");
  20 |     });
  21 | 
  22 |     async function commonSteps(page, value){
  23 |         const login = new loginPage(page);
  24 |         await login.navigate();
  25 |         await login.loginWithCorrectCredentials("standard_user", "secret_sauce");
  26 |         await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  27 |         
  28 |         const pro = new TotalProduct(page, page.url().toString()); //creating object of total product class and passing page object and url to constructor
  29 |         const products = pro.totalProducts; //storing the locator of total products in a variable to use it in loop to get the product name and price
  30 |         
  31 |         let productName = "";  //To store the product name
  32 |         let copyProductName = []; //To copy and store the product name to compare with the sorted product name
  33 |         let price = ""; //To store the product price
  34 |         let copyPrice = []; //To copy and store the product price to compare with the sorted product price
  35 | 
  36 |         // To get the product name and price and store it in an array
  37 |         
  38 |         for(let i=0; i< await products.count(); i++){
  39 |             productName = products.nth(i).locator(".inventory_item_name");
  40 |             copyProductName.push(await productName.textContent());
  41 |             const productPrice = products.nth(i).locator(".inventory_item_price");
  42 |             const cp = await productPrice.textContent();
  43 |             const pf=parseFloat(cp.replace("$",""));
  44 |             copyPrice.push(pf);
  45 |         }
  46 |         const filterLocator = await page.locator(".product_sort_container");
  47 |         await filterLocator.selectOption(value);
  48 |         isSortedCheck(filterLocator,copyProductName,copyPrice);
  49 |     }
  50 |     async function isSortedCheck(arr, copyProductName, copyPrice) {
> 51 |         await arr.waitFor(10000); //waiting for the filter to be applied and products to be sorted       
     |                   ^ Error: locator.waitFor: Test ended.
  52 |         const value = await arr.inputValue();
  53 |         if(value === "az"){
  54 |             // To check if the products are sorted in ascending order
  55 |             console.log("Products are sorted in ascending order");
  56 |             const actual = copyProductName.toSorted();
  57 |             expect(copyProductName).toEqual(actual);
  58 | 
  59 |         }
  60 |         else if(value === "za"){
  61 |             // To check if the products are sorted in descending order
  62 |             console.log("Products are sorted in descending order");
  63 |             const actual = copyProductName.reverse();
  64 |             expect(copyProductName).toEqual(actual);
  65 |         }
  66 |         else if(value === "lohi"){
  67 |             // To check if the products are sorted in price low to high
  68 |             console.log("Products are sorted in price low to high");
  69 |             const actual = copyPrice.sort((a,b) => a-b);
  70 |             expect(copyPrice).toEqual(actual);
  71 |         }
  72 |         else if(value === "hilo"){
  73 |             // To check if the products are sorted in price high to low
  74 |             console.log("Products are sorted in price high to low");
  75 |             const actual = copyPrice.sort((a,b) => b-a);
  76 |             expect(copyPrice).toEqual(actual);
  77 |         }
  78 |     }
  79 | });
  80 | 
  81 | 
  82 | 
```
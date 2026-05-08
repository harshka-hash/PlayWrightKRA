# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductFilter.spec.js >> Product Filter Functionality >> TC_06: Verify price sorting function high to low
- Location: tests/ProductFilter.spec.js:18:5

# Error details

```
TypeError: filterLocator.tobeVisible is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - generic [ref=e17]:
                - button [ref=e18] [cursor=pointer]: Close Menu
                - img [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Price (high to low)
          - combobox [ref=e29]:
            - option "Name (A to Z)"
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)" [selected]
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Fleece Jacket" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - link "Sauce Labs Fleece Jacket" [ref=e40] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e41]: Sauce Labs Fleece Jacket
            - generic [ref=e42]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e43]:
            - generic [ref=e44]: $49.99
            - button "Add to cart" [ref=e45] [cursor=pointer]
      - generic [ref=e46]:
        - link "Sauce Labs Backpack" [ref=e48] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - link "Sauce Labs Backpack" [ref=e52] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e53]: Sauce Labs Backpack
            - generic [ref=e54]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e55]:
            - generic [ref=e56]: $29.99
            - button "Add to cart" [ref=e57] [cursor=pointer]
      - generic [ref=e58]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e60] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e64] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e65]: Sauce Labs Bolt T-Shirt
            - generic [ref=e66]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e67]:
            - generic [ref=e68]: $15.99
            - button "Add to cart" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e72] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e76] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e77]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e78]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e79]:
            - generic [ref=e80]: $15.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - generic [ref=e82]:
        - link "Sauce Labs Bike Light" [ref=e84] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e85]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - link "Sauce Labs Bike Light" [ref=e88] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e89]: Sauce Labs Bike Light
            - generic [ref=e90]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e91]:
            - generic [ref=e92]: $9.99
            - button "Add to cart" [ref=e93] [cursor=pointer]
      - generic [ref=e94]:
        - link "Sauce Labs Onesie" [ref=e96] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Sauce Labs Onesie" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: Sauce Labs Onesie
            - generic [ref=e102]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e103]:
            - generic [ref=e104]: $7.99
            - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "Twitter" [ref=e109] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 48 |         filterLocator.tobeVisible().waitFor(10000);
     |                       ^ TypeError: filterLocator.tobeVisible is not a function
  49 |         await filterLocator.waitFor(10000); //waiting for the filter to be applied and products to be sorted
  50 |         isSortedCheck(filterLocator,copyProductName,copyPrice);
  51 |     }
  52 |     async function isSortedCheck(arr, copyProductName, copyPrice) {
  53 |         const value = await arr.inputValue();
  54 |         if(value === "az"){
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
const {expect,test} = require("@playwright/test");

class TotalProduct{
    constructor(page,url){
        this.page = page;
        this.url = url;
        this.totalProducts = page.locator(".inventory_item");
        
    }
}
module.exports = {TotalProduct};
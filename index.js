// const {Builder} = require('selenium-webdriver');
// let driver = new Builder().forBrowser('chrome').build();
const{Builder, By, Key, util } = require("selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    //firefox ya da chrome.
    await driver.get("https://www.google.com.tr/");
    await driver.findElement(By.name("q")).sendKeys("turkiye",Key.RETURN);
}
example();
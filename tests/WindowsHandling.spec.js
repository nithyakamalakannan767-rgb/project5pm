import {test, expect} from '@playwright/test';
test('WindowsHandling', async ({browser}) => {
const Context = await browser.newContext()
const page = await Context.newPage()
await page.goto('https://www.amazon.in')
await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
await page.locator('//input[@id="nav-search-submit-button"]').click()
await page.waitForTimeout(3000)

const [newPage] = await Promise.all([
Context.waitForEvent("page"),
page.click('(//h2[contains(@aria-label,"iPhone 17 Pro 512 GB")])[1]')  
])

await newPage.waitForLoadState()
const title = await newPage.title()
console.log(title)
})
import { test, expect } from '@playwright/test'
test('Dropdown', async ({page}) => {
    await page.goto('https://letcode.in/dropdowns')
    const fruits = await page.locator("//select[@id='fruits']")
    await fruits.selectOption({label: "Apple"})
    const single = await fruits.locator('option:checked').textContent()
    console.log(single)

    const supermans = await page.locator("//select[@id='superheros']")
    await supermans.selectOption([{index: 5 }, {label: "Batman" }, { value: "aq }"}])
    const mans = await supermans.locator('option:checked').allTextContents()
    console.log(mans)
})
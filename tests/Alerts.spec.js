import {test, expect} from "@playwright/test"
test('Alert Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.once('dialog', async (dialog) => {
        console.log("Simple Alert:",dialog.message())
        await dialog.accept()
        
    })
    await page.locator('//button[@class="btn btn-danger"]').click()
    
    await page.locator('(//a[@class="analystic"])[2]').click()
    
    
    await page.once('dialog', async (dialog) => {
        console.log("Confirmation alert:", dialog.message())
        await dialog.dismiss()
    
    })
    
    await page.locator('//button [@class="btn btn-primary"]').click()
    
    await page.locator('(//a[@class="analystic"])[3]').click()
    
    await page.once('dialog', async (dialog) => {
        console.log("prompt Alert:" , dialog.message())
        await dialog.accept('Hello')
    })
    
    await page.locator('//button[@class="btn btn-info"]').click()
});


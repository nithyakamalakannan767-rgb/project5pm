import { test, expect } from '@playwright/test'

test('WebTable', async ({ page }) => {
  await page.goto('https://qavbox.github.io/demo/webtable/')
  await page.waitForSelector('#table02')
  const TableData = await page.locator('//table[@id="table02"]//tbody//tr//td').allTextContents()
  console.log(TableData)
  expect(TableData).toContain('Garrett Winters')
//   const RowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
//   console.log(RowData)
//   const ColumnData = await page.locator('//table[@id="table02"]//tbody//tr//td[2]').allTextContents()
//   console.log(ColumnData)
//   const date = await page.locator('//table[@id="table02"]//tbody//tr[2]//td[2]').textContent()
//   console.log(date)
})
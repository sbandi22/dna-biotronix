import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1440, height: 900 })

// Dismiss any Next.js error overlay before navigating
page.on('dialog', d => d.dismiss().catch(() => {}))

await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 })

// Wait for React to hydrate — give it ample time
await page.waitForTimeout(5000)

// Dismiss the Next.js error overlay if present (press Escape)
await page.keyboard.press('Escape')
await page.waitForTimeout(500)

// Also try clicking the close button on the error overlay
const closeBtn = page.locator('button[aria-label="Close"], [data-nextjs-dialog-close]').first()
if (await closeBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
  await closeBtn.click()
  await page.waitForTimeout(500)
}

await page.screenshot({ path: 'hero.png', fullPage: false })
console.log('Hero screenshot saved')

await page.evaluate(() => window.scrollTo({ top: window.innerHeight, behavior: 'instant' }))
await page.waitForTimeout(2000)
await page.screenshot({ path: 'technology.png', fullPage: false })
console.log('Technology screenshot saved')

await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 2.5, behavior: 'instant' }))
await page.waitForTimeout(2000)
await page.screenshot({ path: 'architecture.png', fullPage: false })
console.log('Architecture screenshot saved')

await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 4, behavior: 'instant' }))
await page.waitForTimeout(2000)
await page.screenshot({ path: 'detection.png', fullPage: false })
console.log('Detection screenshot saved')

await browser.close()

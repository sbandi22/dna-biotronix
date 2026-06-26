import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1440, height: 900 })

const errors = []
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
page.on('pageerror', err => errors.push('PAGE ERROR: ' + err.message))

await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 })
await page.waitForTimeout(5000)

console.log('=== ERRORS ===')
errors.forEach(e => console.log(e))
console.log('=== HTML snippet ===')
const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 500))
console.log(bodyText)

await browser.close()

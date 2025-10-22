
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    # Setting a larger viewport for a better screenshot
    page.set_viewport_size({"width": 1280, "height": 800})
    page.goto("http://localhost:8000")

    # Navigate to the map screen where the site cards are displayed
    page.click("#startBtn")

    # Wait for the cards to be rendered
    page.wait_for_selector(".number-card")

    # Take a screenshot of the map screen
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)

import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    """
    Navigates to the site exploration page and captures a screenshot of the new UI
    with the chat sidebar.
    """
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the local index.html file
        file_path = "file://" + os.path.abspath("index.html")
        page.goto(file_path)

        # Click the "Start Adventure" button
        start_button = page.get_by_role("button", name="Start Adventure")
        expect(start_button).to_be_visible()
        start_button.click()

        # Click the first site (Taj Mahal)
        # The card contains the text "1" and "Taj Mahal"
        site_card = page.get_by_text("1Taj Mahal")
        expect(site_card).to_be_visible()
        site_card.click()

        # Wait for the chat sidebar to be visible
        chat_sidebar = page.locator("#chatSidebar")
        expect(chat_sidebar).to_be_visible()

        # Ensure the title of the site is also visible
        expect(page.get_by_role("heading", name="Taj Mahal")).to_be_visible()

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()

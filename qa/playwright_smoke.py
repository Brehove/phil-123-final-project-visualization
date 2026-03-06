from pathlib import Path

from playwright.sync_api import sync_playwright


def main() -> None:
    page_url = Path("index.html").resolve().as_uri()
    output_dir = Path("qa-output")
    output_dir.mkdir(exist_ok=True)

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 1400})
        page.goto(page_url, wait_until="load")
        page.wait_for_selector(".module-button")
        page.wait_for_selector(".example-card")

        module_count = page.locator(".module-button").count()
        if module_count != 9:
            raise RuntimeError(f"Expected 9 module buttons, received {module_count}")

        example_count = page.locator(".example-card").count()
        if example_count != 3:
            raise RuntimeError(f"Expected 3 pathway example cards, received {example_count}")

        page.locator(".example-card").nth(1).click()
        page.locator("[data-pathway-button='public']").click()
        page.locator(".example-card").nth(2).click()
        page.locator(".milestone-card").nth(3).click()
        page.locator(".module-button").nth(6).click()

        detail_title = page.locator("#example-detail-title").inner_text()
        if "Humans in the Loop" not in detail_title:
            raise RuntimeError(f"Unexpected pathway example detail title: {detail_title}")

        page.screenshot(path=str(output_dir / "playwright-home.png"), full_page=True)
        print(page.title())
        browser.close()


if __name__ == "__main__":
    main()

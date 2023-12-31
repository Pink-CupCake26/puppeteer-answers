import puppeteer from 'puppeteer';

const authenticate = async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-gpu",
            '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    const username = "user123"
    const password = "helloworld"

    // Navigate the page to a URL
    await page.goto('https://github.com/login');
    await page.type("#login_field", username)
    await page.type("#password", password)
    await page.click("[type=submit]") // Click on submit button

    const ss = await page.screenshot({ path: "screenshot.png" }); // Take screenshot of the page





    await page.close();



    await browser.close();
};

authenticate()
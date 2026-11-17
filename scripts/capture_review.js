const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");
const os = require("os");

const artifactDir = "C:\\Users\\sudev\\.gemini\\antigravity\\brain\\4d9ff1a5-82b2-4f26-92c5-306965894d4e";
const chromePath = path.join(
  process.env.LOCALAPPDATA,
  "Google\\Chrome\\Application\\chrome.exe"
);

async function run() {
  console.log("Launching headless Chrome for comprehensive visual verification...");
  const tempProfile = path.join(os.tmpdir(), "chrome-review-profile-" + Date.now());

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: "new",
    userDataDir: tempProfile,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--window-size=1440,900",
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.log("BROWSER ERROR:", msg.text());
    }
  });

  console.log("1. Capturing Initial Intro...");
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(artifactDir, "orre_01_intro.png") });

  console.log("2. Waiting for intro sequence to complete and capturing Hero...");
  await new Promise((r) => setTimeout(r, 3200));
  await page.screenshot({ path: path.join(artifactDir, "orre_02_hero.png") });

  console.log("3. Capturing Pinned Philosophy Section (Act I: FORM)...");
  await page.evaluate(() => {
    const el = document.getElementById("philosophy");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(artifactDir, "orre_03_philosophy_pinned.png") });

  console.log("4. Scrolling deeper into Pinned Philosophy (Act II: FEELING)...");
  await page.evaluate(() => {
    window.scrollBy({ top: 900, behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(artifactDir, "orre_04_philosophy_feeling.png") });

  console.log("5. Capturing Horizontal Collection Runway...");
  await page.evaluate(() => {
    const el = document.getElementById("collections");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(artifactDir, "orre_05_horizontal_collections.png") });

  console.log("6. Scrolling through horizontal track to middle collection...");
  await page.evaluate(() => {
    window.scrollBy({ top: 800, behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(artifactDir, "orre_06_horizontal_slide.png") });

  console.log("7. Capturing Campaign Section (The World of ORRÉ)...");
  await page.evaluate(() => {
    const el = document.getElementById("campaign");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(artifactDir, "orre_07_campaign_world.png") });

  console.log("8. Capturing Craft & Details Section...");
  await page.evaluate(() => {
    const el = document.getElementById("craft");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(artifactDir, "orre_08_craft.png") });

  console.log("9. Capturing Epilogue Footer...");
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(artifactDir, "orre_09_footer.png") });

  console.log("10. Testing Mobile Viewport (iPhone 14)...");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 3200));
  await page.screenshot({ path: path.join(artifactDir, "orre_10_mobile_hero.png") });

  console.log("11. Capturing Mobile Collection Runway...");
  await page.evaluate(() => {
    const el = document.getElementById("collections");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(artifactDir, "orre_11_mobile_collections.png") });

  await browser.close();
  try {
    fs.rmSync(tempProfile, { recursive: true, force: true });
  } catch (e) {}

  console.log("Comprehensive visual verification completed!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

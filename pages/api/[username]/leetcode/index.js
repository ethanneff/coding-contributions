import cheerio from "cheerio";
import { format, parse } from "date-fns";

let chrome = { args: [] };
let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

const LeetCode = async (req, res) => {
  try {
    const username = req.url.split("/")[2];
    const browser = await puppeteer.launch({
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto(`https://leetcode.com/${username}/`);
    await page.waitForSelector(".ant-card");
    const html = await page.content();
    const $ = cheerio.load(html);
    const activity = {};
    $("rect[data-tip]").each((i, e) => {
      const tip = $(e).attr("data-tip").split(" ");
      const tipSubmission = Number(tip[0]);
      const tipDate = tip.splice(3).join(" ");
      const parseDate = parse(tipDate, "MMM do yyyy", new Date());
      const formattedDate = format(parseDate, "yyyy-MM-dd");
      activity[formattedDate] = tipSubmission;
    });
    res.status(200).json(activity);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export default LeetCode;

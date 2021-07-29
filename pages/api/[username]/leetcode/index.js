import cheerio from "cheerio";
import puppeteer from "puppeteer";
import { format, parse } from "date-fns";

const LeetCode = async (req, res) => {
  try {
    const username = req.url.split("/")[2];
    const browser = await puppeteer.launch();
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

import cheerio from "cheerio";
import axios from "axios";

const Github = async (req, res) => {
  try {
    const { username = "ethanneff" } = req.query;
    const url = `https://github.com/${username}`;
    const github = await axios.get(url, { headers: { Accept: "*/*" } });
    const $ = cheerio.load(github.data);
    const activity = {};
    $(".ContributionCalendar-day").each((_, element) => {
      const item = $(element);
      const date = item.attr("data-date");
      const count = Number(item.attr("data-count"));
      if (date in activity) {
        activity[date] += count;
      } else if (date) {
        activity[date] = count;
      }
    });
    res.status(200).json(activity);
  } catch (e) {
    res.status(500).json(e);
  }
};

export default Github;

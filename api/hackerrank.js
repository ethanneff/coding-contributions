import axios from "axios";

const HackerRank = async (req, res) => {
  try {
    const { username = "ethanneff" } = req.query;
    const config = {
      method: "get",
      url: `https://www.hackerrank.com/rest/hackers/${username}/submission_histories`,
      headers: { "User-Agent": "PostmanRuntime" },
    };
    const { data } = await axios(config);
    const activity = Object.keys(data).reduce((total, item) => {
      total[item] = Number(data[item]);
      return total;
    }, {});
    res.status(200).json(activity);
  } catch (e) {
    res.status(500).json(e);
  }
};

export default HackerRank;

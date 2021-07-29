import axios from "axios";

export default async (req, res) => {
  const username = req.url.split("/")[2];
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
};

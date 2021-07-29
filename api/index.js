const API = (_, res) => {
  try {
    const env = process.env.NODE_ENV;
    const dev = env === "development";
    const baseUrl = dev
      ? "http://localhost:3333/"
      : "https://coding-contributions.vercel.app/";
    const username = "ethanneff";
    res.status(400).json({
      message: "sample api access",
      examples: [
        `${baseUrl}api/github?username=${username}`,
        `${baseUrl}api/leetcode?username=${username}`,
        `${baseUrl}api/hackerrank?username=${username}`,
      ],
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export default API;

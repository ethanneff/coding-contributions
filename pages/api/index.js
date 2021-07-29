const API = (_, res) => {
  const env = process.env.NODE_ENV;
  const dev = env === "development";
  const baseUrl = dev
    ? "http://localhost:3333/"
    : "https://coding-contributions.vercel.app/";
  const username = "ethanneff";
  res.status(400).json({
    message: "sample api access",
    examples: [
      `${baseUrl}api/${username}/github`,
      `${baseUrl}api/${username}/leetcode`,
      `${baseUrl}api/${username}/hackerrank`,
    ],
  });
};

export default API;

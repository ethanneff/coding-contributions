export default (_, res) => {
  const env = process.env.NODE_ENV;
  const dev = env === "development";
  const baseUrl = dev
    ? "http://localhost:3333/"
    : "https://github-contributions-json-api.now.sh/";
  const username = "ethanneff";
  res.status(400).json({
    error: "invalid api access",
    examples: [
      `${baseUrl}api/${username}/github`,
      `${baseUrl}api/${username}/leetcode`,
      `${baseUrl}api/${username}/hackerrank`,
    ],
  });
};

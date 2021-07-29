import Link from "next/link";

const Home = () => {
  const username = "ethanneff";
  return (
    <div>
      <h1>Coding Contributions</h1>
      <Link href={`/api/github?username=${username}`}>
        <a>Github</a>
      </Link>
      <br />
      <Link href={`/api/leetcode?username=${username}`}>
        <a>LeetCode</a>
      </Link>
      <br />
      <Link href={`/api/hackerrank?username=${username}`}>
        <a>HackerRank</a>
      </Link>
    </div>
  );
};

export default Home;

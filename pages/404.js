import Link from "next/link";

export default () => (
  <div>
    <h1>404 | Page Not Found</h1>
    <Link href="/api">
      <a>View API</a>
    </Link>
  </div>
);

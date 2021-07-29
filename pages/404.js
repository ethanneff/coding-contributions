import Link from "next/link";

const NotFound = () => (
  <div>
    <h1>404 | Page Not Found</h1>
    <Link href="/api">
      <a>View API</a>
    </Link>
  </div>
);

export default NotFound;

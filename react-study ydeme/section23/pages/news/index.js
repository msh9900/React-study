import { Fragment } from "react";
import Link from "next/link";
export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <Link href="/news/nextjs">
          <li>NextJs</li>
        </Link>

        <li>Something</li>
      </ul>
    </Fragment>
  );
}

import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav>
      <h2 className="sr-only">글로벌네비게이션</h2>
      <ul className="flex gap-4">
        <li>
          <Link href="#">about</Link>
        </li>
        <li>
          <Link href="#">skills</Link>
        </li>
        <li>
          <Link href="#">projects</Link>
        </li>
        <li>
          <Link href="#">archiving</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

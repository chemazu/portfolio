import React from "react";
import "../styles/components/navbar.scss";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav>
        <h2>Chemazu</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#project">Projects</Link>
          </li>
          <li>
            <Link href="/#contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

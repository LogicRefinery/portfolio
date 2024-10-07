import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex justify-between">
      <h1>taehyung.</h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;

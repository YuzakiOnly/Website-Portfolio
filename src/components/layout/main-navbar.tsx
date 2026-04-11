"use client";

import FloatingButtons from "./navbar/floating-button";
import NavLeft from "./navbar/nav-left";
import NavTop from "./navbar/nav-top";

export default function Navbar() {
  return (
    <>
      <NavTop />
      <NavLeft />
      <FloatingButtons />
    </>
  );
}

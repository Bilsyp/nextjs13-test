"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdVideoLibrary } from "react-icons/md";
import utils from "../utils/utils";
function page() {
  // const [name, setName] = useState("Navbar");
  return (
    <nav className=" px-10 py-3 bg-slate-800 text-white flex items-center justify-between">
      <div className="flex gap-5">
        <h1 className="text-2xl text-sky-500 font-bold">jjj</h1>
        <h1 className="text-3xl text-red-700">
          <MdVideoLibrary />
        </h1>
      </div>
      <ul>
        <li>
          <Link className={utils.text} href="/components/main">
            Home
          </Link>
        </li>
        <li>
          <Link className={utils.text} href="/components/about">
            About
          </Link>
        </li>
        <li>
          <Link className={utils.text} href="/components/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default page;

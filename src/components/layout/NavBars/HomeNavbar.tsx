"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navlinks = [
  { name: "Projects", link: "/projects" },
  { name: "Tutorials", link: "/tutorials" },
  { name: "About Us", link: "/company" },
  { name: "Philosophy", link: "/philosophy" },
];

const HomeNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };
  const navRenderLinks = Navlinks.map((itm) => (
    <li key={itm.link} className="my-2">
      <Link className="text-gray-700 hover:text-blue-400" href={itm.link}>
        {itm.name}
      </Link>
    </li>
  ));

  return (
    <>
      <div className="sticky top-0 shadow bg-white  z-50 bg-gradient-to-r from-blue-200">
        <div className="container mx-auto px-4 lg:px-0">
          <nav className="flex  min-h-16 flex-wrap items-center justify-between py-2   ">
            <div className="flex gap-2 items-center">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                width={20}
                height={20}
              />
              <h4 className="text-lg text-pink-700">
                <Link href={"/"}>Suluhi</Link>
              </h4>
            </div>
            <div className="hidden md:flex justify-between gap-10">
              <ul className="flex gap-3 text-sm">{navRenderLinks}</ul>
              <div className="flex gap-3 text-sm">{/* <FaSun /> */}</div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                {open ? <FaXmark fontSize={24} /> : <FaBars fontSize={18} />}
              </button>
            </div>

            <div
              className={`md:hidden absolute inset-x-0 top-14 bg-white bg-gradient-to-r from-blue-200 shadow transition ease-in-out duration-500 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="container mx-auto px-4 md:px-0">
                <ul className="text-sm pb-2">{navRenderLinks}</ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;

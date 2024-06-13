import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full shadow-xl h-20 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div>
          <ul>
            <Link href="/">
              <li className="ml-10 font-extrabold font-mono uppercase text-sm border-b">
                Eric Lin
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex space-x-10">
            <Link href="/">
              <li className="uppercase text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="uppercase text-sm hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="uppercase text-sm hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="uppercase text-sm hover:border-b">Projects</li>
            </Link>

            <Link
              href="/2024_LIN_Eric_Resume.pdf"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <li className="uppercase text-sm hover:border-b">Resume</li>
            </Link>
            <Link href="/#contact">
              <li className="uppercase text-sm hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

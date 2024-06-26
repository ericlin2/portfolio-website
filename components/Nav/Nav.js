import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
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
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 text-black"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-end">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={10} />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link
                href="/2024_LIN_Eric_Resume.pdf"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>{" "}
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-5 w-full sm:w-[80%]">
                <a
                  href="https://github.com/ericlin2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ericlincmu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>

                <Link
                  href="https://leetcode.com/ericlin45209/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <SiLeetcode />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div
                    onClick={() => {
                      setNav(!nav);
                      window.location.href = "mailto:ericlin45209@gmail.com";
                    }}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

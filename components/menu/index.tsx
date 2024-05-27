"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <div className="static lg:relative">
      <div
        className=" static lg:absolute left-0 right-0 flex flex-col justify-between items-center md:flex-row 
      bg-primary p-4 mt-8 rounded-3xl w-4/5 mx-auto z-50"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/" className="text-4xl text-white">
            Relogiuns
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex text-3xl text-white md:hidden"
          >
            {isOpen ? close : menuIcon}
          </button>
        </div>
        <nav>
          <ul
            className={`${
              isOpen ? "flex flex-col" : "hidden"
            } md:space-x-4 md:flex md:flex-row`}
          >
            <Link href="#" className="text-lg text-white">
              Coleções
            </Link>
            <Link href="#" className="text-lg text-white">
              Sobre
            </Link>
            <Link href="#" className="text-lg text-white">
              Contato
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

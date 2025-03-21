"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-toby-black py-3 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-archivo text-xl">
          TOBY TURTLE
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-white hover:text-toby-green transition-colors"
          >
            HOME
          </Link>
          <div className="relative group">
            <button className="text-white hover:text-toby-green transition-colors flex items-center gap-1">
              MUSIC
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-toby-black py-2 z-10">
              <Link
                href="https://soundcloud.com/toby-the-turtle/toby-vibez"
                target="_blank"
                className="block px-4 py-2 text-white hover:text-toby-green transition-colors whitespace-nowrap"
              >
                Shell Shocked
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
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
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
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
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-toby-black mt-2 p-4">
          <Link
            href="/"
            className="block py-2 text-white hover:text-toby-green transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <details className="text-white">
            <summary className="py-2 cursor-pointer hover:text-toby-green transition-colors">
              MUSIC
            </summary>
            <div className="pl-4 mt-1">
              <Link
                href="https://soundcloud.com/toby-the-turtle/toby-vibez"
                target="_blank"
                className="block py-2 text-white hover:text-toby-green transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Shell Shocked
              </Link>
            </div>
          </details>
        </div>
      )}
    </header>
  );
}

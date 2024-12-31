"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ children }) {
  const route = usePathname();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className={`hover:text-accent-400 transition-colors ${
              route === "/cabins" ? "underline" : ""
            }`}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:text-accent-400 transition-colors ${
              route === "/about" ? "underline" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className={`hover:text-accent-400 transition-colors ${
              route === "/account" ? "underline" : ""
            } flex items-center gap-4`}
          >
            {children}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

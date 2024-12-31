"use client";
import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
import "@/app/_styles/globals.css";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body
        className={`${josefinFont.className} bg-primary-950 text-primary-100 min-h-screen antialiased`}
      >
        <Header />
        <h3 className="text-3xl font-semibold">Something went wrong!</h3>
        <p className="text-lg">{error.message}</p>
        <button
          className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
          onClick={reset}
        >
          Try again
        </button>
      </body>
    </html>
  );
}

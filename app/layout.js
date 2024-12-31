import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
import "@/app/_styles/globals.css";
import { ReservationProvider } from "./_context/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s - The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "Luxury cabins in the woods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinFont.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-8xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

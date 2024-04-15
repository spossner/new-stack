import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "First T3 new stack app",
  description: "Let's try the latest t3 stack with RSC, drizzle etc",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="border-b bg-gray-800 p-4 text-white">
      <ul className="flex justify-between gap-4">
        <div className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </div>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`font-sans ${inter.variable}`}>
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "~/styles/globals.css";
import TopNav from "./_components/top-navigation/TopNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "First T3 new stack app",
  description: "Let's try the latest t3 stack with RSC, drizzle etc",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="de">
        <body className={`font-sans ${inter.variable}`}>
          <TopNav />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

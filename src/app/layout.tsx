import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ButtonLink from "../../componant/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test frontend",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="flex justify-center">
          <div className="mt-2 grid grid-cols-1 sm:grid sm:grid-cols-1 md:flex md:justify-end lg:justify-end xl:justify-end gap-4">
            <ButtonLink />
          </div>
        </div>
        <div className="flex-1 ml-4 ">{children}</div>
      </body>
    </html>
  );
}

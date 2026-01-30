import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_10 } from "next/font/google";
import "./globals.css";

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "My biussnes card",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jersey10.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HSN DESIGN STUDIO",
  description: "Creative minds shaping brands through impactful design. We specialize in branding, UI/UX, digital media, and visual storytelling — turning ideas into powerful, modern designs that leave a lasting impression.",
  icons: {
    icon: '/logos/favicon.png',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="ico/png" href="/logos/favicon.ico" />
        </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
        <Background />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}

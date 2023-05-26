import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar, Footer } from "@/components";
import ContextProvider from "../context";


const font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  // variable: '--font-outfit', // optional for tailwind
});

export const metadata = {
  title: "E Commerce by Shehzad",
  description: "E Commerce by Shehzad Hackathon Project Panaverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-4xl min-h-screen grid grid-rows-[auto,1fr,auto] mx-auto" style={font.style}>
        <Navbar />
        <ContextProvider>
        {children}
        </ContextProvider>
        <Footer />
      </body>
    </html>
  );
}

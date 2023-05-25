import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar, Footer } from "@/components";

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
      <body style={font.style}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

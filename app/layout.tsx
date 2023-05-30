import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar, Footer } from "@/components";
import ContextProvider from "@/context";
import  { Toaster } from 'react-hot-toast';

const font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "E Commerce by Shehzad",
  description: "E Commerce by Shehzad Hackathon Project Panaverse",
  icons: {
    icon: { url: "/assets/logoipsum.svg", type: "image/png" }
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="grid min-h-screen grid-rows-[auto,1fr,auto]"
        // max-w-5xl px-4 md:px-8 mx-auto
        style={font.style}
      >
        <Navbar />
        <ContextProvider>{children}</ContextProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
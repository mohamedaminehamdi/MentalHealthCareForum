import NavBar from "@/Shared/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zig Forum",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

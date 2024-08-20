import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/ui/home.module.css"
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/app/components/Navbar"
export const metadata = {
  title: "MOMENTUM",
  description: "Club momentum ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${styles.main_background} ${inter.className}`}>
        <Navbar/>
        {children}</body>
    </html>
  );
}

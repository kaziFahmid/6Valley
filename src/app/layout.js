import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { PrimeReactProvider } from 'primereact/api';
const mulish = Mulish({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "6Valley",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
      <PrimeReactProvider>
        <Header />
        <div>{children}</div>
        <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}

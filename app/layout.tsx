"use client";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/ui/home/navbar/Navbar";
import Footer from "@/components/ui/home/footer/Footer";

type LType = {
  children: any;
};

const RootLayout: React.FC<LType> = ({ children }) => {
  const [lang, setLang] = useState("fa");
  return (
    <html lang={lang}>
      <body>
        <Navbar />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

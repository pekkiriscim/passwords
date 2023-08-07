"use client";

import { useEffect } from "react";

import "@/styles/globals.css";

import { Inter } from "next/font/google";

import i18n from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const userLanguage = window.navigator.language || "en";

    i18n.changeLanguage(userLanguage);
  }, []);
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

"use client";

import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { RecordProvider } from "@/components/providers/RecordProvider";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((prev) => !prev);
  };
  return (
    <html lang="en" className={`${dark ? "dark" : undefined} `}>
      <body className={inter.className}>
        <AuthProvider value={{ dark, setDark, toggleDark }}>
          <RecordProvider value={{ dark, setDark, toggleDark }}>
            {children}
          </RecordProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

export const useAuth = () => useContext(AuthContext);

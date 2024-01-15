"use client";

import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { createContext, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { RecordProvider } from "@/components/recordPro/RecordProvider";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <RecordProvider>{children}</RecordProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

export const useAuth = () => useContext(AuthContext);

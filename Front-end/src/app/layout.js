"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [openDraw, setOpenDraw] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const addCat = () => {
    setIsCategory((prev) => !prev);
  };

  const getData = () => {
    setOpenDraw((prev) => !prev);
  };

  const setData = () => {
    setIsOpen((p) => !p);
  };

  const [isLogged, setIsLogged] = useState(false);

  const signIn = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3001/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "appliciation/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status !== 200) {
        throw new Error("Invalid cred");
      }

      const data = await res.json();

      const { token } = data;

      console.log(token);
    } catch (err) {
      console.log(err, "FFF");
    }
    // setIsLogged(true)
    // localStorage.setItem("token", "abc")
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3001")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });

    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider
          value={{
            isLogged,
            setIsLogged,
            setOpenDraw,
            openDraw,
            getData,
            isOpen,
            setIsOpen,
            setData,
            isCategory,
            setIsCategory,
            addCat,
          }}
        >
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

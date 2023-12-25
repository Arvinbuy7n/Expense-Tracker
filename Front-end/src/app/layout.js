"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [openDraw, setOpenDraw] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isAddition, setIsAddition] = useState(false);

  const setAddition = () => {
    setIsAddition((a) => !a);
  };

  const getSign = () => {
    setIsSign((p) => !p);
  };

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

  const Login = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/login",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: "token",
          },
        }
      );

      const { token } = data;

      console.log(token);
    } catch (err) {
      console.log(err, "FFF");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    // fetch("http://localhost:3001")
    //   .then((res) => res.text())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });

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
            isSign,
            setIsSign,
            getSign,
            isAddition,
            setAddition,
            setIsAddition,
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

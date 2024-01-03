"use client";

import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/common/axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [openDraw, setOpenDraw] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isAddition, setIsAddition] = useState(false);

  //front-end new sector

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

  //connection between the "back" and "front" /////////////////////////

  const [isLogged, setIsLogged] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);

      router.push("/main");
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email, password, name) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/sign", {
        email,
        password,
        name,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);

      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");

    setIsLogged(false);

    router.push("/login");
  };

  const records = async (amount, category, type) => {
    setIsLoading(true);

    try {
      const { data } = await api.post(
        "/records",
        {
          amount,
          category,
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setIsLogged(true);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = async (icon, cate, color) => {
    setIsLoading(true);

    try {
      const { data } = api.post(
        "/category",
        {
          icon,
          cate,
          color,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true);
    }

    setIsReady(true);
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
            login,
            signUp,
            isLoading,
            signOut,
            records,
            categories,
          }}
        >
          {isReady && children}
        </AuthContext.Provider>

        <ToastContainer />
      </body>
    </html>
  );
}

export const useAuth = () => useContext(AuthContext);

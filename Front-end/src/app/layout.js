"use client";

import { Inter } from "next/font/google";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/common/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/sign-up", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/main");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");

    setIsLogged(false);

    router.push("/login");
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
          }}
        >
          {isReady && children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

export const useAuth = () => useContext(AuthContext);

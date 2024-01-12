"use client";

import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/common/axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { AuthProvider } from "@/components/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

// const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [openDraw, setOpenDraw] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isAddition, setIsAddition] = useState(false);
  const [category, setCategory] = useState("Find or choose category");
  const [filterCategory, setFilterCategory] = useState([]);

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

  const [categoryList, setCategoryList] = useState([]);
  const [recordList, setRecordList] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [recordColor, setRecordColor] = useState("#000000");
  const [recordIcon, setRecordIcon] = useState("FaHouse");
  const router = useRouter();

  const records = async (
    amount,
    category,
    type,
    date,
    payee,
    note,
    color,
    icon,
    time
  ) => {
    setIsLoading(true);

    try {
      const { data } = await api.post(
        "/records",
        {
          amount,
          category,
          type,
          date,
          payee,
          note,
          color,
          icon,
          time,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setIsLogged(true);
      setRefresh(refresh + 1);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getRecords = async () => {
    try {
      const { data } = await api.get("/records", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setRecordList(data);
    } catch (error) {
      console.log(error), "FFF";
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
      // setRefresh(refresh + 1);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      const { data } = await api.get("/category", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      // console.log("GetCategory", data);
      setCategoryList(data);
    } catch (err) {
      console.log(err), "FFF";
    }
  };

  useEffect(() => {
    getCategory();
    getRecords();
  }, [refresh]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthContext.Provider
          value={{
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
            records,
            categories,
            categoryList,
            setCategoryList,
            recordList,
            setCategoryList,
            category,
            setCategory,
            recordColor,
            setRecordColor,
            recordIcon,
            setRecordIcon,
            filterCategory,
            setFilterCategory,
            refresh,
            setRefresh,
          }}
        >
          
        </AuthContext.Provider> */}

        <AuthProvider>
          {children}    
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

// export const useAuth = () => useContext(AuthContext);

"use client";

import { api } from "@/common/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider";

export const RecordContext = createContext();

export const RecordProvider = (props) => {
  const [openDraw, setOpenDraw] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isAddition, setIsAddition] = useState(false);
  const [category, setCategory] = useState("Find or choose category");
  const [filterCategory, setFilterCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [recordList, setRecordList] = useState([]);
  const [refresh, setRefresh] = useState(1);
  const [recordColor, setRecordColor] = useState("#000000");
  const [recordIcon, setRecordIcon] = useState("FaHouse");
  const [isSign, setIsSign] = useState(false);
  const [_isLoading, setIsLoading] = useState(false);
  const [income, setIncome] = useState(0);
  const [radioCheck, setRadioCheck] = useState("");
  const { dark, setDark, toggleDark } = useAuth();

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

  //add record and category

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
    try {
      const { data } = await api.post(
        "https://expensetracker-a7q0.onrender.com/records",
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

      toast.success(data.message, {
        position: "top-center",
      });

      setRefresh(refresh + 1);
    } catch (error) {
      if (error?.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getRecords = async () => {
    try {
      const { data } = await api.get(
        "https://expensetracker-a7q0.onrender.com/records",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setRecordList(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const categories = async (icon, cate, color) => {
    setIsLoading(true);

    try {
      const { data } = api.post(
        "https://expensetracker-a7q0.onrender.com/category",
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

      toast.success(data.message, {
        position: "top-centers",
      });

      setRefresh(refresh + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      const { data } = await api.get(
        "https://expensetracker-a7q0.onrender.com/category",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setCategoryList(data);
    } catch (err) {
      console.log(err), "FFF";
    }
  };

  useEffect(() => {
    getRecords();
    getCategory();
  }, [refresh]);

  return (
    <RecordContext.Provider
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
        income,
        radioCheck,
        setIncome,
        setRadioCheck,
        dark,
        setDark,
        toggleDark,
      }}
    >
      {props?.children}
    </RecordContext.Provider>
  );
};

export const useRecord = () => useContext(RecordContext);

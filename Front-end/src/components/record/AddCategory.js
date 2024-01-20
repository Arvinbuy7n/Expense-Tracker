import { useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaAirFreshener } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaBatteryQuarter } from "react-icons/fa";
import { FaBluetooth } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaBomb } from "react-icons/fa";
import { FaBaseballBall } from "react-icons/fa";
import { FaPeace } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { useRecord } from "../recordPro/RecordProvider";

export const AddCategory = () => {
  const { setData, isCategory, addCat, categories, setIsOpen } = useRecord();
  const [isChoose, setIsChoose] = useState([
    <FaAlignRight key={1} size={16} className="text-black" />,
  ]);
  const [isColor, setIsColor] = useState("inherit");

  const icon = [
    <FaAddressBook size={20} key={1} color="black" />,
    <FaAddressCard size={20} key={1} />,
    <FaAirFreshener size={20} key={1} />,
    <FaAmazon size={20} key={1} />,
    <FaApple size={20} key={1} />,
    <FaLock size={20} key={1} />,
    <FaBrain size={20} key={1} />,
    <FaBatteryFull size={20} key={1} />,
    <FaBatteryQuarter size={20} key={1} />,
    <FaBluetooth size={20} key={1} />,
    <FaBusAlt size={20} key={1} />,
    <FaCamera size={20} key={1} />,
    <FaCalendarAlt size={20} key={1} />,
    <FaFacebook size={20} key={1} />,
    <FaFingerprint size={20} key={1} />,
    <FaBalanceScale size={20} key={1} />,
    <FaGithub size={20} key={1} />,
    <FaGlasses size={20} key={1} />,
    <FaGrinStars size={20} key={1} />,
    <FaBaseballBall size={20} key={1} />,
    <FaHeadphones size={20} key={1} />,
    <FaBomb size={20} key={1} />,
    <FaLaptopCode size={20} key={1} />,
    <FaPalette size={20} key={1} />,
    <FaPlaystation size={20} key={1} />,
    <FaPeace size={20} key={1} />,
    <FaPowerOff size={20} key={1} />,
    <FaPencilAlt size={20} key={1} />,
    <FaWrench size={20} key={1} />,
  ];

  const color = [
    "#0166FF",
    "#000000",
    "#41CC00",
    "#F9D100",
    "#FF7B01",
    "#AE01FF",
    "#FF0101",
  ];

  return (
    <div className="md:fixed md:top-0 md:bg-[#00000080]  w-screen h-screen">
      <div className="md:w-[520px] w-full h-fit bg-white absolute md:top-[35%] top-[20%] md:left-[35%] rounded-xl  dark:bg-[#1F2937]">
        <div className="flex justify-between px-6 py-5 border-b-2">
          <p className="md:text-[20px] text-[16px] font-semibold dark:text-white text-black">
            Add Category
          </p>
          <img src="x.png" className="w-6 h-6" onClick={setData}></img>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            categories(
              isChoose.type.name,
              event.target.categoryName.value,
              isColor
            );
            setIsOpen(false);
          }}
          className="w-full flex flex-col gap-6 py-7 px-3 "
        >
          <div className="flex gap-2 h-[30px] relative">
            <div className="w-[22%] rounded-lg bg-slate-100 flex gap-2 justify-between items-center p-5">
              <p style={{ color: isColor }} className="text-black">
                {isChoose}
              </p>
              <FaAngleDown size={14} onClick={addCat} className="text-black" />
              {isCategory ? (
                <div className="absolute left-0 w-fit h-fit bg-white p-7 mt-[400px] rounded-xl flex flex-col gap-6">
                  <div className="drop-shadow-md grid grid-cols-6 gap-x-6 gap-y-6 border-b-2 pb-8 text-black">
                    {icon.map((item, index) => {
                      return (
                        <div
                          onClick={() => {
                            setIsChoose(item);
                          }}
                          key={index}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="flex justify-between items-center gap-4"
                    onClick={addCat}
                  >
                    {color.map((item, index) => {
                      return (
                        <div
                          className="rounded-full w-6 h-6"
                          onClick={() => {
                            setIsColor(item);
                          }}
                          key={index}
                          style={{ backgroundColor: item }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            <input
              name="categoryName"
              className="w-[85%] rounded-lg bg-slate-100 p-5 text-black"
            />{" "}
          </div>
          <button
            className="bg-[#16A34A] py-2 rounded-xl text-white"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

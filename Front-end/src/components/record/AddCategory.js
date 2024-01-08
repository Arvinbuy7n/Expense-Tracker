import { useAuth } from "@/app/layout";
import { useState } from "react";

import { FaHouse } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
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
import { FaImage } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { FaBaseballBall } from "react-icons/fa";
import { FaPeace } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaSimCard } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

export const AddCategory = () => {
  const { setData, isCategory, addCat, categories, setIsOpen } = useAuth();
  const [isChoose, setIsChoose] = useState(<FaHouse size={20} />);
  const [isColor, setIsColor] = useState("inherit");

  const icon = [
    <FaHouse size={20} />,
    <FaAddressBook size={20} />,
    <FaAddressCard size={20} />,
    <FaAirFreshener size={20} />,
    <FaAmazon size={20} />,
    <FaApple size={20} />,
    <FaLock size={20} />,
    <FaMicrophone size={20} />,
    <FaBatteryFull size={20} />,
    <FaBatteryQuarter size={20} />,
    <FaBluetooth size={20} />,
    <FaBusAlt size={20} />,
    <FaCamera size={20} />,
    <FaCalendarAlt size={20} />,
    <FaFacebook size={20} />,
    <FaFingerprint size={20} />,
    <FaBalanceScale size={20} />,
    <FaGithub size={20} />,
    <FaGlasses size={20} />,
    <FaGrinStars size={20} />,
    <FaBaseballBall size={20} />,
    <FaHeadphones size={20} />,
    <FaSimCard size={20} />,
    <FaLaptopCode size={20} />,
    <FaPalette size={20} />,
    <FaPlaystation size={20} />,
    <FaPeace size={20} />,
    <FaPowerOff size={20} />,
    <FaPencilAlt size={20} />,
    <FaWrench size={20} />,
  ];

  const color = [
    "#0166FF",
    "#01B3FF",
    "#41CC00",
    "#F9D100",
    "#FF7B01",
    "#AE01FF",
    "#FF0101",
  ];

  return (
    <div className="fixed top-0 bg-[#00000080] w-screen h-screen">
      <div className="w-[520px] h-fit bg-white absolute top-[35%] left-[35%] rounded-xl">
        <div className="flex justify-between px-6 py-5 border-b-2">
          <p className="text-[20px] font-semibold">Add Category</p>
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
          className="w-full flex flex-col gap-6 py-7 px-3"
        >
          <div className="flex gap-2 h-[30px] relative">
            <div className="w-[22%] rounded-lg bg-slate-100 flex gap-2 justify-between items-center p-5">
              <p style={{ color: isColor }}>{isChoose}</p>
              <MdArrowDropDown size={24} onClick={addCat} />
              {isCategory ? (
                <div className="absolute left-0 w-fit h-fit bg-white p-7 mt-[400px] rounded-xl flex flex-col gap-6">
                  <div className="drop-shadow-md grid grid-cols-6 gap-x-6 gap-y-6 border-b-2 pb-8">
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
                  <div className="flex justify-between items-center gap-4">
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
              className="w-[85%] rounded-lg bg-slate-100 p-5"
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

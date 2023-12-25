import { useAuth } from "@/app/layout";
import { MdArrowDropDown } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { AiFillAlipayCircle } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { PiLadderFill } from "react-icons/pi";
import { PiIntersectSquareFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiNotepadFill } from "react-icons/pi";
import { ImMenu } from "react-icons/im";
import { PiLeafFill } from "react-icons/pi";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiTriangleFill } from "react-icons/pi";
import { PiIntersectBold } from "react-icons/pi";
import { BiLogoFlickrSquare } from "react-icons/bi";
import { FaBaseballBall } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TbSquareRoundedLetterA } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { PiGlobeSimpleFill } from "react-icons/pi";
import { TbLemon } from "react-icons/tb";
import { FaPeace } from "react-icons/fa";
import { PiToiletPaperFill } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";

export const AddCategory = () => {
  const { setData, isCategory, addCat } = useAuth();

  return (
    <div className="fixed top-0 bg-[#00000080] w-screen h-screen">
      <div className="w-[520px] h-fit bg-white absolute top-[35%] left-[35%] rounded-xl">
        <div className="flex justify-between px-6 py-5 border-b-2">
          <p className="text-[20px] font-semibold">Add Category</p>
          <img src="x.png" className="w-6 h-6" onClick={setData}></img>
        </div>
        <div className="w-full flex flex-col gap-6 py-7 px-3">
          <div className="flex gap-2 h-[30px] relative">
            <div className="w-[15%] rounded-lg bg-slate-100 flex gap-2 justify-between items-center p-4">
              <MdHomeFilled size={60} />
              <MdArrowDropDown size={60} onClick={addCat} />
              {isCategory ? (
                <div className="absolute left-0 w-fit h-fit bg-white p-7 mt-[400px] rounded-xl flex flex-col gap-6">
                  <div className="drop-shadow-md grid grid-cols-6 gap-x-6 gap-y-6 border-b-2 pb-8">
                    <MdHomeFilled size={25} />
                    <TiHome size={25} />
                    <RiContactsBook2Fill size={25} />
                    <MdContactMail size={25} />
                    <PiLadderFill size={25} />
                    <PiIntersectSquareFill size={25} />
                    <FaImage size={22} />
                    <FaMagnifyingGlassPlus size={25} />
                    <FaMicrophone size={25} />
                    <SiMicrosoftexcel size={25} />
                    <PiNotepadFill size={25} />
                    <ImMenu size={25} />
                    <PiLeafFill size={25} />
                    <PiNumberFiveFill size={25} />
                    <PiNumberCircleSevenFill size={25} />
                    <PiRoadHorizonFill size={25} />
                    <GiSandsOfTime size={25} />
                    <PiAnchorSimpleBold size={25} />
                    <PiTriangleFill size={25} />
                    <PiIntersectBold size={25} />
                    <BiLogoFlickrSquare size={25} />
                    <FaBaseballBall size={25} />
                    <AiFillQuestionCircle size={25} />
                    <TbSquareRoundedLetterA size={25} />
                    <BsWatch size={23} />
                    <PiGlobeSimpleFill size={25} />
                    <TbLemon size={23} />
                    <FaPeace size={23} />
                    <PiToiletPaperFill size={23} />
                    <FaPencilAlt size={20} />
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="w-6 h-6 rounded-xl bg-[#0166FF]"></p>
                    <p className="w-6 h-6 rounded-xl bg-[#01B3FF]"></p>
                    <p className="w-6 h-6 rounded-xl bg-[#41CC00]"></p>
                    <p className="w-6 h-6 rounded-xl bg-[#F9D100]"></p>
                    <p className="w-6 h-6 rounded-xl bg-[#FF7B01]"></p>
                    <p className="w-6 h-6 rounded-xl bg-[#AE01FF]"></p>
                    <p className="w-6 h-6 rounded-xl bg-[#FF0101]"></p>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="w-[85%] rounded-lg bg-slate-100 p-5"></div>
          </div>
          <button className="bg-[#16A34A] py-2 rounded-xl text-white">
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

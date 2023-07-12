import { sidebarTab } from "@/lib/constants";
import { changeSidebar } from "@/src/store/features/modalSlice";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

/* eslint-disable @next/next/no-img-element */
const Sidebar = () => {
  const dispatch = useDispatch();

  const {t} = useTranslation();

  return (
    <div
      className="w-[60px] lg:w-[157px] h-[400px] 3xl:h-[489px] bg-black rounded-br-xl rounded-tr-xl relative cursor-pointer z-50"
      onClick={() => dispatch(changeSidebar(sidebarTab.getLink))}
    >
      <div className="absolute top-[57px] lg:top-[35px] translate-y-[-50%] translate-x-[-50%] left-[45px] lg:left-[130px]">
        <img
          src="/assets/SecuritLockYellow.svg"
          alt="lock-icon"
          className="w-[12px]"
        />
      </div>
      <div className=" absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[30px] lg:left-[70px]">
        <p className="text-yellow text-[8px] lg:text-[12px] tracking-[1.2px]  text-center whitespace-nowrap -rotate-90">
          {t("sidebar.upload")} <br /> {t("sidebar.them")}
          
          {/* UPLOAD FILES OR FOLDERS BY DROPPING <br /> THEM ANYWHERE IN THIS
          WINDOW */}
        </p>
      </div>
      <div className=" absolute top-[170px] translate-y-[-50%] translate-x-[-50%] left-[70px] lg:left-[165px]">
        <p className="text-[8px] lg:text-[10px] whitespace-nowrap rotate-90 tracking-[1.2px]">
        {t("sidebar.advance")}
          {/* ADVANCED ENCRYPTION STANDARD (AES) 256-BIT */}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

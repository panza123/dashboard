
import React from "react";
import { HiArrowUp, HiBell, HiChartBar, HiHome } from "react-icons/hi2";
import { HiCreditCard, HiExternalLink, HiMail, HiOutlineDocumentSearch } from "react-icons/hi";
const SideBar = () => {
  return (
    <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
      <div className="h-20 items-center flex">
        < HiHome width={40} className="text-gray-300 left-3 sm:left-6 fixed" />
      </div>
      <div className="fixed left-3 sm:left-6 top-[100px]">
        <HiChartBar
          width={40}
          className=" mb-4 text-gray-300"
        />
        < HiOutlineDocumentSearch
          width={40}
          className=" mb-4 text-gray-300"
        />
        <HiMail
          width={40}
          className=" mb-4 text-gray-300"
        />
        <HiCreditCard
          width={40}
          className="  mb-4 text-gray-300"
        />
        <HiBell
          width={40}
          className=" mb-4 text-gray-300"
        />
      </div>
      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <HiArrowUp
            width={40}
            className=" mb-4 text-gray-300"
          />
        </a>
        <HiExternalLink
          width={40}
          className=" mb-4 text-gray-300"
        />
      </div>
    </div>
  );
};

export default SideBar;
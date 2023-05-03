import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LogoInterviewspot from "assets/images/logoInterviewspot.png";
import { useSelector } from "react-redux";

const Layout = () => {
  const { userResponse } = useSelector((state) => state.auth);

  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    {
      name: "Schedule Interview",
      link: `${userResponse?.role}/schedule-interview`,
      icon: AiOutlineUser,
    },
    {
      name: "Completed Interview",
      link: `${userResponse?.role}/completed-interview`,
      icon: FiMessageSquare,
    },
    {
      name: "My Profile",
      link: `${userResponse?.role}/profile`,
      icon: TbReportAnalytics,
    },
    // { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState(0);

  return (
    <>
      <section className="flex gap-6 bg-[#f5f6fa]">
        <div
          className={`bg-[#ffffff] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="flex flex-row gap-2">
            {!open ? (
              <img src={LogoInterviewspot} alt="" className="pt-1" />
            ) : (
              <>
                <img src={LogoInterviewspot} alt="" className="pt-1" />
                <div className="flex flex-col font-jakarta text-2xl font-bold">
                  <p className="text-[#dcf247]">Interview</p>
                  <p className="mt-[-4px] text-[#000]">Spot</p>
                </div>
              </>
            )}
          </div>
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer text-black"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                onClick={() => setTab(i)}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm ${
                  tab === i && "bg-[#dcf247]"
                } gap-3.5 font-medium p-2 hover:bg-[#dcf247] rounded-md`}
              >
                <div>
                  {React.createElement(menu?.icon, {
                    size: "20",
                    color: `${tab === i ? "#000" : "#b1b1b1"}`,
                  })}
                </div>
                <h2
                  style={{
                    color: `${tab === i ? "#000" : "#b1b1b1"}`,
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-[#b1b1b1] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import staticServives from "../../CommonServices/Static";
function Navbar() {
  const navigate = useNavigate();
  const [navToggle, setNavToggle] = useState(false);
  const [dropdownCondition, setDropdownCondition] = useState(false);
  const navToggleFunc = (path) => {
    navigate(path);
    setNavToggle(false);
  };
  return (
    <nav className=" w-full flex items-center justify-center min-h-16 bg-white fixed top-0 left-0 z-50 screen-750px:min-h-12">
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center">
        <div className=" w-width-of-component flex items-center justify-between">
          <div className=" w-44 flex items-center justify-center screen-970px:w-40 screen-750px:w-36 screen-580px:w-32 screen-480px:w-28 screen-420px:w-24">
            <img
              onClick={() => navigate("/")}
              src="assets/habot-logo2.jpg"
              alt="Habot Logo"
              className=" w-full cursor-pointer"
            />
          </div>
          <div
            onClick={() => setNavToggle(true)}
            className=" hidden screen-580px:flex items-center justify-center text-xl border border-nav-button-color text-nav-button-color w-8 h-8 rounded-full hover:bg-nav-button-color hover:text-white screen-420px:w-6 screen-420px:h-6 screen-420px:text-lg"
          >
            <RxHamburgerMenu />
          </div>

          <div
            className={`flex items-center justify-center gap-8 text-p2 font-p2 leading-none text-nav-opt-text-color relative font-poppins screen-970px:text-p3 screen-750px:text-p4 screen-750px:gap-4 screen-580px:fixed ${
              navToggle
                ? "screen-580px:right-0 screen-580px:transition-all screen-580px:duration-500 screen-580px:ease-in-out"
                : "screen-580px:-right-[110%] screen-580px:transition-all screen-580px:duration-500 screen-580px:ease-in-out"
            } screen-580px:top-0 h-full screen-580px:bg-white screen-580px:w-full screen-580px:gap-8 screen-580px:flex-col-reverse screen-420px:text-p5`}
          >
            <div
              onClick={() => setNavToggle(false)}
              className=" absolute hidden screen-580px:flex items-center justify-center text-xl border border-nav-button-color text-nav-button-color w-8 h-8 rounded-full hover:bg-nav-button-color hover:text-white right-9 top-2 screen-420px:w-6 screen-420px:h-6 screen-420px:text-lg screen-420px:right-6 screen-420px:top-3 screen-340px:right-5"
            >
              <RxCross1 />
            </div>
            <NavLink
              onClick={() => setNavToggle(false)}
              to="/"
              className=" hover:underline underline-offset-2"
            >
              Find Suppliers
            </NavLink>
            <div
              // onMouseEnter={() => setDropdownCondition(true)}
              // onMouseLeave={() => setDropdownCondition(false)}
              onClick={() => setDropdownCondition(!dropdownCondition)}
              className=" flex items-center justify-center cursor-default relative pr-5 screen-750px:pr-3"
            >
              <span className=" z-[2]">Find Service Tags</span>
              <span className=" z-[2] flex items-end justify-center absolute -right-[2px] -bottom-[1px] text-[17px] h-0 screen-970px:text-[15px] screen-750px:text-[13px] screen-420px:text-[11px]">
                <IoIosArrowDown
                  className={`tranform transition-transform cursor-pointer ${
                    dropdownCondition ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
              <div
                className={` w-full bg-nav-opt-text-color text-white text-p2 font-p2 p-2 ${
                  dropdownCondition ? "flex" : "hidden"
                } items-center justify-center flex-col gap-4 rounded-md absolute -bottom-[162px] left-0 screen-970px:text-p3 screen-970px:-bottom-[152px] screen-750px:text-p4 screen-750px:-bottom-[142px] screen-420px:text-p5 screen-420px:-bottom-[132px]`}
              >
                {staticServives.serviceTag.map((tag) => (
                  <span
                    onClick={() => navToggleFunc("/")}
                    className="cursor-pointer hover:underline w-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              className=" font-inter flex items-center justify-center text-p2 font-h1 text-nav-button-color border-nav-button-color hover:bg-nav-button-color hover:text-white  border-2 rounded-md px-8 py-2  transition-colors duration-200 ease-in-out screen-970px:text-p3 screen-750px:text-p4 screen-750px:px-4 screen-750px:py-1 screen-420px:text-p5"
              onClick={() => navToggleFunc("/")}
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;

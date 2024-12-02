import React from "react";
import { useNavigate } from "react-router";

function GetVerified() {
  const navigate = useNavigate();
  return (
    <main className=" w-full flex items-center justify-center py-16 bg-verified-bg-color screen-750px:py-12">
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center">
        <div className=" w-width-of-component flex items-center justify-between leading-none font-poppins screen-420px:flex-col screen-420px:justify-center screen-420px:gap-6">
          <h3 className=" text-h5 font-h1 relative screen-970px:text-h6 screen-750px:text-btn1 screen-480px:text-btn2 screen-420px:flex screen-420px:items-center screen-420px:justify-center screen-420px:text-center screen-370px:text-p1">
            Let Suppliers Find You{" "}
            <span className=" absolute right-0 -bottom-3 h-1 w-2/5 bg-header-serch-icon-color screen-750px:h-[2px] screen-750px:-bottom-1 screen-420px:right-auto screen-420px:-bottom-2"></span>
          </h3>
          <button
            onClick={() => navigate("/")}
            className=" text-p2 font-h1 bg-header-serch-icon-color text-white py-3 px-12 rounded-md border-2  border-header-serch-icon-color  transition-colors duration-200 ease-in-out screen-970px:text-p3 screen-750px:text-p4 screen-750px:py-2 screen-750px:px-8 screen-420px:text-p5"
          >
            Get Verified
          </button>
        </div>
      </section>
    </main>
  );
}

export default GetVerified;

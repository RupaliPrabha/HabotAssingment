import React from "react";
import staticServives from "../../CommonServices/Static";

function HowWorks() {
  const { howItWorksData } = staticServives;
  return (
    <main className=" w-full flex items-center justify-center py-16 screen-750px:py-12">
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center">
        <div className=" w-width-of-component flex items-center justify-center font-poppins flex-col gap-4 screen-750px:gap-2">
          <h3 className=" text-h5 font-h1 leading-none screen-970px:text-h6 screen-750px:text-btn1 screen-480px:text-btn2 screen-370px:text-p1">
            How it works?
          </h3>
          <p className=" text-p2 font-p2 text-center screen-970px:text-p3 w-59% screen-1434px:w-[66%] screen-1282px:w-[74%] screen-1144px:w-[83%] screen-1020px:w-[93%] screen-970px:w-[86%] screen-862px:w-[97%] screen-764px:w-full screen-750px:text-p4 screen-420px:text-p5">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
          <div className=" w-full flex items-center justify-center flex-wrap mt-10 screen-970px:mt-6 screen-420px:mt-4">
            {howItWorksData?.map((data, ind) => {
              const serialNo = ind + 1;
              const serialNo2 =
                serialNo === 1 || serialNo === 4 || serialNo === 5;
              return (
                <div
                  key={ind}
                  className={`${
                    serialNo % 2 === 0 ? "bg-white" : "bg-verified-bg-color"
                  } w-1/3 flex items-center justify-center flex-col gap-4 h-52 px-2 screen-420px:h-40 screen-370px:w-1/2 ${
                    serialNo2
                      ? " screen-370px:bg-verified-bg-color "
                      : " screen-370px:bg-white "
                  }`}
                >
                  <img
                    src={data._icon}
                    alt="Icon"
                    className=" h-20 w-20 screen-970px:h-16 screen-970px:w-16 screen-750px:w-12 screen-750px:h-12 screen-420px:h-8 screen-420px:w-8"
                  />
                  <span className=" text-center text-p2 font-h2 screen-970px:text-p3 screen-750px:text-p4 screen-420px:text-p5">
                    {data._text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowWorks;

import React, { useState } from "react";
import staticServives from "../../CommonServices/Static";

function BuySupplier() {
  const [activeTab, setActiveTag] = useState("buyer");

  const { buyerList, supplierList, buySupplierHeader } = staticServives;

  const [buyAndSupplyDataCondition, setBuyAndSupplyDataCondition] =
    useState(buyerList);

  const toggleTab = (e) => {
    setActiveTag(e.target.id);
    if (e.target.id === "buyer") {
      setBuyAndSupplyDataCondition(buyerList);
    } else {
      setBuyAndSupplyDataCondition(supplierList);
    }
  };
  return (
    <main className=" w-full flex items-center justify-center pb-16 screen-750px:pb-12">
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center">
        <div className="w-width-of-component flex items-center justify-between bg-buy-supply-bg-color py-16 px-8 font-poppins screen-750px:py-12 screen-750px:px-4 screen-580px:flex-col screen-580px:px-8 screen-580px:gap-6 screen-370px:px-2">
          <div className=" w-48% flex items-center justify-center relative screen-580px:w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=BSi_yTTokK4ntIvE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className=" w-48% flex items-center justify-start flex-col screen-580px:w-full">
            <div className=" w-full flex items-center justify-between text-p2 font-h1 screen-970px:text-p3 screen-750px:text-p4 screen-420px:text-p5">
              {buySupplierHeader.map((val) => (
                <span
                  id={val.id}
                  onClick={toggleTab}
                  className={`${
                    activeTab === val.id
                      ? "text-header-serch-icon-color border-header-serch-icon-color"
                      : " text-white border-buy-supply-bg-color"
                  } w-49% text-center py-1 border-b-2 cursor-pointer  screen-420px:border-b`}
                >
                  {val.heading}
                </span>
              ))}
            </div>

            <div className=" w-full flex items-start justify-center flex-col text-p2 font-h2 text-white gap-2 pt-8 screen-970px:text-p3 screen-970px:pt-6 screen-750px:text-p4 screen-750px:pt-4 screen-420px:text-p5">
              {buyAndSupplyDataCondition.map((item) => (
                <p className=" flex items-center justify-start pl-7 relative screen-750px:pl-4">
                  <img
                    src="assets/checked-green-icon.png"
                    alt="Checked Icon"
                    className=" w-4 absolute top-[5px] left-0 screen-970px:top-[3px] screen-750px:w-3 screen-420px:top-[2px]"
                  />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BuySupplier;

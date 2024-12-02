import React from "react";
import { LuMoveRight } from "react-icons/lu";
import { useNavigate } from "react-router";
import staticServives from "../../CommonServices/Static";
function SignUp() {
  const navigate = useNavigate();
  const { countries } = staticServives;
  return (
    <main className=" w-full flex items-center justify-center py-16 screen-750px:py-12">
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center">
        <div className="w-width-of-component flex items-center justify-between screen-580px:flex-col screen-580px:justify-center screen-580px:gap-6">
          <div className=" w-48% flex items-start justify-center flex-col gap-4 font-poppins screen-750px:gap-2 screen-580px:w-full screen-580px:items-center">
            <h3 className=" font-h1 text-h5 leading-none screen-970px:text-h6 screen-750px:text-btn1 screen-580px:text-center screen-580px:w-full screen-480px:text-btn2 screen-370px:text-p1">
              <span>Ready to dive into </span>
              <span className=" text-habot-heading-color">HABOT?</span>
            </h3>
            <p className=" text-justify text-p2 font-p2 screen-970px:text-p3 screen-750px:text-p4 screen-420px:text-p5">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <button className=" mt-2 text-p2 font-h1 text-white bg-nav-button-color hover:bg-white hover:text-nav-button-color flex items-center justify-center gap-4 px-8 py-2 rounded-md border-nav-button-color border-2  transition-colors duration-200 ease-in-out screen-970px:text-p3 screen-750px:text-p4 screen-420px:text-p5">
              <span>Sign up Today!</span>
              <span className=" text-2xl screen-970px:text-xl screen-750px:text-lg screen-420px:text-base">
                <LuMoveRight />
              </span>
            </button>
          </div>
          <div className=" w-48% flex items-center justify-between flex-wrap gap-y-3 text-p2 font-h2 font-inter screen-970px:text-p3 screen-970px:gap-y-2 screen-750px:text-p4 screen-580px:w-full screen-580px:gap-y-3 screen-420px:text-p5 screen-420px:gap-y-2">
            {countries?.map((country, ind) => {
              return (
                <span
                  onClick={() => navigate(country._path)}
                  key={ind}
                  className=" border border-header-serch-icon-color hover:bg-header-serch-icon-color hover:text-white rounded-md py-2 w-49% text-center  cursor-pointer"
                >
                  {country._name}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;

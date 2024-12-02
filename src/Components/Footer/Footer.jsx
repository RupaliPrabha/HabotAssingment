import React from "react";
import { useNavigate } from "react-router";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className=" w-full flex items-center justify-center py-16 bg-footer-bg-color screen-750px:py-12">
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center">
        <div className=" w-width-of-component flex items-center justify-center text-white font-inter border-y border-[rgba(255,255,255,0.20)] py-16 screen-750px:py-12">
          <div className=" w-full flex items-center justify-start gap-16 relative screen-970px:gap-12 screen-750px:gap-8 screen-580px:gap-0  screen-580px:justify-between screen-580px:items-start screen-370px:flex-col-reverse screen-370px:items-center screen-370px:justify-center screen-370px:gap-8">
            <div className=" flex items-start justify-center flex-col gap-4 w-44 screen-970px:w-40 screen-750px:w-36 screen-580px:w-32 screen-480px:w-28 screen-420px:w-24 screen-370px:flex-row screen-370px:w-full screen-370px:gap-4">
              <img
                onClick={() => navigate("/")}
                src="assets/habot-logo3.png"
                alt="Habot Logo"
                className=" w-full cursor-pointer screen-370px:w-24"
              />
              <span className=" text-p2 font-p3 font-poppins screen-970px:text-p3 screen-750px:text-p4 screen-420px:text-p5">
                © R Singhania
              </span>
            </div>
            <div className=" flex items-start justify-start leading-none text-p2 font-p3 gap-16 screen-970px:text-p3 screen-970px:gap-12 screen-750px:gap-8 screen-750px:text-p4 screen-420px:text-p5 screen-370px:w-full screen-370px:justify-between screen-370px:gap-0">
              <div className=" flex flex-col items-start justify-start gap-3 screen-750px:gap-2">
                <h6 className=" mb-1 font-h1">Company</h6>
                <span
                  onClick={() => navigate("/")}
                  className=" hover:underline underline-offset-2 cursor-pointer"
                >
                  About
                </span>
                <span
                  onClick={() => navigate("/")}
                  className=" hover:underline underline-offset-2 cursor-pointer"
                >
                  FAQ
                </span>
              </div>
              <div className=" flex flex-col items-start justify-start gap-3 screen-750px:gap-2">
                <h6 className=" mb-1 font-h1 ">Terms</h6>
                <span
                  onClick={() => navigate("/")}
                  className=" hover:underline underline-offset-2 cursor-pointer"
                >
                  Data privacy
                </span>
                <span
                  onClick={() => navigate("/")}
                  className=" hover:underline underline-offset-2 cursor-pointer"
                >
                  Terms
                </span>
                <span
                  onClick={() => navigate("/")}
                  className=" hover:underline underline-offset-2 cursor-pointer"
                >
                  Accessibility
                </span>
              </div>
              <div className=" flex flex-col items-start justify-start gap-3 screen-750px:gap-2">
                <h6 className=" mb-1 font-h1 ">Related</h6>
                <span
                  onClick={() => navigate("/")}
                  className=" hover:underline underline-offset-2 cursor-pointer"
                >
                  Find Buyer
                </span>
                <span
                  onClick={() => navigate("/")}
                  className=" hover:underline underline-offset-2 cursor-pointer"
                >
                  Feedback
                </span>
              </div>
            </div>
            <div className=" absolute right-0 flex items-center justify-center gap-3 text-2xl screen-970px:text-xl screen-820px:flex-wrap screen-820px:w-24 screen-820px:gap-y-4 screen-820px:justify-between screen-750px:w-20 screen-750px:text-base screen-580px:w-full screen-580px:justify-start screen-580px:-bottom-10 screen-580px:right-auto screen-420px:text-sm screen-420px:-bottom-6 screen-370px:-bottom-10 screen-370px:w-full screen-370px:justify-center">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-12 h-12 border border-[rgba(255,255,255,0.20)] rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.20)] hover:text-blue-500 transition-colors duration-100 ease-in-out screen-970px:h-10 screen-970px:w-10 screen-750px:w-8 screen-750px:h-8 screen-420px:w-6 screen-420px:h-6"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-12 h-12 border border-[rgba(255,255,255,0.20)] rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.20)] hover:text-sky-400 transition-colors duration-100 ease-in-out screen-970px:h-10 screen-970px:w-10 screen-750px:w-8 screen-750px:h-8 screen-420px:w-6 screen-420px:h-6"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-12 h-12 border border-[rgba(255,255,255,0.20)] rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.20)] hover:text-blue-800 transition-colors duration-100 ease-in-out screen-970px:h-10 screen-970px:w-10 screen-750px:w-8 screen-750px:h-8 screen-420px:w-6 screen-420px:h-6"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-12 h-12 border border-[rgba(255,255,255,0.20)] rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.20)] hover:text-pink-400 transition-colors duration-100 ease-in-out screen-970px:h-10 screen-970px:w-10 screen-750px:w-8 screen-750px:h-8 screen-420px:w-6 screen-420px:h-6"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

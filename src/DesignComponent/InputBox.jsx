import React from "react";

function InputBox({ src, alt, placeholder }) {
  return (
    <div className=" w-96 flex items-center justify-center bg-white relative rounded-md overflow-hidden screen-970px:w-72 screen-750px:w-49% screen-518px:w-full">
      <img
        src={src}
        alt={alt}
        className="absolute w-5 left-3 screen-970px:w-4 screen-970px:left-2 screen-750px:w-3 screen-750px:left-1"
      />
      <input
        className=" py-2 w-full focus:outline-none pl-11 pr-3 screen-970px:pl-8 screen-970px:pr-2 screen-764px:pr-1 screen-750px:pl-5"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;

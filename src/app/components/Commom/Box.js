import React from "react";

const Box = ({ children }) => {
  return (
    <div className="bg-[#FFF] shadow-custom2 py-8 px-4 rounded-lg">
      {children}
    </div>
  );
};

export default Box;

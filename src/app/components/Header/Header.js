import React from "react";
import Image from "../Image/Image";

const Header = () => {
  return (
    <div className="py-6 px-4 bg-[#FFF] shadow-custom fixed top-0 right-0 left-[292px] z-30">
      <div className="flex items-center justify-center gap-x-2">
        <Image className="w-[40px] h-[40px] rounded-full overflow-hidden border-[2px] border-primary"></Image>

        <div>
          <h1 className="text-text3">
            Xin Chào,{" "}
            <span className="text-primary font-semibold">Boss Tiến !</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

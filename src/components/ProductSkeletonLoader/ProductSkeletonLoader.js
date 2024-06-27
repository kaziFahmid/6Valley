import React from "react";

const ProductSkeletonLoader = () => {
  return (
    <div className=" productcard-shadow bg-[var(--white-color)] p-[10px] rounded-[5px]">
      <div className="skeleton h-[175px] w-full rounded-[5px]"></div>
      <div className="mt-[14px]">
        <div className="skeleton h-[11px] w-[70px] mx-auto"></div>
        <div className="skeleton h-[11px] w-[70px] mt-[9px] mx-auto"></div>
        <div className="skeleton h-[11px] w-[133px] mt-[9px] mx-auto"></div>
        <div className="skeleton h-[11px] w-[70px] mt-[9px] mx-auto"></div>
      </div>
    </div>
  );
};

export default ProductSkeletonLoader;

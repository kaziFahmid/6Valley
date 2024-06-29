"use client";
import { recommendedLists } from "@/lib/listDatas";
import React, { memo, useState } from "react";


const RecomendedLists = ({productTypeValue,
  setProductTypeValue}) => {

  return (
    <ul className="list-none sm:flex-wrap flex justify-center items-center gap-5 lg:gap-[61px] flex-col sm:flex-row">
      {recommendedLists?.map((item, index, arr) => (
        <li
          onClick={() => {
       
            setProductTypeValue(item?.value)
          }}
          key={index}
          className={` hover:text-[var(--primary-color)] relative cursor-pointer pb-[15px] flex justify-between items-center ${
            productTypeValue === item?.value && "border-b-[3px] border-[var(--primary-color)] "
          } ${
            productTypeValue === item?.value && "font-bold text-[var(--primary-color)]"
          } font-normal`}
        >
          <span>{item?.title}</span>

          {index === arr.length - 1 && (
            <img
              src="./award.svg"
              width={26}
              height={26}
              alt="award-img"
              className="absolute -right-7"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default memo(RecomendedLists);

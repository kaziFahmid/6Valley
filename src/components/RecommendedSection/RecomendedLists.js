"use client";
import { recommendedLists } from "@/lib/listDatas";
import React, { memo, useState } from "react";


const RecomendedLists = () => {
  const [active, setActive] = useState(0);
  return (
    <ul className="list-none sm:flex-wrap flex justify-center items-center gap-5 lg:gap-[61px] flex-col sm:flex-row">
      {recommendedLists?.map((item, index, arr) => (
        <li
          onClick={() => setActive(index)}
          key={index}
          className={` hover:text-[var(--primary-color)] relative cursor-pointer pb-[15px] flex justify-between items-center ${
            active === index && "border-b-[3px] border-[var(--primary-color)]"
          } ${
            active === index && "font-bold text-[var(--primary-color)]"
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

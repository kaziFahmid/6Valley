"use client";

import { IoIosMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const SearchBox = () => {
  return (
    <>
      <span onClick={() => document.getElementById("my_modal_3").showModal()}>
        {" "}
        <IoSearch className="text-[var(--grey-text-color)] text-2xl " />
      </span>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex justify-center items-center flex-1 mt-2">
            <div
              style={{ border: "1px solid rgba(185, 185, 185, 0.2)" }}
              className=" w-full mx-auto rounded-[25px] flex justify-between items-center p-[3px] "
            >
              <div>
                <div
                  style={{ borderRight: "1px solid rgba(185, 185, 185, 0.2)" }}
                  className="flex justify-start items-center gap-[15px]  pr-[7px] ps-[14px]"
                >
                  <IoIosMenu className="text-[var(--grey-text-color)]" />
                  <MdKeyboardArrowDown className="text-[var(--grey-text-color)]" />
                </div>
              </div>
              <div className="text-left flex-[0.9]">
                <input
                  type="search"
                  placeholder="Search for items or store..."
                  className="w-full"
                />
              </div>
              <button className="bg-[var(--primary-color)] rounded-e-[25px] px-[20px] py-[11px]">
                <IoSearch className="text-[var(--white-color)]" />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SearchBox;

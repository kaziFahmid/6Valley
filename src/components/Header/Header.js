import Image from "next/image";
import FreeExpressShipping from "../FreeExpressShipping/FreeExpressShipping";
import { IoSearch } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getCategories } from "@/api/getCategories";
import { IoMdClose } from "react-icons/io";
import SearchBox from "./SearchBox";
import FiftyPercent from "../FiftyPercent/FiftyPercent";
const Header = async () => {
  let allCategories = await getCategories();

  return (
    <>
    {/* 50%off black friday */}
    <FiftyPercent/>
      {/* freeExpress shipping */}
      <FreeExpressShipping />
      <div
        className="bg-[var(--white-color)]   py-[17px] lg:block hidden"
        style={{ borderBottom: "1px solid rgba(185, 185, 185, 0.2)" }}
      >
        <div className="container mx-auto flex justify-between items-center ">
          {/* logo */}
          <div>
            <Image src="./logo.svg" width={135} height={135} alt="logo-image" />
          </div>
          {/* search */}
          <div className="flex justify-center items-center flex-1">
            <div
              style={{ border: "1px solid rgba(185, 185, 185, 0.2)" }}
              className=" w-[551px] mx-auto rounded-[25px] flex justify-between items-center p-[3px] "
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
                  className="w-full "
                />
              </div>
              <button className="bg-[var(--primary-color)] rounded-e-[25px] px-[20px] py-[11px]">
                <IoSearch className="text-[var(--white-color)]" />
              </button>
            </div>
          </div>
          <div></div>
          {/* profiles and others */}
          <div>
            <ul className="list-none flex justify-center items-center gap-[30px]">
              <li className="border-r border-[var(border-color)] pr-[15px]">
                <Image
                  src="/profile.png"
                  width={24}
                  height={24}
                  alt="profile"
                />
              </li>
              <li className="border-r border-[var(border-color)] pr-[15px] relative">
                <div className="bg-[var(--primary-color)] absolute -top-2 right-0 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                  <span className="text-[12px] font-normal text-[var(--white-color)]">
                    6
                  </span>
                </div>
                <Image
                  src="/ri_shuffle-fill.png"
                  width={21}
                  height={21}
                  alt="ri_shuffle-fill"
                />
              </li>
              <li className="border-r border-[var(border-color)] pr-[15px] relative">
                <div className="bg-[var(--primary-color)] absolute -top-2 right-0 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                  <span className="text-[12px] font-normal text-[var(--white-color)]">
                    6
                  </span>
                </div>
                <Image
                  src="/ph_heart.png"
                  width={23}
                  height={23}
                  alt="ph_heart"
                />
              </li>
              <li className="relative pr-[15px]">
                <div className="bg-[var(--primary-color)] absolute -top-2 right-0 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                  <span className="text-[12px] font-normal text-[var(--white-color)]">
                    6
                  </span>
                </div>
                <Image src="/Group.png" width={17} height={17} alt="cart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* for mobile */}

      <div
        className="bg-[var(--white-color)]   py-[17px] block  lg:hidden"
        style={{ borderBottom: "1px solid rgba(185, 185, 185, 0.2)" }}
      >
        <div className="container mx-auto flex justify-between items-center ">
          {/* logo */}
          <div className="flex justify-start items-center gap-2">
            {/* drawer */}
            <div className="drawer z-50">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className=" drawer-button">
                  {" "}
                  <IoIosMenu className="text-[var(--primary-color)] text-4xl" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className=" bg-[var(--white-color)] text-base-content min-h-full w-60 p-4">
                  {/* Sidebar content here */}
                  <li className="text-right">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay flex justify-end items-center"
                    >
                      <IoMdClose className="text-[var(--text-color)]  text-2xl" />{" "}
                    </label>
                  </li>
                  <li>
                    <div className="flex justify-start items-center gap-3 font-semibold">
                      <span>Categories</span> <MdKeyboardArrowDown />{" "}
                    </div>

                    <div className=" bg-[var(--white-color)] rounded-[5px]   h-[395px] overflow-y-auto scrollbar ">
                      {allCategories?.map((item, index, arr) => (
                        <div
                          key={index}
                          style={{
                            borderBottom:
                              index !== arr.length - 1
                                ? "1px solid rgba(185, 185, 185, 0.2)"
                                : "none",
                          }}
                          className="  bg-[var(--white-color)]  flex justify-between items-center px-5 py-[11px] w-full"
                        >
                          <div className="flex justify-start items-center gap-[16px]">
                            <h6
                              className={`font-normal text-[13px] text-[var(--text-color)]`}
                            >
                              {item?.name}
                            </h6>
                          </div>
                          <MdKeyboardArrowDown className="text-[var(--text-color)] -rotate-90" />
                        </div>
                      ))}
                    </div>
                  </li>



                  <li className="text-[var(--text-color)] font-semibold mb-3">
                Home
              </li>
              <li className="flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold mb-3 ">
                <span>Offers</span>
                <MdKeyboardArrowDown className="text-[var(--text-color)] font-semibold" />
              </li>
              <li className="flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold mb-3 ">
                <span>Stores</span>
                <MdKeyboardArrowDown className="text-[var(--text-color)] font-semibold" />
              </li>
              <li className="flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold mb-3">
                <span>Brands</span>
                <MdKeyboardArrowDown className="text-[var(--text-color)] font-semibold" />
              </li>
              <li className="flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold ">
                <span>Discounted Products</span>
                <img
                  src={"./teenyicons_discount-solid.svg"}
                  width={15}
                  height={15}
                  alt="teenyicons_discount-solid"
                />
              </li>









                </ul>
              </div>
            </div>

            <Image src="./logo.svg" width={135} height={135} alt="logo-image" />
          </div>

          {/* profiles and others */}
          <div>
            <ul className="list-none flex justify-center items-center gap-6">
              <li>
                <SearchBox/>
               
              </li>
              <li>
                <Image
                  src="/profile.png"
                  width={24}
                  height={24}
                  alt="profile"
                />
              </li>

              <li className="relative ">
                <Image src="/Group.png" width={17} height={17} alt="cart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

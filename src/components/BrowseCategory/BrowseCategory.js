import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";

const BrowseCategory = () => {
  return (
    <div
      className="bg-[var(--white-color)] lg:block hidden"
      style={{ borderBottom: "1px solid rgba(185, 185, 185, 0.2)" }}
    >
      <div className="container mx-auto grid grid-cols-12">
        <div className="lg:col-span-3 xl:col-span-2">
          <div className="bg-[var(--primary-color)] flex justify-between items-center px-5 py-5">
            <div className="flex items-center gap-4">
              <IoIosMenu className="text-[var(--white-color)]" />
              <h6 className="font-bold text-sm text-[var(--white-color)]">
                Browse Category
              </h6>
            </div>
            <MdKeyboardArrowDown className="text-[var(--white-color)]" />
          </div>
        </div>

        <div className="lg:col-span-9 xl:col-span-10 flex items-center">
          <nav className="ml-14">
            <ul className="list-none flex items-center gap-5">
              <li className="text-[var(--text-color)] font-semibold text-sm hover:text-[var(--primary-color)] cursor-pointer">
                Home
              </li>
              {["Offers", "Stores", "Brands"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[var(--text-color)] font-semibold text-sm hover:text-[var(--primary-color)] cursor-pointer"
                >
                  <span>{item}</span>
                  <MdKeyboardArrowDown className="text-[var(--text-color)] font-semibold" />
                </li>
              ))}
              <li className="flex items-center gap-2 text-[var(--text-color)] font-semibold text-sm hover:text-[var(--primary-color)] cursor-pointer">
                <span>Discounted Products</span>
                <Image
                  src="/teenyicons_discount-solid.svg"
                  width={15}
                  height={15}
                  alt="Discount Icon"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;

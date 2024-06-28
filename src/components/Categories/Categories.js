import { getCategories } from "@/api/getCategories";
import { MdKeyboardArrowDown } from "react-icons/md";

const Categories = async () => {
  let allCategories = await getCategories();

  if (allCategories?.error) {
    return (
      <div className="text-center mt-[40px]">
        <h2 className="text-[var(--red-color)]">{allCategories?.error}</h2>
      </div>
    );
  }
  return (
    <div className="drop-shadow bg-[var(--white-color)] rounded-[5px] ps-[15px] pr-[23px] h-[395px] overflow-y-auto scrollbar pb-[24px] ">
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
            <h6 className='font-normal text-[13px] text-[var(--text-color)] hover:text-[var(--primary-color)] cursor-pointer'>
              {item?.name}
            </h6>
          </div>
          <MdKeyboardArrowDown className="text-[var(--text-color)] -rotate-90" />
        </div>
      ))}
    </div>
  );
};

export default Categories;

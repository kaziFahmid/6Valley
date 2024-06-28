import { IoMdClose } from "react-icons/io";
const FiftyPercent = () => {
  return (
    <>
      <div className="fiftypercent-bg py-[12px]  justify-between items-center hidden sm:flex">
        <div className="ps-[57.5px]">
          <IoMdClose className="font-bold text-[var(--primary-color)] text-[15px]" />
        </div>
        <div className="text-center">
          <h6 className="font-bold text-[var(--primary-color)] text-[13px]">
            50% Off On Black Friday For All Stores Valid Until 31 January, 2023
          </h6>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default FiftyPercent;

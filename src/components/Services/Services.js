import Image from "next/image";
import { servicesList } from "./servicesList";
import NewSletter from "./NewSletter/NewSletter";

const Services = () => {
  return (
    <div className="bg-[var(--grey-bg-color)] pt-[23px] mt-[115px] pb-[21px]">
      <div className="mx-auto container  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6  gap-[20px] xl:gap-0">
        {servicesList?.map((item, index) => (
          <div
            key={index}
            className="text-center px-[26px]"
            style={{
              borderRight: item?.img2 ? "none" : "0.5px solid #0000004D",
            }}
          >
            <div className="flex justify-center  items-center gap-[11px]">
              <Image src={item?.img} width={30} height={30} alt={item.title} />
              {item?.img2 && (
                <Image
                  src={item?.img2}
                  width={30}
                  height={30}
                  alt={item.title}
                />
              )}
            </div>
            <h3 className="mt-[12.5px] font-bold text-[16px] text-[var(--text-color)]">
              {item.title}
            </h3>
            <p className="mt-[15px] font-normal text-[12px] text-[var(--service-des-color)]">
              {item.des}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto container">
        <NewSletter />
      </div>
    </div>
  );
};

export default Services;

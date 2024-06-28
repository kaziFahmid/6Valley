import { CATEGORY_IMAGE_BASE_PATH } from "@/lib/api";
import Image from "next/image";

const CategoryCard = ({ allCategoriesData }) => {
  const { name, icon } = allCategoriesData;
  const categoryImage = `${CATEGORY_IMAGE_BASE_PATH}/${icon}`;
  return (
    <div className="text-center">
      <Image
        src={categoryImage}
        width={500}
        height={500}
        alt={name}
        className="mx-auto"
      />
      <h6 className="text-[13px] text-gray-700 font-bold mt-2">{name}</h6>
    </div>
  );
};

export default CategoryCard;

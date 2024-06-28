import Image from "next/image";

const CategoryCard = ({ allCategoriesData }) => {
  const { name, icon } = allCategoriesData;

  return (
    <div className="text-center">
      <Image
        src={`https://6valley.6amtech.com/storage/app/public/category/${icon}`}
        width={500}
        height={500}
        alt={name}
        className="mx-auto"
      />
      <h6 className="text-[13px] text-gray-700 font-bold mt-2">
        {name}
      </h6>
    </div>
  );
};

export default CategoryCard;

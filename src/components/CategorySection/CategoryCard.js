import Image from "next/image";

const CategoryCard = (props) => {
  const { name, icon } = props?.allCategoriesData;
  return (
    <>
      <div>
        <div className="text-center">
          <Image
            src={`https://6valley.6amtech.com/storage/app/public/category/${icon}`}
            width={500}
            height={500}
            alt={name}
          />
        </div>
        <div className="text-center">
          <h6 className="text-[13px] text-[var(--text-color)] font-bold">
            {name}
          </h6>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;

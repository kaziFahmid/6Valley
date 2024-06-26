
import { getCategories } from "@/lib/getCategories";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategorySection = async () => {
  let allCategories = await getCategories();

  if (allCategories?.error) {
    return (
      <div className="text-center mt-[40px]">
        <h2 className="text-[var(--red-color)]">{allCategories?.error}</h2>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto container w-full bg-[var(--white-color)] my-[40px] productcard-shadow px-[15px] py-[15px] rounded-[5px]">
        <h3 className="text-[var(--text-color)] font-bold text-[20px]">
          Categories
        </h3>
        <div className="mt-[25px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10">
          {allCategories?.map((data, index, arr) => (
            <CategoryCard key={index} allCategoriesData={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySection;

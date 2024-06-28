"use client";
import ProductCard from "../ProductCard/ProductCard";
import ProductSkeletonLoader from "../ProductSkeletonLoader/ProductSkeletonLoader";
import RecomendedLists from "./RecomendedLists";
import { memo, useEffect, useState } from "react";
const RecommendedSection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&offset=1"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAllProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, [isLoading]);

  if (error) {
    return (
      <div className="text-center mt-[40px]">
        <h2 className="text-[var(--red-color)]">{error}</h2>
      </div>
    );
  }
  return (
    <>
      <div className="mt-[49px]">
        <div className="text-center">
          <h1 className="font-bold text-[var(text-color)] text-[20px]">
            Recommended For You
          </h1>
        </div>
        <div className="mt-[25px]">
          <RecomendedLists />
        </div>

        {/* products */}
        <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-[15px] container mx-auto">
          {isLoading
            ? [...new Array(10)]?.map((item, index) => (
                <ProductSkeletonLoader key={index} />
              ))
            : allProducts?.products?.map((data, index) => (
                <ProductCard key={index} productsData={data} />
              ))}
        </div>
      </div>
    </>
  );
};

export default memo(RecommendedSection);

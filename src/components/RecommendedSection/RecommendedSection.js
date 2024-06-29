"use client";
import { BASE_URL } from "@/lib/api";
import ProductCard from "../ProductCard/ProductCard";
import ProductSkeletonLoader from "../ProductSkeletonLoader/ProductSkeletonLoader";
import RecomendedLists from "./RecomendedLists";
import { memo, useEffect, useState } from "react";

const RecommendedSection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productTypeValue, setProductTypeValue] = useState('featured');
  const url = `${BASE_URL}/products/${productTypeValue}?guest_id=1&limit=10&offset=1`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);  // Reset error state before fetching new data
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setAllProducts([])
          throw new Error('No products found');
        }

        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productTypeValue]);

  return (
    <div className="mt-[49px] sm:px-0 px-2">
      <div className="text-center">
        <h1 className="font-bold text-[var(text-color)] text-[20px]">
          Recommended For You
        </h1>
      </div>
      <div className="mt-[25px]">
        <RecomendedLists productTypeValue={productTypeValue} setProductTypeValue={setProductTypeValue} />
      </div>

      {/* products */}
      <div className="container mx-auto mt-[20px]">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[15px]">
            {[...new Array(10)].map((item, index) => (
              <ProductSkeletonLoader key={index} />
            ))}
          </div>
        ) : (
          <div>
            {allProducts?.products?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[15px]">
                {allProducts.products.map((data, index) => (
                  <ProductCard key={index} productsData={data} />
                ))}
              </div>
            ) : (
              <div className="text-center text-[var(--red-color)] mt-5">
                {error || 'No products found'}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(RecommendedSection);

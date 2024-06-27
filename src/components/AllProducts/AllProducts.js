import { Rubik } from "next/font/google";
import ProductCard from "../ProductCard/ProductCard"
import { getProducts } from "@/api/getProducts";
const rubik = Rubik({  weight: [ "400","500","600","700","800"], subsets: ["latin"] });

const AllProducts = async () => {
    let allProducts= await getProducts();

if(allProducts?.error){
    return<div className="text-center mt-[40px]">
        <h2 className="text-[var(--red-color)]">{products?.error}</h2>
    </div>
}
  return (
    <>
    <div className="container mx-auto mt-[40px]">
    <div className="border-b border-[var(--border-color)] pb-[22px]">
        <h3 className={`text-[var(--text-color)] font-medium text-[20px] ${rubik.className}`}>All Products</h3>
    </div>
<div className="mt-[25px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  gap-[15px]">


{allProducts?.products?.map((data,index)=> <ProductCard key={index} productsData={data}/>)}
    </div>
    </div>
    
    
    
    </>
  )
}

export default AllProducts
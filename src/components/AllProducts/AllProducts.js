import ProductCard from "../ProductCard/ProductCard"
import { getProducts } from "@/api/getProducts";

const AllProducts = async () => {
    let allProducts= await getProducts();
console.log(allProducts)
if(allProducts?.error){
    return<div className="text-center mt-[40px]">
        <h2 className="text-[var(--red-color)]">{products?.error}</h2>
    </div>
}
  return (
    <>
    <div className="container mx-auto mt-[40px]">
    <div className="border-b border-[var(--border-color)] pb-[22px]">
        <h3 className="text-[var(--text-color)] font-bold text-[20px]">All Products</h3>
    </div>
<div className="mt-[25px] grid grid-cols-5 gap-[15px]">


{allProducts?.products?.map((data,index)=> <ProductCard key={index} productsData={data}/>)}
    </div>
    </div>
    
    
    
    </>
  )
}

export default AllProducts
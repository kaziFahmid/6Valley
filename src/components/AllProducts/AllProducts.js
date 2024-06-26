import ProductCard from "../ProductCard/ProductCard"


const AllProducts = () => {
  return (
    <>
    <div className="container mx-auto mt-[40px]">
    <div className="border-b border-[var(--border-color)] pb-[22px]">
        <h3 className="text-[var(--text-color)] font-bold text-[20px]">All Products</h3>
    </div>
<div className="mt-[25px] grid grid-cols-5 gap-[15px]">


{[2,3,4,5,3,2,6].map((item,index)=> <ProductCard key={index}/>)}
    </div>
    </div>
    
    
    
    </>
  )
}

export default AllProducts
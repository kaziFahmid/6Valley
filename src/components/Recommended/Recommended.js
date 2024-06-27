import { getProducts } from '@/api/getProducts';
import { recommendedLists}from'./recommendedLists'
import ProductCard from '../ProductCard/ProductCard';
import Image from 'next/image';
import RecomendedLists from './RecomendedLists';
const Recommended = async() => {
  let allProducts= await getProducts();

  if(allProducts?.error){
      return<div className="text-center mt-[40px]">
          <h2 className="text-[var(--red-color)]">{products?.error}</h2>
      </div>
  }
  return (
    <>
    <div className="mt-[49px]">
   <div className="text-center">
    <h1 className="font-bold text-[var(text-color)] text-[20px]">Recommended For You</h1>
   </div>
   <div className='mt-[25px]'>
  <RecomendedLists/>
   </div>



   {/* products */}
   <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-[15px] container mx-auto">


{allProducts?.products?.map((data,index)=> <ProductCard key={index} productsData={data}/>)}
    </div>
    </div>
    </>
  )
}

export default Recommended
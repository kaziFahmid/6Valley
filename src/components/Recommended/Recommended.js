import { getProducts } from '@/api/getProducts';
import { recommendedLists}from'./recommendedLists'
import ProductCard from '../ProductCard/ProductCard';
import Image from 'next/image';
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
    <ul className="list-none sm:flex-wrap flex justify-center items-center gap-5 lg:gap-[61px] flex-col sm:flex-row">
        { recommendedLists?.map((item,index,arr)=> <li key={index} className={`pb-[15px] flex justify-between items-center ${index===0&&'border-b-[3px] border-[var(--primary-color)]'}`}  ><span>{item?.title}</span>
       {index===arr.length-1&& <Image src='./award.svg' width={26} height={26} alt='award-img'/>}
        </li>)}
       
      
    </ul>
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
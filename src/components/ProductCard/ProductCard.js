import Image from "next/image"


import { Rate } from "antd";

const ProductCard = (props) => {
  const{
    name,
    rating,
    images,
    discount,
    category:{name:categoryName},
    purchase_price
  }=props?.productsData
  return (
    <>
    <div className=" productcard-shadow bg-[var(--white-color)] p-[10px] rounded-[5px]">
<div className= 'rounded-[5px] relative product-card'>


<div className="flex flex-col gap-[11px] absolute right-2 top-2  icon-container">
<div className="rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]"><Image src='./activated.svg' width={18} height={18} alt="icon"/></div>
<div className="rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]"><Image src='./ph_heart2.svg' width={18} height={18} alt="icon"/></div>
<div className="rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]"><Image src='./teenyicons_git-compare-solid.svg' width={18} height={18} alt="icon"/></div>
<div className="rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]"><Image src='./fluent_eye-16-regular.svg'  width={18} height={18}alt="icon"/></div>
</div>






<div>
<Image src={`https://6valley.6amtech.com/storage/app/public/product/${images[0]}`}width={500} height={500} alt={name} className="  h-[175px] rounded-[5px] object-cover"/>
</div>






<div className="badge bg-[var(--red-color)] border-0 absolute -top-1 -left-1 text-[10.98px] font-extrabold text-[var(--white-color)]">+{discount}%</div>
</div>












<div className="text-center mt-[16.12px]">
  <div className="text-center flex justify-center items-center gap-[5px] mb-[3.96px]">
  <Rate disabled defaultValue={ parseFloat(rating[0]?.average).toFixed(1)}   style={{ color: "var(--rating-color)", fontSize:16, }}  />
<span className="text-[var(--grey-text-color)] text-[10px] font-normal ">({ parseFloat(rating[0]?.average).toFixed(1)})</span>
  </div>
  
  <p  className="text-[var(--grey-text-color)] text-[10.98px] font-normal">{categoryName}</p>
  <h6 className="text-[var(--text-color)] text-[14.64px] font-bold">{name}</h6>
  <h6 className="text-[var(--text-color)] text-[14.64px] font-bold"><span className="text-[var(--grey-text-color)] text-[12.81px] font-normal line-through ">{purchase_price}$</span>{' '}{purchase_price-purchase_price*discount/100}$</h6>
</div>
    </div>
    </>
  )
}

export default ProductCard
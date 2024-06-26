import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Image from 'next/image';
const BrowseCategory = () => {
  return (
    <>
    <div className='bg-[var(--white-color)] ' style={{borderBottom:"1px solid rgba(185, 185, 185, 0.2)"}}>
<div className='container mx-auto grid-cols-12 grid'>
<div className='col-span-2'  >
    <div className='bg-[var(--primary-color)] flex justify-between items-center px-5 py-[19.25px]'>
<div className='flex justify-start items-center gap-[16px]'>
< IoIosMenu className='text-[var(--white-color)]'/>
<h6 className='font-bold text-[14px] text-[var(--white-color)]'>Browse Category</h6>
</div>
<MdKeyboardArrowDown className='text-[var(--white-color)]'/>
</div>
</div>














<div className='col-span-10 flex justify-start items-center'  >
<ul className='list-none flex justify-start items-center gap-[20px] ms-[55px]'>
<li className='text-[var(--text-color)] font-semibold text-[13px]'>Home</li>
<li className='flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px]'><span>Offers</span><MdKeyboardArrowDown className='text-[var(--text-color)] font-semibold'/></li>
<li className='flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px]'><span>Stores</span><MdKeyboardArrowDown className='text-[var(--text-color)] font-semibold'/></li>
<li className='flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px]'><span>Brands</span><MdKeyboardArrowDown className='text-[var(--text-color)] font-semibold'/></li>
<li className='flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px]'><span>Discounted Products</span><Image src={'./teenyicons_discount-solid.svg'} width={15} height={15} alt='teenyicons_discount-solid'/></li>
</ul>
</div>
</div>
    </div>

    </>
  )
}

export default BrowseCategory
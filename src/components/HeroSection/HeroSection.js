import Image from 'next/image'
import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { browserCategoriesLists } from './browserCategoriesLists'
const HeroSection = () => {
  return (
<>
<div className='container mx-auto grid grid-cols-12'>
<div className='col-span-2 rounded-[5px] ' >

  <div className='drop-shadow bg-[var(--white-color)] rounded-[5px] ps-[15px] pr-[23px] h-[395px] '>
  { browserCategoriesLists?.map((item,index,arr)=><div  key={index}  style={{borderBottom:index !== arr.length - 1 ? "1px solid rgba(185, 185, 185, 0.2)" : "none",}} className='  bg-[var(--white-color)]  flex justify-between items-center px-5 py-[11px] w-full'>
<div className='flex justify-start items-center gap-[16px]'>

<h6 className='font-normal text-[13px] text-[var(--text-color)]'>{item?.title}</h6>
</div>
<MdKeyboardArrowDown className='text-[var(--text-color)] -rotate-90'/>
</div>)}
  </div>

</div>














<div className='col-span-10' >
<div className='ms-[15px] pt-[15px]'>




<div className="grid grid-cols-8 grid-rows-7 gap-4 h-[381px]">
<div className="col-span-6 row-span-4 bg-slate-500 rounded-[3px]">1</div>
    <div className="col-span-2 row-span-7 col-start-7 bg-slate-500 rounded-[3px]">2</div>
    <div className="col-span-3 row-span-3 row-start-5 bg-slate-500 rounded-[3px]">3</div>
    <div className="col-span-3 row-span-3 col-start-4 row-start-5 bg-slate-500 rounded-[3px]">4</div>

</div>













</div>
</div>
</div>








</>
  )
}

export default HeroSection
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
<div className="col-span-6 row-span-4 bg-slate-500 rounded-[3px] banner1">1</div>
    <div className="col-span-2 row-span-7 col-start-7 bg-slate-500 rounded-[3px] banner4 text-center py-[35px] px-[30px]">
        <div>
            <h1 className='text-[var(--white-color)] text-[29px] font-normal '>New Launch</h1>
            <p  className='text-[var(--white-color)] text-[18px] font-medium mt-[26px]'>with new vision</p>
        </div>
   <div className='text-center mt-[35px]'>
   <Image src={'./tablet.svg'} width={160} height={160} alt='tablet' className='mx-auto'/>
   <p className='text-[ #FFFFFF80] text-[10px] mt-[17px]'>TABLETS</p>
   </div>
   <h5 className='text-[var(--white-color)] mt-[15px]'>iPad Pro 11</h5>
    </div>
    <div className="col-span-3 row-span-3 row-start-5 bg-slate-500 rounded-[3px]   banner2 ">3</div>
    <div className="col-span-3 row-span-3 col-start-4 row-start-5 bg-slate-500 rounded-[3px] banner3">4</div>

</div>













</div>
</div>
</div>








</>
  )
}

export default HeroSection
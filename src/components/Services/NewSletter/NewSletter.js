import Image from 'next/image'
import React from 'react'

const NewSletter = () => {
  return (
 
        <div className='bg-[var(--secondary-color)] rounded-[10px] px-[48px] py-[28.5px] grid grid-cols-12 mt-[23px]'>
<div className='text-left col-span-8'>
<h2 className='text-[var(--white-color)] text-[18px] font-semibold'>Newsletter</h2>
<p className='text-[var(--white-color)]  text-[16px] mt-1 '>Be the first one to know  about discounts, offers and events</p>
</div>

<div className='flex justify-center items-center col-span-4'>
<div className='bg-[var(--white-color)] w-full pe-[6px] py-[6px] flex justify-between items-center pl-[24px] rounded-[7px]'>
<div className='flex justify-start items-center gap-[2.5px]'>
    <div>
        <Image src={'./sms.svg'} width={20} height={20}  alt='sms-image'/>
    </div>
    <div>
        <input type='email' placeholder='Enter your email' className='w-full'/>
    </div>
</div>






<div className='text-right'>
    <button className='bg-[var(--primary-color)] text-[var(--white-color)] font-semibold text-[14px] px-[21px] py-[7.5px] rounded-[4px]'>Submit</button>
</div>





</div>
</div>
        </div>
  
  )
}

export default NewSletter
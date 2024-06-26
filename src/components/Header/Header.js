import Image from "next/image"
import FreeExpressShipping from "../FreeExpressShipping/FreeExpressShipping"
import { IoSearch } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  return (
    <>
    {/* freeExpress shipping */}
<FreeExpressShipping/>
<div className="bg-[var(--white-color)]  border-[var(--border-color)] border-b py-[17px]">
    <div className="container mx-auto flex justify-between items-center ">
{/* logo */}
<div>
<Image src='./logo.svg' width={135} height={135} alt="logo-image"/>

</div>
{/* search */}
<div className="flex justify-center items-center flex-1">
<div  className="border border-[var(--border-color)] w-[551px] mx-auto rounded-[25px] flex justify-between items-center p-[3px] ">
<div>
    <div className="flex justify-start items-center gap-[15px] border-r border-[var(--border-color)] pr-[7px] ps-[14px]">
        <IoIosMenu className="text-[var(--grey-text-color)]"/>
<MdKeyboardArrowDown className="text-[var(--grey-text-color)]"/>
    </div>
   
</div>
<div className="text-left flex-[0.9]">
<input type='search' placeholder="Search for items or store..." className="w-full" />
</div>
<button className="bg-[var(--primary-color)] rounded-e-[25px] px-[20px] py-[11px]">
<IoSearch className="text-[var(--white-color)]"/>
</button>
</div>
</div>
<div>

</div>
{/* profiles and others */}
<div>
<ul className="list-none flex justify-center items-center gap-[30px]">
    <li className="border-r border-[var(border-color)] pr-[15px]">
<Image src='/profile.png' width={24} height={24} alt='profile'/>
    </li>
    <li className="border-r border-[var(border-color)] pr-[15px]">
    <Image src='/ri_shuffle-fill.png' width={24} height={24} alt='ri_shuffle-fill'/>
    </li>
    <li className="border-r border-[var(border-color)] pr-[15px]">
    <Image src='/ph_heart.png' width={24} height={24} alt='ph_heart'/>
    </li>
    <li>
    <Image src='/Group.png' width={18} height={18} alt='cart'/>
    </li>
</ul>
</div>

    </div>



</div>
    </>
  )
}

export default Header
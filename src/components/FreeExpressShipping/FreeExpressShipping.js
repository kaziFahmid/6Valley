
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
const FreeExpressShipping = () => {
  return (
    <>
    <div className="bg-[var(--deep-blue-color)] py-2 hidden sm:block">
<div className="container mx-auto flex justify-between items-center">
    {/* Become a Seller*/}
<div className="flex justify-start items-center gap-5">
<button className="bg-[var(--primary-color)] px-[12.8px] py-[2.75px] text-[13px] text-[var(--white-color)] font-bold rounded-2xl">Become a Seller</button>
<h6 className="text-[var(--white-color)] text-[12px] font-normal">Free Express Shipping</h6>
</div>




{/* social media and others */}

<div className="flex justify-between items-center gap-5">

<ul className="list-none flex justify-start items-center gap-5">
    <li className="flex justify-start items-center gap-1">
        <h6 className="text-[var(--white-color)] text-[12px] font-semibold">USD</h6>
        <MdKeyboardArrowDown className="text-[var(--white-color)] font-semibold text-[20px]" />
    </li>
    <li className="flex justify-start items-center gap-1">
    <h6 className="text-[var(--white-color)] text-[12px] font-semibold">EN</h6>
    <MdKeyboardArrowDown className="text-[var(--white-color)] font-semibold text-[20px]" />
    </li>
</ul>



<ul className="list-none flex justify-start items-center gap-5 ">
    <li >
<IoLogoTwitter className="text-[var(--white-color)]"/>


    </li>
    <li >
<IoLogoFacebook className="text-[var(--white-color)]"/>
    </li>
    <li >
<IoLogoInstagram className="text-[var(--white-color)]"/>
</li>
</ul>






</div>









</div>
    </div>
    </>
  )
}

export default FreeExpressShipping


import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Roboto, Russo_One} from "next/font/google";
import Categories from "../Categories/Categories";

const russone = Russo_One({  weight: [ "400"], subsets: ["latin"] });

const roboto=Roboto( {
  weight: ['400', '700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],

})





const HeroSection =() => {


  return (
    <>
      <div className="container mx-auto lg:grid grid-cols-12  hidden">
        <div className="  rounded-[5px] xl:col-span-2 col-span-12 ">
         <Categories />
        </div>

        <div className="xl:col-span-10 col-span-12 " >
          <div className="xl:ms-[15px] pt-[15px]">
            <div className="grid grid-cols-8 grid-rows-7 gap-4 h-[381px]">
              <div className="col-span-6 row-span-4 bg-slate-500 rounded-[3px] banner1">
                
              </div>
              <div className="col-span-2 row-span-7 col-start-7 bg-slate-500 rounded-[3px] banner4 text-center py-[35px] px-[30px]">
                <div>
                  <h1 className={`text-[var(--white-color)] text-[29px] font-normal  ${russone?.className}  `}>
                    New Launch
                  </h1>
                  <p className="text-[var(--white-color)] text-[18px] font-medium mt-[26px]">
                    with new vision
                  </p>
                </div>
                <div className="text-center mt-[35px]">
                  <Image
                    src={"./tablet.svg"}
                    width={160}
                    height={160}
                    alt="tablet"
                    className="mx-auto"
                  />
                  <p className={`text-[ #FFFFFF80] text-[10px] mt-[17px] ${roboto.className} font-black `}>
                    TABLETS
                  </p>
                </div>
                <h5 className={`text-[var(--white-color)] mt-[15px] ${roboto.className} font-bold`}>
                  iPad Pro 11
                </h5>
              </div>
              <div className="col-span-3 row-span-3 row-start-5 bg-slate-500 rounded-[3px]   banner2 ">
            
              </div>
              <div className="col-span-3 row-span-3 col-start-4 row-start-5 bg-slate-500 rounded-[3px] banner3">
            
              </div>
            </div>














            
          </div>
        </div>
      </div>




      {/* for mobiles */}

      <div className="container mx-auto grid grid-cols-1 lg:hidden   ">
        <div className=" hidden sm:block rounded-[5px]  ">
          <div className=" bg-[var(--white-color)] rounded-[5px] lg:ps-[15px] lg:pr-[23px] h-[395px] overflow-y-auto scrollbar ">
          <Categories />
          </div>
        </div>

        <div className="" >
          <div className="xl:ms-[15px] pt-[15px]">
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className=" bg-slate-500 rounded-[3px] banner1 h-[300px] sm:h-[100%]">
             
              </div>
              <div className=" bg-slate-500 rounded-[3px] banner4 text-center py-[35px] px-[30px]">
                <div>
                  <h1 className={`text-[var(--white-color)] text-[29px] font-normal  ${russone?.className}  `}>
                    New Launch
                  </h1>
                  <p className="text-[var(--white-color)] text-[18px] font-medium mt-[26px]">
                    with new vision
                  </p>
                </div>
                <div className="text-center mt-[35px]">
                  <Image
                    src={"./tablet.svg"}
                    width={160}
                    height={160}
                    alt="tablet"
                    className="mx-auto"
                  />
                  <p className={`text-[ #FFFFFF80] text-[10px] mt-[17px] ${roboto.className} font-black `}>
                    TABLETS
                  </p>
                </div>
                <h5 className={`text-[var(--white-color)] mt-[15px] ${roboto.className} font-bold`}>
                  iPad Pro 11
                </h5>
              </div>
              <div className="bg-slate-500 rounded-[3px]   banner2 h-[300px] ">
               
              </div>
              <div className=" bg-slate-500 rounded-[3px] banner3 h-[300px]">
              
              </div>
            </div>














            
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

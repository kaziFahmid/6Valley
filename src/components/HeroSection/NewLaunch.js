import Image from 'next/image'
import { Roboto, Russo_One} from "next/font/google";

const russone = Russo_One({  weight: [ "400"], subsets: ["latin"] });

const roboto=Roboto( {
  weight: ['400', '700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],

})

const NewLaunch = () => {
  return (
    <>
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
  </>
  )
}

export default NewLaunch
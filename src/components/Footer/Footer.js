import Image from "next/image";
import { footerNavLists } from "./footerNavLists";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="footer-section ">
      <div className="footer-top w-full py-[20px] md:py-[35px]">
        <div className="mx-auto container flex-col gap-5 md:gap-0 md:flex-row flex justify-between items-center">
          <div></div>
          <ul className="list-none flex justify-center items-center gap-5">
            <li>
              <Image
                src={"./ant-design_twitter-circle-filled.svg"}
                width={24}
                height={24}
                alt="twitter"
              />
            </li>
            <li>
              <Image
                src={"./bxl_instagram-alt.svg"}
                width={24}
                height={24}
                alt="instagram"
              />
            </li>
            <li>
              <Image
                src={"./ic_sharp-facebook.svg"}
                width={24}
                height={24}
                alt="facebook"
              />
            </li>
            <li>
              <Image
                src={"./entypo-social_youtube-with-circle.svg"}
                width={24}
                height={24}
                alt="youtube"
              />
            </li>
          </ul>
          <div className="flex justify-start items-center gap-[8px]">
            <div>
              <Image
                src="./mingcute_phone-call-line.svg"
                width={32}
                height={32}
                alt="mingcute_phone-call-line"
              />
            </div>
            <div>
              <h6 className="text-[var(--white-color)] font-bold text-[14px]">
                Hotline
              </h6>
              <p className="text-[var(--white-color)] font-normal text-[13px] mt-[2px]">
                +90-327-5345543
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:gap-0 gap-8 grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 mx-auto container py-[20px]">
        <div>
          <div>
            <Image
              src="./footerlogo.svg"
              width={135}
              height={135}
              alt="footerlogo"
            />
          </div>

          <p className="text-[var(--white-color)] text-[14px] mt-[14.5px]">
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies{" "}
          </p>

          <ul className="list-none mt-[17px] ml-[27px]">
            <li className="text-[var(--white-color)] text-[14px]">
              1901 Thornridge Cir. Shiloh, Hawaii 81063
            </li>
            <li className="text-[var(--white-color)] text-[14px] mt-[9px]">
              support@example.cpm
            </li>
          </ul>

          <div className="mt-[19px]">
            <Image
              src="./applegooglebtn.svg"
              width={300}
              height={300}
              alt="applegooglebtn"
            />
          </div>
        </div>
        <div className="flex lg:justify-center items-center">
          <div>
            <h5 className="text-[var(--white-color)] font-bold text-[16px]">
              {footerNavLists?.title1}
            </h5>
            <ul className="list-none mt-[9px] ">
              {footerNavLists?.accountLists?.map((item, index) => (
                <li
                  key={index}
                  className="text-[var(--white-color)] text-[14px] mb-[9px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  lg:justify-center items-center">
          <div>
            <h5 className="text-[var(--white-color)] font-bold text-[16px]">
              {footerNavLists?.title2}
            </h5>
            <ul className="list-none mt-[9px] ">
              {footerNavLists?.quicklinkLists?.map((item, index) => (
                <li
                  key={index}
                  className="text-[var(--white-color)] text-[14px] mb-[9px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  lg:justify-center items-center">
          <div>
            <h5
              className={`text-[var(--white-color)] font-bold text-[16px] ${rubik.className}`}
            >
              {footerNavLists?.title3}
            </h5>
            <ul className="list-none mt-[9px] ">
              {footerNavLists?.otherLists?.map((item, index) => (
                <li
                  key={index}
                  className="text-[var(--white-color)] text-[14px] mb-[9px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom w-full py-[24px] text-center">
        <h6
          className={`text-[var(--white-color)] text-[14px] ${rubik?.className}`}
        >
          2021 COPYRIGHT All Rights Reserved By 6amMart.com
        </h6>
      </div>
    </div>
  );
};

export default Footer;

import { Rubik } from "next/font/google";
const rubik = Rubik({
  weights: ["400"],
  subsets: ["latin"],
});
const Title = ({text}) => {
  return (
    <h3 className={`px-2 sm:px-0 text-[var(--text-color)] font-medium text-[20px] ${rubik.className}`}> {text}</h3>
  );
};

export default Title;

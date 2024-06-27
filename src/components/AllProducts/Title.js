import { Rubik } from "next/font/google";
const rubik = Rubik({
    weights: ["400"], // 'weights' instead of 'weight'
    subsets: ["latin"],
  });
const Title = () => {
  

  return (
    <h3
      className={`text-[var(--text-color)] font-medium text-[20px] ${rubik.className}`}
    >
      All Products
    </h3>
  );
};

export default Title;



const ProductCard = () => {
  return (
    <>
    <div className=" productcard-shadow bg-[var(--white-color)] p-[10px] rounded-[5px]">
<div className="bg-red-600 h-[175px] rounded-[5px] relative">
<div className="badge bg-[var(--red-color)] border-0 absolute -top-1 -left-1 text-[10.98px] font-extrabold text-[var(--white-color)]">+20%</div>
</div>
<div className="text-center mt-[16.12px]">
  <div className="text-center flex justify-center items-center gap-[2px] mb-[3.96px]">
  <div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-[var(--rating-color)]" />
  <input
    type="radio"
    name="rating-6"
    class="mask mask-star-2 bg-[var(--rating-color)]"
    checked="checked" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-[var(--rating-color)]" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-[var(--rating-color)]" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-[var(--rating-color)]" />
</div>
<span className="text-[var(--grey-text-color)] text-[10px] font-normal">(asdfdsaf)</span>
  </div>
  <p  className="text-[var(--grey-text-color)] text-[10.98px] font-normal">Morning Mart</p>
  <h6 className="text-[var(--text-color)] text-[14.64px] font-bold">Evening Dress</h6>
  <h6 className="text-[var(--text-color)] text-[14.64px] font-bold"><span className="text-[var(--grey-text-color)] text-[12.81px] font-normal ">15$</span>12$</h6>
</div>
    </div>
    </>
  )
}

export default ProductCard
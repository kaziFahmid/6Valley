import { recommendedLists}from'./recommendedLists'
const Recommended = () => {
  return (
    <>
    <div className="mt-[49px]">
   <div className="text-center">
    <h1 className="font-bold text-[var(text-color)] text-[20px]">Recommended For You</h1>
   </div>
   <div className='mt-[25px]'>
    <ul className="list-none flex justify-center items-center gap-[61px]">
        { recommendedLists?.map((item,index)=> <li key={index} className='pb-[15px] border-b-[3px] border-[var(--primary-color)]'  >{item?.title}</li>)}
       
      
    </ul>
   </div>
    </div>
    </>
  )
}

export default Recommended
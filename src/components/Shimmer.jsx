const Shimmer = () => {
  return (
    <>
       <div className="grid grid-cols-4 gap-x-5 gap-y-5">
       {Array(20)
        .fill()
        .map((e, index) => (
          <div
            key={index}
            className="flex flex-col w-56 shadow-md rounded-xl animate-pulse "
          >
            <div className="rounded-lg h-72 bg-[#272727] "></div>
            <div className="flex flex-col ">
              <div className=" h-10 mt-1 bg-[#272727]"></div>
              <div className="h-10 mt-1 bg-[#272727]"> </div>
            </div>
          </div>
        ))} 
    </div> 
    </>
  )
}

export default Shimmer
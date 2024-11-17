const SinglePageShimmer = () => {
  return (
    <div className="flex flex-col gap-10 animate-pulse">
    {/* poster */}
    <div className="rounded-lg h-80 w-full bg-[#272727]"></div>
    <div className="flex items-center gap-4">
    {Array(8)
        .fill()
        .map((e, index) => (
          <div
            key={index}
            className="flex flex-col w-32 shadow-md rounded-xl animate-pulse "
          >
            <div className="rounded-lg h-24 bg-[#272727] "></div>
            <div className="flex flex-col ">
              <div className=" h-5 mt-1 bg-[#272727]"></div>
              <div className="h-5 mt-1 bg-[#272727]"> </div>
            </div>
          </div>
        ))} 
    </div>
    </div>
  )
}

export default SinglePageShimmer
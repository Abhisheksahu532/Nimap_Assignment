/* eslint-disable react/prop-types */
const BaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
const Poster = ({details}) => {

  const formatDate = (dateString)=>{
    const date = new Date(dateString);
    return date.toDateString();
  }

  return (
    <>
        <div className='grid grid-cols-1 lg:grid-cols-2  rounded-lg bg-[#020B17] '>
        info
        <div className='flex flex-col gap-5 p-5 '>
          {/* upper */}
          <div className='flex flex-col gap-4 lg:flex-row'>
            <img src={BaseUrl + details.poster_path} alt={details.title} className="rounded h-72 lg:h-40"/>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">{details.title}</h1>
                <h3 className="text-blue-400">Ratings : {(details.vote_average).toFixed(1)}</h3>
                <div className="flex items-center gap-4 text-xs md:text-sm lg:text-base ">
                    <span className="p-1 border border-gray-800 rounded">{details.runtime} min</span>
                    <span className="text-blue-100">{details?.genres?.map((genre)=> genre.name).join(', ')}</span>
                    
                </div>
                <span className="text-sm text-gray-400">Release Date : {formatDate(details.release_date)}</span>
            </div>
          </div>
          {/* lower */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl">Overview</h2>
            <p>{details.overview}</p>
          </div>
        </div>
        {/* right */}
        <div className="hidden w-full h-full lg:block ">
        <img src={BaseUrl + details.backdrop_path} className="object-cover w-full h-full rounded-r-lg" />
        </div>
        </div>
    </>
  )
}

export default Poster
/* eslint-disable react/prop-types */
const Card = ({movie}) => {
const basePath = import.meta.env.VITE_IMAGE_BASE_URL 
const rating  = (movie.vote_average).toFixed(1);
  return (
    <div className="relative w-56 overflow-hidden cursor-pointer rounded-xl">
        <img src={basePath+movie?.poster_path} alt={movie.title} className="rounded-xl"/>
        <div className="w-full py-3 text-white ">
        <h3 className="text-sm font-bold hover:underline">{movie.title}</h3>
        <p className="mt-1 text-xs">Rating: {rating}</p>
      </div>
    </div>
   
  )
}

export default Card
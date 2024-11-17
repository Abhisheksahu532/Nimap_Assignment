/* eslint-disable react/prop-types */
import Card from "./Card"
import { Link } from "react-router-dom"
const CardContainer = ({movies}) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 place-items-center lg:place-items-start gap-x-5 gap-y-5">
        {movies?.map((movie)=>(
    <Link to={`/singleMovie/${movie.id}`} key={movie.id}>
        <Card  movie={movie} />
    </Link>
        ))}
    </div>
  )
}

export default CardContainer
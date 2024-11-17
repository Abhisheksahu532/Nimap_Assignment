import {useParams} from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../utils/redux/slices/apiSlice';
import Poster from '../components/Poster';
import Cast from '../components/Cast';
import SinglePageShimmer from '../components/SinglePageShimmer';

const SingleMovie = () => {
  const {id} = useParams();
  const {data,isLoading,error} = useGetMovieDetailsQuery(id);
  console.log(data);
  if (isLoading) return <SinglePageShimmer />;
  if (error) return <div className="text-white">Error: {error.message}</div>;
  return (
    <>
      <div>
        {/* poster */}
        <Poster details={data}/>
        {/* cast */}
        <Cast id={data?.id}/>
      </div>
    </>
  )
}

export default SingleMovie
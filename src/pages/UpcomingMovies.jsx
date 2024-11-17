import { useState } from "react";
import CardContainer from "../components/CardContainer";
import { useGetUpcomingMoviesQuery } from "../utils/redux/slices/apiSlice"
import Pagination from "../components/Pagination";
import Shimmer from "../components/Shimmer";
const UpcomingMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetUpcomingMoviesQuery(currentPage);
  const totalPages = data?.total_pages || 1;
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  }
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) return <Shimmer />;
  if (error) return <div className="text-white">Error: {error.message}</div>;
  
  return (
    <div>
    <CardContainer movies={data?.results || []} />
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPrevious={handlePreviousPage}
      onNext={handleNextPage}
       />
  </div>
  )
}



export default UpcomingMovies
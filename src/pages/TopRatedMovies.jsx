import { useState } from "react";
import CardContainer from "../components/CardContainer";
import { useGetTopRatedMoviesQuery } from "../utils/redux/slices/apiSlice"
import Pagination from "../components/Pagination";
import Shimmer from "../components/Shimmer";

const TopRatedMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetTopRatedMoviesQuery(currentPage);
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

export default TopRatedMovies


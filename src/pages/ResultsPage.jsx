import {  useEffect, useState } from "react";
import { useSearchMoviesQuery } from "../utils/redux/slices/apiSlice";
import CardContainer from "../components/CardContainer";
import { useSearchParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import Pagination from "../components/Pagination";
const ResultsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm] = useSearchParams();
  const search = searchTerm.get("query");
  const { data, isLoading, error } = useSearchMoviesQuery({
    movieName: search,
    page: currentPage,
  });

  const totalPages = data?.total_pages || 1;
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

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
  );
};

export default ResultsPage;

import { GrNext, GrPrevious } from "react-icons/gr"

/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <>
        <div className="flex items-center justify-start gap-8 mt-5 ">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-1 py-2 font-semibold text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GrPrevious />
        Previous
      </button>
      <span className="hidden text-sm text-white lg:block">
        Showing {currentPage} of {totalPages}
      </span>
      <span className="text-sm text-white lg:hidden">
         {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 py-2 font-semibold text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      <GrNext />
      </button>
    </div>
    </>
  )
}

export default Pagination
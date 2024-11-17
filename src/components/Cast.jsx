/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetMovieCastQuery } from "../utils/redux/slices/apiSlice";
const BaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const Cast = ({ id }) => {
  const { data, isLoading, error } = useGetMovieCastQuery(id);
  console.log(data?.cast);
  const sliderLeft = () => {
    var element = document.getElementById("cuisines");
    element.scrollLeft -= 400;
  };
  const sliderRight = () => {
    var element = document.getElementById("cuisines");
    element.scrollLeft += 400;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-white">Error: {error.message}</div>;
  return (
    <>
      <div className="flex flex-col gap-2 py-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Cast</h2>
          <div className="items-center justify-between hidden gap-3 lg:flex ">
            <span
              className="cursor-pointer h-10 w-10 text-lg p-2.5 shadow-md  bg-[#212121] rounded-full "
              onClick={sliderLeft}
            >
              <IoIosArrowBack className="dark:text-white" />
            </span>
            <span
              className="cursor-pointer p-2.5 text-lg h-10 w-10 shadow-md   rounded-full bg-[#212121]"
              onClick={sliderRight}
            >
              <IoIosArrowForward className="dark:text-white" />
            </span>
          </div>
        </div>
        <div
          className="overflow-hidden scroll-smooth whitespace-nowrap"
          id="cuisines"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-none lg:grid-flow-col">
            {data?.cast?.map((actor) => {
              return (
                <div
                  key={actor.cast_id}
                  className="flex flex-col flex-shrink-0 gap-3 p-2 w-28 h-52 rounded-xl"
                >
                  <img
                    src={
                      actor?.profile_path
                        ? BaseUrl + actor.profile_path
                        : "https://www.gstatic.com/knowledgecard/person-95.png"
                    }
                    alt={actor.name}
                    className="object-cover w-24 h-24 rounded-lg"
                  />
                  <h3 className="w-full mt-2 overflow-hidden text-sm leading-tight break-words whitespace-normal">
                    {actor.name}
                  </h3>
                  <h5 className="w-full overflow-hidden text-xs leading-tight text-gray-500 break-words truncate whitespace-normal">
                    {actor.character}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cast; 

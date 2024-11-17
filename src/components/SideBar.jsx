import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo } from "../utils/redux/slices/sideNavSlice";
import { FaStar } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

const SideBar = () => {
  const Pages = [
    { id: 1, url: "/", name: "Popular Movies",logo:<SlBadge size={15} /> },
    { id: 2, url: "/toprated", name: "Top Rated Movies" ,logo:<FaStar size={15} />},
    { id: 3, url: "/upcoming", name: "Upcoming Movies",logo:<LuCalendarClock size={15}/> },
  ];

  const dispatch = useDispatch();
  const selectedPage = useSelector((store) => store.sideNav.sideData);

  return (
    <div className="w-[16%] h-[92vh]  fixed top-5 left-5 overflow-hidden rounded-xl bg-[#181B22] flex flex-col justify-between gap-8 p-5">
      <section className="flex flex-col gap-6">
        <h1 className="flex items-baseline gap-4 px-3">
          <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-br to-white via-blue-950 from-blue-500">
            MovieDB
          </span>
        </h1>
        <ul className="flex flex-col gap-2">
        {Pages?.map((btn) => (
            <Link
              key={btn.id}
              to={btn.url}
              className={`${
                selectedPage === btn.name ? "bg-[#313237] rounded-xl" : ""
              } flex gap-6 font-normal hover:bg-[#737373aa] hover:rounded-xl px-3 py-3 text-sm items-center`}
              onClick={() => {
                dispatch(navigateTo(btn.name));
              }}
            >{btn.logo}
              <li>{btn.name}</li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SideBar;

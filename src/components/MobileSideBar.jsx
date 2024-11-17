
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo, setClose } from "../utils/redux/slices/sideNavSlice";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

const MobileSideBar = () => {
  const Pages = [
    { id: 1, url: "/", name: "Popular Movies",logo:<SlBadge size={15} /> },
    { id: 2, url: "/toprated", name: "Top Rated Movies" ,logo:<FaStar size={15} />},
    { id: 3, url: "/upcoming", name: "Upcoming Movies",logo:<LuCalendarClock size={15}/> },
  ];

  const dispatch = useDispatch();
  const selectedPage = useSelector((store) => store.sideNav.sideData);
  const isOpen = useSelector((state) => state.sideNav.isOpen);

  return (
    <div
      className={`w-full z-50 md:w-[40%] lg:w-[16%] h-full fixed top-0 left-0 overflow-hidden rounded-xl bg-[#181B22] flex flex-col justify-between gap-8 p-5 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="flex items-baseline gap-4 px-3">
            <BsCameraReelsFill className="text-blue-950" size={35} />
            <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-br to-white via-blue-950 from-blue-500">
              Nimap
            </span>
          </h1>
          {/* Close button */}
          <button className="p-2 lg:hidden" onClick={() => dispatch(setClose())}>
            <MdClose size={25} />
          </button>
        </div>
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
      <div className="flex flex-col gap-3">
        <hr className="dark:border-t dark:border-[#676666aa]" />
        <span className="text-xs dark:text-[#aaaaaa] px-2 pb-2">
          © {new Date().getFullYear()} Nimap
        </span>
      </div>
    </div>
  );
};

export default MobileSideBar;

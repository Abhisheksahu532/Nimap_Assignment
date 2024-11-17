/* eslint-disable react/prop-types */
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { setSearchTerm } from "../utils/redux/slices/searchSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { setOpen } from "../utils/redux/slices/sideNavSlice";

const Navbar = () => {
  const [term,setTerm] = useState("");
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(setSearchTerm(term));
    navigate(`/results?query=${term}`);

  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  
      handleSearchSubmit();
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
    <button
  className="p-2 lg:hidden"
  onClick={() => dispatch(setOpen())}
>
  <HiMenu size={30} />
</button>
    <div className="flex items-center justify-between gap-5 bg-[#24272C] px-8 md:w-[60%] lg:w-[40%] py-3 rounded-full">
        <input type="search"
        value={term}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
         className="w-full bg-transparent focus:outline-none" placeholder="Search a movie" />
        <button type="submit" className="cursor-pointer"><IoSearchOutline size={20} /></button>
        </div>
    </div>
  )
}

export default Navbar
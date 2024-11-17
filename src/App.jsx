// import { Outlet } from 'react-router-dom'
// import './App.css'
// import SideBar from './components/SideBar'
// import Navbar from './components/Navbar'
// function App() {

//   return (
//     <body className='flex items-start justify-start w-full gap-10 py-5 md:px-2 lg:px-10'>
//     <SideBar/>
//     <div className='flex flex-col gap-10 w-[80%]  ml-[18%] '>
//     <Navbar />
//      <Outlet />
//      </div>
//     </body>
//   )
// }

// export default App
import { Outlet } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import MobileSideBar from './components/MobileSideBar';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {
  const isOpen = useSelector((state) => state.sideNav.isOpen);

  return (
    <div className="flex items-start justify-start w-full gap-10 py-5 md:px-2 lg:px-10">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SideBar />
      </div>
      
      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="block lg:hidden">
          <MobileSideBar />
        </div>
      )}
      
      <div className="flex flex-col gap-10 lg:w-[80%] lg:ml-[18%] px-10 md:px-2 lg:px-0">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;


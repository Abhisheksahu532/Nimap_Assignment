import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PopularMovies,ResultsPage,SingleMovie,TopRatedMovies,UpcomingMovies } from "../pages";

export const appRouter = createBrowserRouter([
    {
    path:'/',
    element : <App/>,
    children:[
      {
        path:'/',
        element:<PopularMovies />
      },
      {
        path:'/toprated',
        element:<TopRatedMovies />
      },
      {
        path:'/upcoming',
        element:<UpcomingMovies />
      },
      {
        path:'/results',
        element:<ResultsPage />
      },
      {
        path:'/singleMovie/:id',
        element:<SingleMovie />
      },
    ]
  }
])
  
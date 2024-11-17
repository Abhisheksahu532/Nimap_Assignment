import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./slices/apiSlice";
import sideNavSlice from "./slices/sideNavSlice"
import searchSlice from './slices/searchSlice'
const store = configureStore({
    reducer:{
        search:searchSlice,
        sideNav: sideNavSlice,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware:(prevMiddleware)=>prevMiddleware().concat(moviesApi.middleware),
});

export default store;
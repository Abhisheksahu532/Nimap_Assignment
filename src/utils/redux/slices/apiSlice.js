import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Api_key = import.meta.env.VITE_API_KEY;
const BaseUrl = import.meta.env.VITE_API_BASE_URL;
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page = 1) => `movie/popular?api_key=${Api_key}&language=en-US&page=${page}`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `/movie/${movieId}?api_key=${Api_key}&language=en-US`,
    }),
    getMovieCast: builder.query({
      query: (movieId) =>
        `/movie/${movieId}/credits?api_key=${Api_key}&language=en-US`,
    }),
    getUpcomingMovies: builder.query({
        query: (page = 1) => `/movie/upcoming?api_key=${Api_key}&language=en-US&page=${page}`,
      }),
      getTopRatedMovies: builder.query({
        query: (page = 1) => `/movie/top_rated?api_key=${Api_key}&language=en-US&page=${page}`,
      }),
      searchMovies: builder.query({
        query: ({movieName, page = 1}) => `/search/movie?api_key=${Api_key}&language=en-US&query=${movieName}&page=${page}`,
      }),
  }),
});

export const { useGetPopularMoviesQuery,useGetMovieCastQuery,useGetMovieDetailsQuery,useGetTopRatedMoviesQuery,useGetUpcomingMoviesQuery,useSearchMoviesQuery } = moviesApi;

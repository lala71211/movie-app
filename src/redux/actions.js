// GET GENRE
export const GET_GENRE = "GET_GENRE";
export const GET_GENRE_SUCCESS = "GET_GENRE_SUCCESS";
export const GET_GENRE_ERROR = "GET_GENRE_ERROR";

//GET ACTOR
export const GET_ACTOR = "GET_ACTOR";
export const GET_ACTOR_SUCCESS = "GET_ACTOR_SUCCESS";
export const GET_ACTOR_ERROR = "GET_ACTOR_ERROR";

//GET MOVIE
export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_ID = "GET_MOVIE_ID";
export const GET_MOVIE_BY_GENRE = "GET_MOVIE_BY_GENRE";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_ERROR = "GET_MOVIE_ERROR";
export const GET_MOVIE_ID_SUCCESS = "GET_MOVIE_ID_SUCCESS";
export const GET_MOVIE_ID_ERROR = "GET_MOVIE_ID_ERROR";
export const GET_MOVIE_BY_GENRE_SUCCESS = "GET_MOVIE_BY_GENRE_SUCCESS";
export const GET_MOVIE_BY_GENRE_ERROR = "GET_MOVIE_BY_GENRE_ERROR";

//GET, ADD COMMENT
export const GET_COMMENT = "GET_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
export const GET_COMMENT_ERROR = "GET_COMMENT_ERROR";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "ADD_COMMNET_ERROR";

//GET,ADD REVIEW
export const GET_REVIEW = "GET_REVIEW";
export const ADD_REVIEW = "ADD_REVIEW";
export const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS";
export const GET_REVIEW_ERROR = "GET_REVIEW_ERROR";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_ERROR = "ADD_REVIEW_ERROR";
//GET, EPISODE
export const GET_EPISODE = "GET_EPISODE";
export const GET_EPISODE_ID = "GET_EPISODE_ID";
export const GET_EPISODE_SUCCESS = "GET_EPISODE_SUCCESS";
export const GET_EPISODE_ERROR = "GET_EPISODE_ERROR";
export const GET_EPISODE_ID_SUCCESS = "GET_EPISODE_ID_SUCCESS";
export const GET_EPISODE_ID_ERROR = "GET_EPISODE_ID_ERROR";

export * from "./genre/actions";
export * from "./actor/actions";
export * from "./movie/actions";
export * from "./comment/actions";
export * from "./review/actions";
export * from "./episode/actions";
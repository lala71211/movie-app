import { GET_REVIEW,ADD_REVIEW,
    GET_REVIEW_SUCCESS,GET_REVIEW_ERROR,
    ADD_REVIEW_SUCCESS,ADD_REVIEW_ERROR,
} from "../actions";

export const getListReviews = (selectedPageSize, currentPage, movieId, userId) => ({
type: GET_REVIEW,
payload: { selectedPageSize, currentPage, movieId, userId}
});

export const getListReviewsSuccess = (listReview) => ({
type: GET_REVIEW_SUCCESS,
payload: listReview
});

export const getListReviewError = (message) => ({ 
type: GET_REVIEW_ERROR,
payload: message
});

export const addReview = (reviewForm) =>({
    type: ADD_REVIEW,
    payload: reviewForm
});

export const addReviewSuccess = (message) => ({
    type: ADD_REVIEW_SUCCESS,
    payload: message
});

export const addReviewError = (message) => ({
    type: ADD_REVIEW_ERROR,
    payload: message
});
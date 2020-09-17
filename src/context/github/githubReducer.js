import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
} from "../types";

export default (state, action) => {
  switch (action) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

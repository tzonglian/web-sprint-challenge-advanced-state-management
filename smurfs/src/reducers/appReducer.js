import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  POST_SMURF,
  ADD_SMURF,
} from "../actions/appActions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case POST_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    default:
      return state;
  }
};

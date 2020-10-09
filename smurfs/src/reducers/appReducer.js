// import {
//   FETCH_SMURFS_START,
//   FETCH_SMURFS_SUCCESS,
//   ADD_SMURF,
//   UPDATE_SMURFS,
// } from "../actions/appActions.js";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SMURFS_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SMURFS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    // case ADD_SMURF:
    //   return {
    //     ...state,
    //     smurfs: [...smurfs, action.payload],
    //   };
    case "UPDATE_SMURFS":
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    default:
      return state;
  }
};

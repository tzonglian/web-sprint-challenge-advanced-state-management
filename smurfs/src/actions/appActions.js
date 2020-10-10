import axios from "axios";
import React, { useState } from "react";

// export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
// export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
// export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
// export const ADD_SMURF = "ADD_SMURF";
// export const UPDATE_SMURFS = "UPDATE_SMURFS";

const url = "http://localhost:3333/smurfs";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: "FETCH_SMURFS_START" });
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      dispatch({ type: "FETCH_SMURFS_SUCCESS", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const postSmurf = (newSmurf) => (dispatch) => {
  console.log(newSmurf);
  axios
    .post(url, newSmurf)
    .then((res) => {
      console.log(res);
      dispatch({ type: "POST_SMURF", payload: newSmurf });
      //setSmurfs([...smurfs, newSmurf]);
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => {
  //   setFormValues(initialFormValues);
  // });
};

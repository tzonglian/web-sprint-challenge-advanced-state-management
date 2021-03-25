import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, postSmurf } from "../actions/appActions";
//import AddSmurfForm from "./AddSmurfForm";
import "./App.css";

function App(props) {
  const { fetchSmurfs } = props;

  useEffect(() => {
    fetchSmurfs();
  }, []);

  console.log(props);

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>
        <h2> Add a Smurf! </h2>
        {/* <AddSmurfForm /> */}
      </div>
      <div> Current Smurfs </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, postSmurf })(App);

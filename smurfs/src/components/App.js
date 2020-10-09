import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/appActions";
import AddSmurfForm from "./AddSmurfForm";
import "./App.css";

function App(props) {
  const { fetchSmurfs } = props;
  const [url] = useState("http://localhost:3333/smurfs");

  useEffect(() => {
    fetchSmurfs(url);
  }, [fetchSmurfs, url]);

  console.log(props);

  // addSmurf = (e) => {
  //   e.preventDefault();
  //   id += 1;
  //   console.log(this.state);
  //   const newSmurf = {
  //     name: this.state.name,
  //     id: id,
  //     age: this.state.age,
  //     height: this.state.height,
  //   };
  //   console.log(newSmurf);
  //   console.log(smurfs);
  //   smurfs.setState({
  //     smurfs: [...smurfs, newSmurf],
  //   });
  // };

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>
        <h2>Add Smurf</h2>
        <AddSmurfForm />
      </div>
      <div>
        <h2>Current Smurfs </h2>
        {props.smurfs.map((smurf) => (
          <>
            <h3>{smurf.name}</h3>
            <p>
              Id: {smurf.id}, Age: {smurf.age}, Height: {smurf.height}{" "}
            </p>
          </>
        ))}
      </div>
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

export default connect(mapStateToProps, { fetchSmurfs })(App);

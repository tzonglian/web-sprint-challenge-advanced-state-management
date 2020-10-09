import React from "react";
import { connect } from "react-redux";
import { UPDATE_SMURFS } from "../actions/appActions";

const initialFormValues = { name: "", id: "", age: "", height: "" };
let id = 0;

class AddSmurfForm extends React.Component {
  constructor() {
    super();
    this.state = initialFormValues;
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitSmurf = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState(initialFormValues);
    // this.props.addSmurf(e);
  };

  // addSmurf = (e) => {
  //   e.preventDefault();
  //   id += 1;
  // INITIAL STATE
  //   console.log(this.state);
  //   const newSmurf = {
  //     name: this.state.name,
  //     id: id,
  //     age: this.state.age,
  //     height: this.state.height,
  //   };
  // CREATED NEW SMURF
  //   console.log(newSmurf);

  //   console.log(smurfs);
  //   smurfs.setState({
  //     smurfs: [...smurfs, newSmurf],
  //   });
  // };

  render() {
    return (
      <form onSubmit={this.submitSmurf}>
        {/* Name */}
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={this.state.name}
          onChange={this.handleChanges}
        />
        {/* Age */}
        <input
          name="age"
          placeholder="Age"
          type="text"
          value={this.state.age}
          onChange={this.handleChanges}
        />
        {/* Height */}
        <input
          name="height"
          placeholder="Height"
          type="text"
          value={this.state.height}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddSmurfForm;
// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfs,
//     isLoading: state.isLoading,
//     error: state.error,
//   };
// };

// export default connect(mapStateToProps, {})(AddSmurfForm);

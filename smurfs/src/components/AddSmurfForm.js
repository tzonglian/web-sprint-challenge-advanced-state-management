import React from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/appActions";

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
    id += 1;
    const newSmurf = {
      name: this.state.name,
      id: id,
      age: this.state.age,
      height: this.state.height,
    };
    console.log(newSmurf);
    this.props.postSmurf(newSmurf);
    console.log(postSmurf);
    this.setState(initialFormValues);
  };

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

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurf })(AddSmurfForm);

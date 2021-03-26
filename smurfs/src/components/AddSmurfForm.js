import React from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/appActions";
import { useForm } from "react-hook-form";

const initialFormValues = {
  name: "",
  id: "",
  age: "",
  height: "",
};
let id = 1;

export default function AddSmurfForm() {
  const {
    register, // for form validation and submission
    handleSubmit, // react-hook form automatically validates input
    watch,
    errors,
  } = useForm();

  const onSubmit = (id, data) => {
    console.log(id, data);
    const newSmurf = {
      name: data.name,
      id: id,
      age: data.age,
      height: data.height,
    };
    id += 1;
  };
  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        defaultValue="type-a-smurf"
        ref={register({ required: true })}
      />
      {errors.name && <span>Reqired field</span>}
      <input type="submit" />
    </form>
  );
}

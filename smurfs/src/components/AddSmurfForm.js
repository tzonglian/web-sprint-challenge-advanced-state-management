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
        defaultValue="typeAsmurf"
        ref={register({ required: true, pattern: /^[A-Za-z]+$/ })}
      />
      <input
        type="text"
        name="age"
        defaultValue="99"
        ref={register({ required: true, pattern: /^\d+$/ })}
      />
      <input
        type="text"
        name="height"
        defaultValue="88"
        ref={register({ required: true, pattern: /^\d+$/ })}
      />
      {errors.name && <span>Required field</span>}
      <input type="submit" />
    </form>
  );
}

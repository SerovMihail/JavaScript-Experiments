import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const result = await fetch("http://localhost:3001/login", {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
      method: "POST",
    });
    console.log(result.json());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input name="email" defaultValue="test" ref={register} />

          {/* include validation with required or other standard HTML validation rules */}
          <input name="password" ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;

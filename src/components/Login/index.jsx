import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setUser}) {
  const [loginState, setLoginState] = useState({ email: "", password: "" });
  const nav = useNavigate()
  const onChanceInput = (e) => {
    setLoginState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onClickSubmit = (e) => {
    e.preventDefault();
    //go to data and check
    setUser(loginState)
    localStorage.setItem("user",JSON.stringify(loginState))
    nav('../')

  };
  return (
    <form
      onSubmit={onClickSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        type="text"
        name="email"
        placeholder="email||userName"
        onInput={onChanceInput}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onInput={onChanceInput}
      />      <button type="submit">login</button>
    </form>
  );
}

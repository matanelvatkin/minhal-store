import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [loginState, setLoginState] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const onChanceInput = (e) => {
    setLoginState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onClickSubmit = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((json) => {
      const userFound = json.find((user) => {
        if (user.email === e.target.email.value || user.username === e.target.email.value)
        if (user.password === e.target.password.value) {
          return true;
        }
        return false;
      });
        if (userFound) {
          setUser(userFound);
          localStorage.setItem("user", JSON.stringify(loginState));
          nav("../");
        }
        else{
          alert("User not found")
        }
      });
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
      />{" "}
      <button type="submit">login</button>
    </form>
  );
}

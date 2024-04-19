import React, { createContext, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

export const userContext = createContext()
export default function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
    <userContext.Provider value={{user,setUser}} >
      <Routes>
        <Route path="*" element={<Layout/>}/>
        <Route path="/categories" element={<Layout/>}/>
        <Route path="/login" element={<Login setUser ={setUser}/>}/>
        <Route path="/register" element={<Register setUser ={setUser}/>}/>
      </Routes>
    </userContext.Provider>
    </BrowserRouter>
  );
}

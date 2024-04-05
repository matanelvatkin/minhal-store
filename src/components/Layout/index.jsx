import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import ItemsList from "../ItemsList";
import Cart from "../Cart";
import itemsDate from "../../assets/data";
import "./style.css";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export const cartContext = createContext();

export default function Layout() {
  const [items, setItems] = useState(itemsDate);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const {user, setUser} = useContext(userContext);
  const navigate = useNavigate()
  useEffect(() => {
    const tempCategory = [];
    items.forEach((item) => {
      if (!tempCategory.includes(item.category)) {
        tempCategory.push(item.category);
      }
    });
    setCategories(tempCategory);
  }, [items]);

  useEffect(()=>{
    const localUser = JSON.parse(localStorage.getItem('user'))
    if(localUser) {
      setUser(localUser);
    }
    else{
      setUser()
      navigate('../login')
    }
  },[localStorage.user])

  useEffect(()=>{
    console.log(user);
  },[user])
  
  return (<>
      {user && (
        <cartContext.Provider value={{ cart, setCart }}>
          <div className="layout">
            <Header />
            <Navbar buttonsList={categories} setChose={setSelectedCategory} />
            <main className="main">
              <ItemsList
                items={
                  selectedCategory === "all"
                    ? items
                    : items.filter((item) => item.category === selectedCategory)
                }
              />
              <Cart /> 
            </main>
          </div>
        </cartContext.Provider>
      )}
  </>
  );
}

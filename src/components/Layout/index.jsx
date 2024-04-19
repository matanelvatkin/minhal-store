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
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(res=>
    setCategories(res))
  }, []); 

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      setUser(localUser);
    } else {
      setUser();
      navigate("../login");
    }
  }, [localStorage.user]);
  const getProducts = async () => {
    const json = await fetch("https://fakestoreapi.com/products").catch((err) =>
      console.log(err)
    );
    const data = await json.json();
    setItems(data)
  };
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    getProducts();
  }, []);

  return (
    <>
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

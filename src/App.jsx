import React from "react";
import Header from "./components/Header";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import CardRegister from "./components/CardsRegister";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function App(props, item) {
  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("/card")
      .then(({ data }) => {
        setCartItems(data);
      })
      .catch((err) => {});
  }, []);

  const onAdd = (id) => {
    const exist = cartItems.find((x) => x.id === id);
    localStorage.setItem("soldcount", JSON.stringify(cartItems));

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...id, qty: 1 }]);
    }
  };

  const onRemove = (id) => {
    const exist = cartItems.find((x) => x.id === id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header
        countCartItems={cartItems.length}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></Header>

      <div className="row">
        <Product onAdd={onAdd}></Product>
        <hr></hr>
        {props.userIDCard === props.userIDLoggedIn &&
        IsloggedInRedux === true ? (
          <CardRegister></CardRegister>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default App;

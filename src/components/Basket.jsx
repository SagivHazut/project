import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + 1 * c.price, 0);
  const totalPrice = itemsPrice;
  const [soldCount, setSoldCount] = useState(props.soldCount);
  const URL = "http://localhost:8181/api/cards/allcards";

  // const [soldcount, setSoldcount] = useState(() => {
  //   const saved = localStorage.getItem("soldcount");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });

  return (
    <form className="block">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item.qty)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">${item.price}</div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <br />
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>
            <br />
            <hr />
            <div className="row">
              <button
                type="submit"
                onClick={() =>
                  alert("Checkout Successfully!") || onRemove(props.id)
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

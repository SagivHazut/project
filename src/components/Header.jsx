import React from "react";
import "./Header.css";
import Basket from "./Basket";
import Popup from "reactjs-popup";
import cartimg from "../assets/shopping-cart.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const Header = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  let logout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  return (
    <header className="row center header">
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div>
        <a href="#/cart">
          <Popup
            trigger={
              <img
                src={cartimg}
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            }
            position="left top"
            contentStyle={{ width: "35%", height: "60%", border: "none" }}
          >
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket>
          </Popup>
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        {IsloggedInRedux === true ? (
          <NavLink
            aria-current="page"
            to="/login"
            onClick={logout}
            style={{ color: "white" }}
          >
            Logout
          </NavLink>
        ) : (
          <div>
            <Popup
              trigger={
                <a href="#/" style={{ color: "white" }}>
                  Login
                </a>
              }
              position="left top"
              contentStyle={{
                width: "35%",
                height: "60%",
                border: "none",
              }}
            >
              <LoginPage></LoginPage>
            </Popup>
            <br />
            <Popup
              trigger={
                <a href="#/ " style={{ color: "white" }}>
                  Sign Up
                </a>
              }
              position="left top"
              contentStyle={{ width: "35%", height: "60%", border: "none" }}
            >
              <SignupPage></SignupPage>
            </Popup>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;

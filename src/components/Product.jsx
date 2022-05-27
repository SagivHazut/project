import React from "react";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CardUpdate from "./CardUpdate";

export default function Product(props) {
  const [setSelectedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);

  const URL = "http://localhost:8181/api/cards/";

  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setCartItems(data);
      })
      .catch((err) => {});
  }, []);
  const handleEditUser = (id) => {
    let newUser = userArr.find((item) => {
      return item._id === id;
    });

    setSelectedUser({ ...newUser });
  };
  const [userArr] = useState([]);

  const handleUpdateUser = (id) => {
    let newCardsArr = cartItems.filter((item) => item._id !== id);
    setCartItems(newCardsArr);
    axios.get("/cards/allCards").then(({ data }) => {
      setCartItems(data);
      setSelectedUser(null);
      handleEditUser();
    });
  };
  const handleDeleteCard = (id) => {
    axios.delete(`${URL}${id}`).then((res) => {
      const newCardsArr = cartItems.filter((item) => item._id !== id);
      setCartItems(newCardsArr);
    });
  };
  const { onAdd } = props;
  return (
    <Fragment>
      <div className="card-group col-12">
        {cartItems.map((item) => {
          return (
            <Fragment>
              <div className="card " style={{ margin: "5px" }}>
                <div className="image">
                  <img
                    style={{ textAlign: "center" }}
                    src={item.image}
                    className="card-img-top "
                    alt="..."
                  />
                </div>

                <div style={{ textAlign: "center" }} className="card-body ">
                  <h5 style={{ textAlign: "center" }} className="card-title">
                    {item.name}
                  </h5>
                  <h5 style={{ textAlign: "center" }} className="card-text">
                    {item.description}
                  </h5>

                  <h6
                    style={{ textAlign: "center" }}
                    className="card-subtitle mb-2 font-bolder"
                  >
                    ₪{item.price}
                  </h6>
                </div>
                {props.userIDCard === props.userIDLoggedIn &&
                IsloggedInRedux === true ? (
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                    className="card-footer"
                  >
                    <CardUpdate
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      id={item._id}
                      onUpdateUser={handleUpdateUser}
                    ></CardUpdate>
                    <button
                      style={{ width: "100px", height: "60px" }}
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteCard(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div
                    className="card-footer"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        width: "100px",
                        height: "60px",
                      }}
                      onClick={() => onAdd(item)}
                    >
                      Buy{" "}
                    </button>
                  </div>
                )}
              </div>
              <br />
            </Fragment>
          );
        })}
      </div>
      <hr />
      <h1 style={{ textAlign: "center" }}>top 5 products</h1>

      <div className="card-group col-12">
        {cartItems.map((item) => {
          return (
            <Fragment>
              <div className="card " style={{ margin: "5px" }}>
                <div className="image">
                  <img
                    style={{ textAlign: "center" }}
                    src={item.image}
                    className="card-img-top "
                    alt="..."
                  />
                </div>

                <div style={{ textAlign: "center" }} className="card-body ">
                  <h5 style={{ textAlign: "center" }} className="card-title">
                    {item.name}
                  </h5>
                  <h5 style={{ textAlign: "center" }} className="card-text">
                    {item.description}
                  </h5>

                  <h6
                    style={{ textAlign: "center" }}
                    className="card-subtitle mb-2 font-bolder"
                  >
                    ₪{item.price}
                  </h6>
                </div>
                {props.userIDCard === props.userIDLoggedIn &&
                IsloggedInRedux === true ? (
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                    className="card-footer"
                  >
                    <CardUpdate
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      id={item._id}
                      onUpdateUser={handleUpdateUser}
                    ></CardUpdate>
                    <button
                      style={{ width: "100px", height: "60px" }}
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteCard(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div
                    className="card-footer"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        width: "100px",
                        height: "60px",
                      }}
                      onClick={() => onAdd(item)}
                    >
                      Buy{" "}
                    </button>
                  </div>
                )}
              </div>
              <br />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}

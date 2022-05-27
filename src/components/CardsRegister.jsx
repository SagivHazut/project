import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CardRegister = () => {
  const [cardsArr, setCardsArr] = useState([]);
  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setCardsArr(data);
      })
      .catch((err) => {});
  }, []);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };
  const handlePriceChange = (ev) => {
    setPrice(ev.target.value);
  };
  const handleImageChange = (ev) => {
    setImage(ev.target.value);
  };

  const handleSignup = () => {
    axios.post("/cards", {
      name,
      description,
      price,
      image,
    });
    axios
      .get("/cards/allCards")
      .then(({}) => {
        axios.get("/cards/allCards");
      })
      .catch((err) => {
        toast.error(err.response.data);
        if (err.response) {
        }
      });
  };

  return (
    <div className="wrapper" style={{ textAlign: "center", width: "20%" }}>
      <h1>Card Maker</h1>
      <div id="formContent">
        <form onSubmit={handleSignup}>
          <br />
          <div className="fadeIn first"></div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Title
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              onChange={handleNameChange}
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription1" className="form-label">
              Description
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription1"
              aria-describedby="DescriptionHelp"
              onChange={handleDescriptionChange}
              value={description}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPrice1" className="form-label">
              Price
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputPrice1"
              onChange={handlePriceChange}
              value={price}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImage1" className="form-label">
              Image
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputImage1"
              onChange={handleImageChange}
              value={image}
              required
            />
          </div>

          <button type="submit" className="btn btn-danger">
            Create a New Card
          </button>
        </form>

        <br />
      </div>
    </div>
  );
};

export default CardRegister;

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Fragment } from "react";
const CardUpdate = (props) => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [image, setImage] = useState(props.image);
  const URL = "http://localhost:8181/api/cards/";

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

  const handleUpdate = (ev) => {
    ev.preventDefault();
    props.onUpdateUser(
      axios
        .patch(`${URL}${props.id}`, { name, description, price, image })
        .then(() => {})

        .catch((err) => {
          toast.error(err.response.data);
          if (err.response) {
          }
        })
    );
  };

  return (
    <Fragment>
      <div className="wrapper fadeInDown">
        <h1>Edit Your Card</h1>
        <div id="formContent">
          <form onSubmit={handleUpdate}>
            <br />
            <div className="fadeIn first"></div>
            <br />
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
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
              </label>
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

            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn btn-danger btn-lg">
                Edit
              </button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default CardUpdate;

import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "laptop",
    price: ""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);
    const response = await axios.post(`${url}/api/item/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Laptop",
        price: ""
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
       toast.error(response.data.message);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input type="text" placeholder="Product name" onChange={onChangeHandler} value={data.name} required name="name"/>
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select onChange={onChangeHandler} name="category" id="">
                <option value="Speakers">Speakers</option>
                <option value="Player">Player</option>
                <option value="Laptop">Laptop</option>
                <option value="Watch">Watch</option>
                <option value="Glass">Glass</option>
                <option value="Camera">Camera</option>
                <option value="Bulb">Bulb</option>
                <option value="Headset">Headset</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                placeholder="$20"
              />
            </div>
          </div>
          <button type="submit" className="add-button">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;

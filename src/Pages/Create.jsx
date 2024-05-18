import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    user_id: "",
    user_name: "",
    user_email: "",
    user_phoneno: "",
    user_companyname: "",
  });
  const handleChange = (e) => {
    //e.target.value
    const { name, value } = e.target; //e.target.name e.target.value
    setCreateData((preData) => ({
      ...preData,
      [name]: value, //product_name:product name 1 => product_name:iphone
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        'https://6642ed723c01a059ea20d1de.mockapi.io/api/products/',
        createData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/products");
  };
  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            User Id:
            <input
              type="text"
              name="user_id"
              value={createData.user_id}
              onChange={handleChange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            User Name:
            <input
              type="text"
              name="user_name"
              value={createData.user_name}
              onChange={handleChange}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            User email:
            <input
              type="text"
              name="user_email"
              value={createData.user_email}
              onChange={handleChange}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            User Phoneno:
            <input
              type="text"
              name="user_phoneno"
              value={createData.product_price}
              onChange={handleChange}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            User companyname:
            <input
              type="text"
              name="user_companyname"
              value={createData.user_companyname}
              onChange={handleChange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <button className="btn btn-danger " type="submit">
            Create
          </button>
        </p>
      </form>
    </div>
  );
};

export default Create;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    user_id: "",
    user_name: "",
    user_email: "",
    user_phoneno: "",
    user_companyname: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://6642ed723c01a059ea20d1de.mockapi.io/api/products/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    //e.target.value
    const { name, value } = e.target; //e.target.name e.target.value
    setEditData((preData) => ({
      ...preData,
      [name]: value, //product_name:iphone
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6642ed723c01a059ea20d1de.mockapi.io/api/products/${id}`,
        editData
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
              value={editData.user_id}
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
              value={editData.user_name}
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
              value={editData.user_email}
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
              value={editData.user_phoneno}
              onChange={handleChange}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            user companyname:
            <input
              type="text"
              name="user_companyname"
              value={editData.user_companyname}
              onChange={handleChange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <button className="btn btn-danger " type="submit">
            Update
          </button>
        </p>
      </form>
    </div>
  );
};

export default Edit;
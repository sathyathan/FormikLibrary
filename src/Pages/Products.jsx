
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://6642ed723c01a059ea20d1de.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://6642ed723c01a059ea20d1de.mockapi.io/api/products/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <table className="table table-danger">
        <thead>
          <tr>
            <th scope="col">Num</th>
            <th scope="col">user_id</th>
            <th scope="col">user_name</th>
            <th scope="col">user_email</th>
            <th scope="col">user_phoneno</th>
            <th scope="col">user_companynme</th>
            <th scope="col" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((ele, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ele.id}</th>
                <td>{ele.user_id}</td>
                <td>{ele.user_name}</td>
                <td>{ele.user_email}</td>
                <td>{ele.user_phoneno}</td>
                <td>{ele.user_companyname}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleEdit(ele.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(ele.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="btn btn-danger m-5"
        onClick={() => {
          navigate("/create");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Products;

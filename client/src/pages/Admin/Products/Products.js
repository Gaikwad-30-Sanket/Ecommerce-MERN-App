import React, { useState, useEffect } from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
import AdminMenu from "../../../components/Layout/AdminMenu/AdminMenu";
import Layout from "../../../components/Layout/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./products.css"
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3 ">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap ">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2 pcart" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="product-img"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="pcard-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0, 30)}...</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

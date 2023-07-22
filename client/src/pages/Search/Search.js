import React from "react";
import Layout from "../../components/Layout/Layout/Layout";
import { useSearch } from "../../context/search";
import "./search.css"
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container searchContainer">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-8">
            {values?.results.map((p) => (
              <div className="card m-2 scart" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top sproduct-img"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="s-price-and-name-container"> 
                  <h5 className="s-my-product-name">{p.name}</h5>
                  <p className="s-my-product-price"> $ {p.price}</p>
                  </div>
                  <p className="s-my-product-desc">
                    {p.description.substring(0, 30)}...
                  </p>
                 <div s-btn-container>
                 <button className="s-md-btn">More Details</button>
                  <button className="s-md-btn">Add To Cart</button>
                 </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

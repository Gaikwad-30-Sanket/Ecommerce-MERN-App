import React, { useState, useEffect } from "react";  //useEffect hook is used in functional components in React to perform side effects such as data fetching, 
import { useNavigate } from "react-router-dom"; // hook is part of the React Router library and provides a way to programmatically navigate between different routes 
import { Checkbox, Radio } from "antd"; //antd library we are using for designing
import { Prices } from "../../components/Prices";
import { useCart } from "../../context/cart";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img2 from "../../img/img2.jpg"

import Layout from "../../components/Layout/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "./HomePage.css";
import ProductCard from "../productCard/ProductCard";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();  // this is global declared state
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category"); // backend address we have added into package.json thats why we putting routes directlty
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTotal Count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by category
  const handleFilter = (value, id) => { // if this function is called means we made changes in checkbox
    let all = [...checked];
    if (value) { // if we check then push checked item id into all array
      all.push(id);
    } else {
      all = all.filter((c) => c !== id); // otherwise remove it
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts(); // if we not applying filter then only call getAllProducts()
  }, [checked.length, radio.length]); // if checked length or radio length is changing then then this function will run

  useEffect(() => {
    if (checked.length || radio.length) filterProduct(); // if we apply the filter then call this function
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Gaikwad-Enterprices - Best offers "}>
      {/* banner image */}
      <Carousel
        className="my-carousel-top"
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={true}
        showStatus={true}
        showThumbs={false}
      >
        <div>
          <img
            className="my-carousel"
            src="https://www.prizor.in/wp-content/uploads/2022/08/prizor-banner-2.jpg"
            style={{
              height: "400px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          
        </div>
        <div>
          <img
            className="my-carousel"
            src={img2}
            style={{
              height: "400px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div>
          <img
            className="my-carousel"
            src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg"
            style={{
              height: "400px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </Carousel>
      {/* banner image */}

      <div className="container-fluid row mt-3 home-page ">
        <div className="col-md-3  hp-filter">
          <h4 className="text-center hp-filter-title">Filter By Category</h4>
          <div className="d-flex flex-column ">
            {categories?.map((c) => (
              <Checkbox
                className="my-checkbox"
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)} // e.target.checked represent checked status of check box true of checked and false for unchecked
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4 hp-filter-title">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (  // everything above prices is defined under the prices component
                <div key={p._id}>
                  <Radio className="my-radio" value={p.array}>
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="my-reset-button"
              onClick={() => window.location.reload()}  // here we are refreshing the page
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products</h1>
          <div className="all-product-container">
            {products?.map((p) => (
              <ProductCard p = {p} cart={cart} setCart={setCart}/>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

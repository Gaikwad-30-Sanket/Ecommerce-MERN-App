import { useNavigate } from "react-router-dom";
import "./productCard.css"
import toast from "react-hot-toast";
import { useState } from "react";
const ProductCard = ({ p, cart, setCart }) => {

  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="my-products-container" key={p._id} >
      <img
        src={`/api/v1/product/product-photo/${p._id}`}
        className=" my-category-img" 
        alt={p.name}
        onClick={() => navigate(`/product/${p.slug}`)}
      />
      <div className="my-product-info">
        <div className="price-and-name-container">
          <span className="my-product-name">{p.name}</span>
          <span className="my-product-price">
            {p.price.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </span>
        </div>
        <p className="my-product-desc">
          {p.description.substring(0, 30)}...
        </p>
        <div className="my-product-rating">
          <span className="fa fa-star star-checked"></span>
          <span className="fa fa-star star-checked"></span>
          <span className="fa fa-star star-checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className="button-container">

          <button
            className="my-product-button"
            onClick={() => {
              setCart([...cart, p]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...cart, p])
              );
              toast.success("Item Added to cart");
            }}
          >
            Add to cart
          </button>



        </div>

      </div>
      <span className={isLiked ? "fa fa-heart product-heart liked" : "fa fa-heart product-heart"} onClick={()=>setIsLiked(!isLiked)}></span>
    </div>
  )
}

export default ProductCard
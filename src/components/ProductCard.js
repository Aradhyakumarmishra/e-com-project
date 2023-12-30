import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from "react-router-dom"

const ProductCard = (props) => {

  const {grid}=props;
const location = useLocation();

  return (

   <>
   
      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == "/"
            ? "/product/:id"
            : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`} 
          className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent"><img src="heartimg.png" height="20px" width="20px" alt="wishlist" /></button>
          </div>
          <div className="product-image">
            <img src="watchimg.jpeg" className="img-fluid" alt="product image" />
            <img src="watchimg-1.jpeg" className="img-fluid" alt="product image" />
          </div>

          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">kids headphones bulk 10 pack multi coloured for student</h5>

            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />,
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>At Vero eos et accusamus et iustondifnissioms ducimusn qui
            blandities preasentium volutatum deleniti atque
            </p>
            <p className="price">$100.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src="compareimg.png" height="20px" width="20px" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="viewimg.png" height="20px" width="20px" alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="cartimg.png" height="20px" width="20px" alt="addcart" />
              </button>
            </div>
          </div>

        </Link>
      </div>




      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link
         to={`${
          location.pathname=="/"
           ? "/product/:id"
           :location.pathname=="/product/:id"
           ?"/product/:id"
          :":id"
          }`}
           className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link><img src="heartimg.png" height="20px" width="20px" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="watchimg.jpeg" className="img-fluid" alt="product image" />
            <img src="watchimg-1.jpeg" className="img-fluid" alt="product image" />
          </div>

          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">kids headphones bulk 10 pack multi coloured for student</h5>

            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />,
            <p className={`description ${grid===12?"d-block" : "d-none"}`}>At Vero eos et accusamus et iustondifnissioms ducimusn qui
              blandities preasentium volutatum deleniti atque
            </p>
            <p className="price">$100.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src="compareimg.png" height="20px" width="20px" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="viewimg.png" height="20px" width="20px" alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="cartimg.png" height="20px" width="20px" alt="addcart" />
              </button>
            </div>
          </div>

        </Link>
      </div>
   
   </>
  )
}

export default ProductCard
import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard"
import Color from "../components/Color"
import Container from '../components/Container';
const OurStore = () => {

  const [grid, setGrid] = useState(4);
  // alert(grid)

  return (
    <>

      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
     
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availabilty</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="">In Stock {1}</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" checked />
                      <label className="form-check-label" htmlFor="">Out of Stock {0}</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput1">From</label>
                    </div>

                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>

                  </div>

                  <h5 className="sub-title">Colours</h5>
                  <div>
                    <div>
                 <Color/>
                    </div>
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-1" />
                      <label className="form-check-label" htmlFor="color-1">S {2}</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-2" />
                      <label className="form-check-label" htmlFor="color-2">M {2}</label>
                    </div>

                  </div>

                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div claaName="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-40">
                      <img src="randomimg-1.jfif" alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for student</h5>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>

                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="randimimg-2.jfif" alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for student</h5>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>

                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="col-9">

              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By</p>
                    <select name="" className="form-control form-select" defaultValue={"manual"} id="">
                     
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">Alphabettically,A-Z</option>
                      <option value="title-descending">Alphabettically,Z-A</option>
                      <option value="price-ascending">Price, Low to high</option>
                      <option value="price-descending" >Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending" >Date, new to old</option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-itmes-center grid">
                      <img onClick={() => { setGrid(3) }} src="productimg-3.png" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => { setGrid(4) }} src="productimg-4.png" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => { setGrid(6) }} src="productimg-2.png" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => { setGrid(12) }} src="productimg-1.png" className="d-block img-fluid" alt="grid" />
                    </div>

                  </div>

                </div>
              </div>


              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>

            </div>
          </div>
        </Container>


    </>
  )
}

export default OurStore
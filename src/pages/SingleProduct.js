import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
import ProductCard from "../components/ProductCard"
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Container from '../components/Container';
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
const SingleProduct = () => {
    const props = { width: 400, height: 500, zoomWidth: 500, img: "https://th.bing.com/th/id/OIP.hJZHPHTsfdVYtqShlbITQwHaE2?w=290&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" }

    const [orderedProduct, setorderedProduct] = useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <>

            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />

            <Container class1="main-product-wrapper py-5 home-wrapper-2">
            
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>

                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img src="https://th.bing.com/th/id/OIP.hJZHPHTsfdVYtqShlbITQwHaE2?w=290&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-fluid" alt="watch" />
                                </div>
                                <div>
                                    <img src="https://th.bing.com/th/id/OIP.hJZHPHTsfdVYtqShlbITQwHaE2?w=290&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-fluid" alt="watch" />
                                </div>
                                <div>
                                    <img src="https://th.bing.com/th/id/OIP.hJZHPHTsfdVYtqShlbITQwHaE2?w=290&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-fluid" alt="watch" />
                                </div>
                                <div>
                                    <img src="https://th.bing.com/th/id/OIP.hJZHPHTsfdVYtqShlbITQwHaE2?w=290&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-fluid" alt="watch" />
                                </div>
                            </div>

                        </div>

                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">Kids Headphone Bulk 10 Multi Colored For Students</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />

                                        <p className="mb-0 t-review">(2 Reviews)</p>
                                    </div>
                                    <a className="review-btn" href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Type :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand :</h3>
                                        <p className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Category :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Tags :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Avalibality :</h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-coloumn mt-2 mb-3">
                                        <h3 className="product-heading">Size :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-coloumn mt-2 mb-3">
                                        <h3 className="product-heading">Color :</h3>
                                        <Color />
                                    </div>
                                    <div className="d-flex gap-15 align-items-center flex-coloumn mt-2 mb-3">
                                        <h3 className="product-heading">Quantity :</h3>
                                     <div className=''>
                                        <input type="number" name="" min={1} max={10} className="form-control" style={{width:"70px"}} id=""/>
                                     </div>

                                     <div lassName="d-flex align-items-center gap-30 ms-5">
                                            <button className="button border-0" type="submit">Add To Cart</button>
                                            <button className="button signup">Buy It Now</button>
                                     </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href=""><TbGitCompare className="fs-5 me-2" />Add To Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><AiOutlineHeart className="fs-5 me-2" />Add To Wishlist</a>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-10 flex-column my-3">
                                        <h3 className="product-heading">Shipping & Return :</h3>
                                        <p className="product-data">Free Shipping and returns available on all orderds!<br/> We
                                            all us domestic orders within<b> 5-10 business days</b></p>
                                    </div>

                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className="product-heading">Copy Product Link :</h3>
                                        <a href="javascript:void(0);" onClick={() => { copyToClipboard("https://th.bing.com/th/id/OIP.hJZHPHTsfdVYtqShlbITQwHaE2?w=290&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7") }}>
                                        Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </Container>

            <Container class1="description-wrapper py-5 home-wrapper-2">
              
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">

                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
             
            </Container>

            <Container class1="reviews-wrapper py-5 home-wrapper">
              
                    <div className="row">
                        <div className="col-12">
                            <h4 id="review">Reviews</h4>
                            <div className="review-inner-wrapper">

                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                edit={false}
                                                size={24}
                                                activeColor="#ffd700"
                                            />

                                            <p className="mb-0">Based on 2 Reviews</p>
                                        </div>
                                    </div>

                                    {orderedProduct && (
                                        <div>
                                            <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                                        </div>
                                    )}
                                    <div></div>
                                </div>

                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Aradhya</h6>
                                            <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
                                        </div>
                                        <p className="mt-3">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown printer took a
                                            galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
              

            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
            
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                         
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />

                    </div>
         
            </Container>

        </>
    )
}

export default SingleProduct
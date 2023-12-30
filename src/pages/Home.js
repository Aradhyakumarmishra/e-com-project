import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Marquee from 'react-fast-marquee'
import Container from '../components/Container';
//import {services} from "../utils/Data";
const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className='col-6'>
            <div className="main-banner position-relative p-3">
              <img src="banner1.jpeg"  className="img-fluid rounded-3" alt="" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGE FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>

              </div>
            </div>
          </div>


          <div className='col-6'>
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="catbanner.jpeg" className="img-fluid rounded-3" alt="" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>


                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="smartwatch.jpeg" className="img-fluid rounded-3" alt="" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br />or $41.62/mo.</p>


                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="mobilephone.jpeg" className="img-fluid rounded-3" alt="" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br />or $41.62/mo.</p>


                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="headphone.jpeg" className="img-fluid rounded-3" alt="" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>


                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>

    {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className='services d-flex align-items-center justify-content-between'>
            
             {services?.map((i,j)=>{
              return(
                <div className="d-flex align-items-center gap-15 key={j}">
                  <img src={i.image} alt="services"/>
                  <div>
                    <h6>{i.title}</h6>
                    <p className="mb-0">{i.tagline}</p>
                    </div>
                </div>
              );
             })}
             
             
         
                 
             
            
            </div>
          </div>
        </div>
    </Container> */}

 
  

      {/* AFTER FIRST SECTION========================================================================= */}



      <Container class1="home-wrapper-2 py-5">
    
          <div className="row">
            <div className="col-12">
              <div className='services d-flex align-items-center justify-content-between'>
                <div className="d-flex align-items-center gap-15">
                  <img src="service-2.jpeg" height="25px" width="25px" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="service-1.jpeg" height="25px" width="25px" alt="services" />
                  <div>
                    <h6>Daily Surprise offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="service-3.jpeg" height="25px" width="25px" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="service-4.jpeg" height="25px" width="25px" alt="services" />
                  <div>
                    <h6>Affrdable Price</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="service-5.jpeg" height="25px" width="25px" alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      </Container>


      {/* AFTER SECOND SECTION=================================================================== */}

      <Container class1="home-wrapper-2 py-5">
     
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="camera.jpeg" width="60px" height="50px" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="camera.jpeg" width="60px" height="50px" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="smart-tv.jpeg" width="50px" height="50px" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="head-phone.jpeg" width="50px" height="50px" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="camera.jpeg" width="60px" height="50px" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="camera.jpeg" width="60px" height="50px" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="smart-tv.jpeg" width="50px" height="50px" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="head-phone.jpeg" width="50px" height="50px" alt="camera" />
                </div>

              </div>
            </div>
          </div>
      </Container>

      {/* AFTER THIRLD SECTION=================================================================== */}

      <Container class1="featured-wrapper py-5 home-wrapper-2">
   
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    
      </Container>
     
     <Container class1="famous-wrapper py-5 home-wrapper-2">
  
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="famousimg-1.jpeg" className="img-fluid" alt="famous"/>
            <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $399or $16.62/no. for 24 no.*</p>
            </div>
            </div>
          </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="famousimg-2.jpeg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">37-inch 5k Retina display</p>
                </div>
              </div>
            </div>


            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="famousimg-3.jpeg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">Smartphone 13 pro</h6>
                  <p className="text-dark">Now in Green.from $999.00 or $41.62/mo. for 24 mo.Footnote</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="famousimg-4.jpeg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home speakers</h5>
                  <h6 className="text-dark">Room-filling sound.</h6>
                  <p className="text-dark">From $699 or $116.58/mo. for mo.</p>
                </div>
              </div>
            </div>


        </div>
    
     </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">

          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                  <img src="imgbrand-1.png" height="60px" width="60px" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="imgbrand-2.jpeg" height="60px" width="60px" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="imgbrand-3.png" height="60px" width="60px" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="imgbrand-4.png" height="60px" width="60px" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="imgbrand-5.png" height="60px" width="60px" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="imgbrand-6.jpg" height="60px" width="60px" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="imgbrand-7.jpeg" height="60px" width="60px" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="imgbrand-8.webp" height="60px" width="60px" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
  
      </Container>

      {/* AFTER FOURTH SECTION=============================================================================== */}

   


      <Container class1="featured-wrapper py-5 home-wrapper-2">
      
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
     
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
  
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>

          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>

      
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard/>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">

          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard/>
            </div>

            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>
          </div>
    
      </Container>

    </>
  )
}

export default Home
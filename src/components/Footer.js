import React from 'react'
import {Link} from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram}from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="news.jpeg" alt="news" height="35px" width="35px" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">

              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address..." aria-lable="Your Email Address..." aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2" p-3>
                  Subscribe
                </span>
              </div>

            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact</h4>
              <div>
                <address className="text-white fs-6">
                  hno : 277 Near Vill chopal,<br/>Sonipat,Haryana<br/>
                  Pincode: 131103
                </address>
                <a href="tel:+8264954234" className="mt-3 d-block mb-1">+91 8264954234</a>
                <a href="mailto:aradhya@gmail.com" className="mt-2 d-block mb-0 text-white">
                  aradhya@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                 <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                   <BsGithub className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
               <BsYoutube className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shiping Policy</Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Link</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()};Powered by Developer's</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
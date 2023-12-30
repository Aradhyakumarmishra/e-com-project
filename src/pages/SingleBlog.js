import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container';
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi"
const SingleBlog = () => {
  return (
    <>
    
          <Meta title={"Dynamic Blog Name"} />
          <BreadCrumb title="Dynamic Blog Name" />

          <Container class1="blog-wrapper home-wrapper-2 py-5">
    
                  <div className="row">
                      <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft className="fs-4"/>Go back to Blogs</Link>
                            <h3 className="title">
                                A Beatiful Sunday Morning Renaissance
                            </h3>
                            <img src="" className="img-fluid w-100 my-4" alt="blog"/>
                              <p>WebGenerate Lorem Ipsum placeholder text for use in your
                                 graphic, print and web layouts, and discover plugins for
                                  your favorite writing, design and blogging tools. Explore
                                   the origins, history and meaning of the famous passage,
                                    and learn how Lorem Ipsum went from </p>
                        </div>
                      </div>
              
                  </div>
        
          </Container>
    
    </>
  )
}

export default SingleBlog
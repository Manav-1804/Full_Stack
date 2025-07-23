import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import { Form } from 'react-router-dom'
import Footer from '../Common/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Blog() {
    const [about, setabout] = useState([])
    const [from, setfrom] = useState([])
    useEffect(() => {
        fetchdata()
    }, [])


    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blogs")
        console.log(res.data)
        setabout(res.data)

          const ras = await axios.get("http://localhost:3000/training")
        console.log(ras.data)
        setfrom(ras.data)
    }
    
    return (
        <div>
            <Helmet>
                {/* <!-- JavaScript Libraries --> */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/lightbox/js/lightbox.min.js"></script>


                {/* <!-- Template Javascript --> */}
                <script src="js/main.js"></script>
            </Helmet>
            <Header />
            <Nav title="Blogs" name="Blog" />
            <div>
                {/* Blogs Start */}
                <div className="container-fluid blog py-5">
                    <div className="container py-5">
                        <div className="pb-5">
                            <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Blog &amp; News</h4>
                            <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Latest News &amp; Articles</h1>
                        </div>
                        <div className="blog-carousel owl-carousel  wow fadeInUp"  data-wow-delay="0.1s">

                            {

                                about && about.map((data) => {
                                    return (

                                        <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="blog-img rounded-top">
                                                <img src={data.img} style={{height:"250px"}}className="img-fluid rounded-top w-100" alt="Image" />
                                            </div>
                                            <div className="bg-light rounded-bottom p-4">
                                                
                                                <a href="#" className="h4 mb-3 d-block">{data.title}</a>
                                                <p className="mb-3">{data.dec.slice(0,129)}</p>
                                                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                            </div>
                                        </div>


                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Blogs End */}
                {/* Counter Facts Start */}
                <div className="container-fluid counter-facts py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter">
                                    <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                                        <h3>Dance Classes</h3>
                                    </div>
                                    <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                                        <span className="counter-value" data-toggle="counter-up">158</span>
                                        <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter">
                                    <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                                        <h3>Best Instructor</h3>
                                    </div>
                                    <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                                        <span className="counter-value" data-toggle="counter-up">49</span>
                                        <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="counter">
                                    <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                                        <h3>Total Brunch</h3>
                                    </div>
                                    <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                                        <span className="counter-value" data-toggle="counter-up">17</span>
                                        <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="counter">
                                    <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                                        <h3>Happy customer</h3>
                                    </div>
                                    <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                                        <span className="counter-value" data-toggle="counter-up">567</span>
                                        <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter Facts End */}
                {/* Training Start */}
                <div className="container-fluid training py-5">
                    <div className="container py-5">
                        <div className="pb-5">
                            <div className="row g-4 align-items-end">
                                <div className="col-xl-8">
                                    <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Dance Training</h4>
                                    <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Training Platform</h1>
                                </div>
                                <div className="col-xl-4 text-xl-end wow fadeInUp" data-wow-delay="0.3s">
                                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">View All Training</a>
                                </div>
                            </div>
                        </div>
                        <div className="training-carousel owl-carousel  wow fadeInUp" data-wow-delay="0.1s">
                           
                            {

                                from && from.map((data) => {
                                    return (

                                        <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="training-img rounded-top">
                                                <img src={data.img} style={{height:"250px"}}className="img-fluid rounded-top w-100" alt="Image" />
                                                
                                            </div>
                                            <div className="rounded-bottom border border-top-0 p-4">
                                                <a href="#" className="h4 mb-3 d-block">{data.name}</a>
                                                <p className="mb-3">{data.dec}</p>
                                                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Training End */}
            </div>
            <Footer />
        </div>
    )
}

export default Blog
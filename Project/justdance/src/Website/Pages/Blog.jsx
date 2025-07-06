import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import { Form } from 'react-router-dom'
import Footer from '../Common/Footer'

function Blog() {
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
            <Nav title="Blogs" name="Blog"/>
            <div>
                {/* Blogs Start */}
                <div className="container-fluid blog py-5">
                    <div className="container py-5">
                        <div className="pb-5">
                            <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Blog &amp; News</h4>
                            <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Latest News &amp; Articles</h1>
                        </div>
                        <div className="blog-carousel owl-carousel pt-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-img rounded-top">
                                    <img src="img/class-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="bg-light rounded-bottom p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                                        <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                                    </div>
                                    <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-img rounded-top">
                                    <img src="img/class-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="bg-light rounded-bottom p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                                        <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                                    </div>
                                    <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.5s">
                                <div className="blog-img rounded-top">
                                    <img src="img/class-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="bg-light rounded-bottom p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                                        <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                                    </div>
                                    <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.7s">
                                <div className="blog-img rounded-top">
                                    <img src="img/class-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="bg-light rounded-bottom p-4">
                                    <div className="d-flex justify-content-between mb-4">
                                        <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                                        <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                                    </div>
                                    <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
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
                        <div className="training-carousel owl-carousel pt-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.1s">
                                <div className="training-img rounded-top">
                                    <img src="img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                    <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>01</h1>
                                </div>
                                <div className="rounded-bottom border border-top-0 p-4">
                                    <a href="#" className="h4 mb-3 d-block">Dance Theater</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.3s">
                                <div className="training-img rounded-top">
                                    <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                    <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>02</h1>
                                </div>
                                <div className="rounded-bottom border border-top-0 p-4">
                                    <a href="#" className="h4 mb-3 d-block">Personalized Learning</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.5s">
                                <div className="training-img rounded-top">
                                    <img src="img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                    <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>03</h1>
                                </div>
                                <div className="rounded-bottom border border-top-0 p-4">
                                    <a href="#" className="h4 mb-3 d-block">Convenient Dancing</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.7s">
                                <div className="training-img rounded-top">
                                    <img src="img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                    <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>04</h1>
                                </div>
                                <div className="rounded-bottom border border-top-0 p-4">
                                    <a href="#" className="h4 mb-3 d-block">Dance Theater</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.9s">
                                <div className="training-img rounded-top">
                                    <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                    <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>05</h1>
                                </div>
                                <div className="rounded-bottom border border-top-0 p-4">
                                    <a href="#" className="h4 mb-3 d-block">Personalized Learning</a>
                                    <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
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
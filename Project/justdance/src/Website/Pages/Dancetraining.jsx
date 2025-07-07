import React from 'react'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'

function Dancetraining() {
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
            <Nav title="Dance Training" name="Dance" />
            <div>
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
                {/* Video Gallery Start */}
                <div className="container-fluid gallery pb-5">
                    <div className="container pb-5">
                        <div className="pb-5">
                            <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Dance Gallery</h4>
                            <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Dance class gallery</h1>
                        </div>
                        <div className="tab-class wow fadeInUp" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-center pb-4">
                                <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                                    <a className="d-flex py-2 px-5 rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                                        <span className="text-dark">All</span>
                                    </a>
                                </li>
                                <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                                        <span className="text-dark">Dance Practice</span>
                                    </a>
                                </li>
                                <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                                        <span className="text-dark">Dance Training</span>
                                    </a>
                                </li>
                                <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                                        <span className="text-dark">Dance Growth</span>
                                    </a>
                                </li>
                                <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                                        <span className="text-dark">Dance Improvement</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-2">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.9s">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2 wow fadeInUp" data-wow-delay="0.9s">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="GalleryTab-2" className="tab-pane fade show p-0">
                                    <div className="row g-2">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="GalleryTab-3" className="tab-pane fade show p-0">
                                    <div className="row g-2">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="GalleryTab-4" className="tab-pane fade show p-0">
                                    <div className="row g-2">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="GalleryTab-5" className="tab-pane fade show p-0">
                                    <div className="row g-2">
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="video h-100">
                                                <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                            <div className="video h-100">
                                                <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                                                <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Video */}
                <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* 16:9 aspect ratio */}
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video Gallery End */}
            </div>

            <Footer />
        </div>
    )
}

export default Dancetraining
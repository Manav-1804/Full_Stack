import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
function Event() {
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
            <Nav title="Events" name="Event" />

            <div>
                {/* Events Start */}
                <div className="container-fluid events py-5">
                    <div className="container py-5">
                        <div className="pb-5">
                            <div className="row g-4 align-items-end">
                                <div className="col-xl-8">
                                    <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Events</h4>
                                    <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Upcoming Events</h1>
                                </div>
                                <div className="col-xl-4 text-xl-end pb-3 wow fadeInUp" data-wow-delay="0.3s">
                                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">View All Events</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="event-item rounded">
                                    <div className="position-relative">
                                        <img src="img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                        <div className="bg-primary text-white fw-bold rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>JAN 20</div>
                                        <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                                            <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                                            <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                                        </div>
                                    </div>
                                    <div className="border border-top-0 rounded-bottom p-4">
                                        <a href="#" className="h4 mb-3 d-block">Open House - Springs Dance</a>
                                        <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                        <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="event-item rounded">
                                    <div className="position-relative">
                                        <img src="img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                        <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>JUN 30</div>
                                        <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                                            <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                                            <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                                        </div>
                                    </div>
                                    <div className="border rounded-bottom p-4">
                                        <a href="#" className="h4 mb-3 d-block">Open House And Registration</a>
                                        <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                        <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="event-item rounded">
                                    <div className="position-relative">
                                        <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                        <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>MAY 15</div>
                                        <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                                            <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                                            <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                                        </div>
                                    </div>
                                    <div className="border rounded-bottom p-4">
                                        <a href="#" className="h4 mb-3 d-block">Open House Morris Dance</a>
                                        <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                        <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="event-item rounded">
                                    <div className="position-relative">
                                        <img src="img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                        <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>APR 2</div>
                                        <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                                            <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                                            <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                                        </div>
                                    </div>
                                    <div className="border rounded-bottom p-4">
                                        <a href="#" className="h4 mb-3 d-block">Open House Dance Studio</a>
                                        <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                                        <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Events End */}
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
                {/* Video Gallery Start */}
                <div className="container-fluid gallery py-5">
                    <div className="container py-5">
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

export default Event
import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
function Services() {
    return (
        <div>
            <Header />
            <Nav />
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Services</h3>
                    <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><NavLink to="/"className="text-white">Home</NavLink></li>
                        <li className="breadcrumb-item"><a href="#" className="text-white">Pages</a></li>
                        <li className="breadcrumb-item active text-secondary">Services</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* Services Start */}
            <div className="container-fluid service overflow-hidden py-5">
                <div className="container py-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Visa Categories</h5>
                        </div>
                        <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-inner">
                                    <div className="service-img">
                                        <img src="img/service-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="service-title">
                                        <div className="service-title-name">
                                            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                <a href="#" className="h4 text-white mb-0">Job Visa</a>
                                            </div>
                                            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                        </div>
                                        <div className="service-content pb-4">
                                            <a href="#"><h4 className="text-white mb-4 py-3">Job Visa</h4></a>
                                            <div className="px-4">
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="#">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="service-inner">
                                    <div className="service-img">
                                        <img src="img/service-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="service-title">
                                        <div className="service-title-name">
                                            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                <a href="#" className="h4 text-white mb-0">Business Visa</a>
                                            </div>
                                            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                        </div>
                                        <div className="service-content pb-4">
                                            <a href="#"><h4 className="text-white mb-4 py-3">Business Visa</h4></a>
                                            <div className="px-4">
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="service-inner">
                                    <div className="service-img">
                                        <img src="img/service-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="service-title">
                                        <div className="service-title-name">
                                            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                <a href="#" className="h4 text-white mb-0">Diplometic Visa</a>
                                            </div>
                                            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                        </div>
                                        <div className="service-content pb-4">
                                            <a href="#"><h4 className="text-white mb-4 py-3">Diplometic Visa</h4></a>
                                            <div className="px-4">
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-inner">
                                    <div className="service-img">
                                        <img src="img/service-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="service-title">
                                        <div className="service-title-name">
                                            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                <a href="#" className="h4 text-white mb-0">Students Visa</a>
                                            </div>
                                            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                        </div>
                                        <div className="service-content pb-4">
                                            <a href="#"><h4 className="text-white mb-4 py-3">Students Visa</h4></a>
                                            <div className="px-4">
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="service-inner">
                                    <div className="service-img">
                                        <img src="img/service-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="service-title">
                                        <div className="service-title-name">
                                            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                <a href="#" className="h4 text-white mb-0">Residence Visa</a>
                                            </div>
                                            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                        </div>
                                        <div className="service-content pb-4">
                                            <a href="#"><h4 className="text-white mb-4 py-3">Residence Visa</h4></a>
                                            <div className="px-4">
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="service-inner">
                                    <div className="service-img">
                                        <img src="img/service-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="service-title">
                                        <div className="service-title-name">
                                            <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                <a href="#" className="h4 text-white mb-0">Tourist Visa</a>
                                            </div>
                                            <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                        </div>
                                        <div className="service-content pb-4">
                                            <a href="#"><h4 className="text-white mb-4 py-3">Tourist Visa</h4></a>
                                            <div className="px-4">
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}

            <div>
                {/* Counter Facts Start */}
                <div className="container-fluid counter-facts py-5">
                    <div className="container py-5">
                        <div className="row g-4">
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-passport" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Categories</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">31</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-users" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Team Members</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">377</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-user-check" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Process</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">4.9</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>K</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-handshake" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Success Rates</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">98</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter Facts End */}
                {/* Countries We Offer Start */}
                <div className="container-fluid country overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: 70 }}>
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
                            </div>
                            <h1 className="display-5 mb-4">Immigration &amp; visa services following Countries</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 text-center">
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/brazil.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">Brazil</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/india.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">india</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/usa.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">New York</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/italy.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">Italy</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Countries</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Countries We Offer End */}
                {/* Training Start */}
                <div className="container-fluid training bg-light overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">CHECK OUR TRAINING</h5>
                            </div>
                            <h1 className="display-5 mb-4">Get the Best Coacing Service Training with Our Travisa</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">IELTS</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">IELTS Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">TOEFL</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">TOEFL Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">PTE</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">PTE Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">OET</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">OET Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">View More</a>
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

export default Services
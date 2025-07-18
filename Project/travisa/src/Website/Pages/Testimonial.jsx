import React from 'react'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
import { NavLink } from 'react-router-dom'

function Testimonial() {
    return (
        <div>
            <Header />
            <Nav title="Our Testimonial" name="Testimonial"/>
            <div>
               
                {/* Testimonial Start */}
                <div className="container-fluid testimonial overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">OUR CLIENTS RIVIEWS</h5>
                            </div>
                            <h1 className="display-5 mb-4">What Our Clients Say</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow zoomInDown" data-wow-delay="0.2s">
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
        <Footer />
        </div>
    )
}

export default Testimonial
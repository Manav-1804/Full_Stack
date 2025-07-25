import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-dark p-0">
                    <div className="row gx-0 d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center me-4">
                                <small className="fa fa-map-marker-alt text-primary me-2" />
                                <small>123 Street, New York, USA</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center">
                                <small className="far fa-clock text-primary me-2" />
                                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="h-100 d-inline-flex align-items-center me-4">
                                <small className="fa fa-phone-alt text-primary me-2" />
                                <small>+012 345 6789</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center mx-n2">
                                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-square btn-link rounded-0" href><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar Start */}
                <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                    <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                        <h2 className="m-0 text-primary">Solartec</h2>
                    </a>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <NavLink to={"/"} className="nav-item nav-link active">Home</NavLink>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Service</a>
                            <a href="project.html" className="nav-item nav-link">Project</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu bg-light m-0">
                                    <a href="feature.html" className="dropdown-item">Feature</a>
                                    <a href="quote.html" className="dropdown-item">Free Quote</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3" /></a>
                    </div>
                </nav>
                {/* Navbar End */}
            </div>

        </div>
    )
}

export default Header
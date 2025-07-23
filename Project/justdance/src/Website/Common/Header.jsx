import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-secondary px-5 d-none d-lg-block">
                <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <a href="#" className="text-light me-4"><i className="fas fa-map-marker-alt text-primary me-2" />Find A Location</a>
                            <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2" />+01234567890</a>
                            <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2" />Example@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex justify-content-end">
                            <div className="border-end border-start py-1">
                                <a href="#" className="btn text-primary"><i className="fab fa-facebook-f" /></a>
                            </div>
                            <div className="border-end py-1">
                                <a href="#" className="btn text-primary"><i className="fab fa-twitter" /></a>
                            </div>
                            <div className="border-end py-1">
                                <a href="#" className="btn text-primary"><i className="fab fa-instagram" /></a>
                            </div>
                            <div className="border-end py-1">
                                <a href="#" className="btn text-primary"><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                    <a href="#" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fas fa-biohazard me-3" />JustDance</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/event" className="nav-item nav-link">Events</NavLink>
                            <NavLink to="/blog" className="nav-item nav-link">Blogs</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/classes" className="dropdown-item">Our classes</NavLink>
                                    <NavLink to="/dance" className="dropdown-item">Dance Training</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="/test" className="dropdown-item">Testimonial</NavLink>
                                    
                                    
                                </div>
                            </div>
                            <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Register Now</a>
                    </div>
                </nav>
            </div>
            {/* Navbar & Hero End */}

        </div>
    )
}

export default Header
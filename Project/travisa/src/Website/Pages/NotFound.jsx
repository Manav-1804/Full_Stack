import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <Header />
            <Nav />
            <div>
                {/* Header Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">404 Pages</h3>
                        <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
                            <li className="breadcrumb-item"><NavLink to="/"className="text-white">Home</NavLink></li>
                            <li className="breadcrumb-item"><a href="#" className="text-white">Pages</a></li>
                            <li className="breadcrumb-item active text-secondary">404 Page</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
                {/* 404 Start */}
                <div className="container-fluid bg-light py-5">
                    <div className="container py-5 text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <i className="bi bi-exclamation-triangle display-1 text-secondary" />
                                <h1 className="display-1">404</h1>
                                <h1 className="mb-4">Page Not Found</h1>
                                <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                                <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 404 End */}
            </div>
        <Footer />
        </div>
    )
}

export default NotFound
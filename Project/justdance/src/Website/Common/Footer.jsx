import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div>
                {/* Footer Start */}
                <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <div className="footer-item">
                                        <h4 className="text-white mb-4">JustDanc</h4>
                                        <p className="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                                        <div className="d-flex">
                                            <a className="btn btn-lg-square btn-primary rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fab fa-instagram" /></a>
                                            <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="text-white mb-4">Address</h4>
                                    <div className="d-flex align-items-center mb-3">
                                        <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fas fa-map-marker-alt" /></a>
                                        <div className="text-white ms-2">
                                            <p className="mb-0">0123.. Street, New York, USA</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fa fa-phone-alt" /></a>
                                        <div className="text-white ms-2">
                                            <p className="mb-0">+012 345 67890</p>
                                            <p className="mb-0">+012 345 67890</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fas fa-envelope" /></a>
                                        <div className="text-white ms-2">
                                            <p className="mb-0">info@example.com</p>
                                            <p className="mb-0">info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="text-white mb-4">Quick Links</h4>
                                    <a href="#" className="footer-link"> About Us</a>
                                    <a href="#" className="footer-link"> Classes</a>
                                    <a href="#" className="footer-link"> Privacy Policy</a>
                                    <a href="#" className="footer-link"> Terms &amp; Conditions</a>
                                    <a href="#" className="footer-link"> Schedule</a>
                                    <a href="#" className="footer-link"> FAQ</a>
                                    <a href="#" className="footer-link"> Contact Us</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <div className="footer-item">
                                        <h4 className="text-white mb-4">Newsletter</h4>
                                        <p className="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                                        <div className="position-relative mx-auto rounded-pill">
                                            <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                            <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Copyright Start */}
                <div className="container-fluid copyright py-4">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-start mb-md-0">
                                <span className="text-white"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2" />Just Dance</a>, All right reserved.</span>
                            </div>
                            <div className="col-md-6 text-center text-md-end text-white">
                                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                                Designed By <NavLink className="border-bottom text-white" to="/">Manav Prajapati</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
            </div>

        </div>
    )
}

export default Footer
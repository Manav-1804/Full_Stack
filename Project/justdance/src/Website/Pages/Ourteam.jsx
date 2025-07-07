import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'

function Ourteam() {
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
            </Helmet>
            <Header />
            <Nav title="Our Team" name="Team" />
            {/* Team Start */}
            <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div className="pb-5">
                        <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Dance Teachers</h4>
                        <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Professional Instructor</h1>
                    </div>
                    <div className="team-carousel owl-carousel pt-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item border rounded wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-img bg-secondary rounded-top">
                                <img src="img/team-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                <div className="team-icon">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="team-content text-center p-4">
                                <a href="#" className="h4">Emily Ava</a>
                                <p className="mb-0 text-primary">Instructor</p>
                            </div>
                        </div>
                        <div className="team-item border rounded wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-img bg-secondary rounded-top">
                                <img src="img/team-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                <div className="team-icon">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="team-content text-center p-4">
                                <a href="#" className="h4">Emily Ava</a>
                                <p className="mb-0 text-primary">Instructor</p>
                            </div>
                        </div>
                        <div className="team-item border rounded wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-img bg-secondary rounded-top">
                                <img src="img/team-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                <div className="team-icon">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="team-content text-center p-4">
                                <a href="#" className="h4">Emily Ava</a>
                                <p className="mb-0 text-primary">Instructor</p>
                            </div>
                        </div>
                        <div className="team-item border rounded wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-img bg-secondary rounded-top">
                                <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                <div className="team-icon">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="team-content text-center p-4">
                                <a href="#" className="h4">Emily Ava</a>
                                <p className="mb-0 text-primary">Instructor</p>
                            </div>
                        </div>
                        <div className="team-item border rounded wow fadeInUp" data-wow-delay="0.9s">
                            <div className="team-img bg-secondary rounded-top">
                                <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                <div className="team-icon">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="team-content text-center p-4">
                                <a href="#" className="h4">Emily Ava</a>
                                <p className="mb-0 text-primary">Instructor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}

            <Footer />
        </div>
    )
}

export default Ourteam
import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'

function Contact() {
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
            <Nav title="Contact Us" name="Contact" />
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="pb-5">
                        <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Contact Us</h4>
                        <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Get In Touch</h1>
                    </div>
                    <div className="bg-light rounded p-4 pb-0">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                                <h2 className="display-5 mb-2">Form</h2>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                                                <label htmlFor="phone">Your Phone</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="project" placeholder="Project" />
                                                <label htmlFor="project">Your Project</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center mb-5">
                                    <div className="mb-3"><i className="fa fa-home fa-2x text-primary" /></div>
                                    <div className="ms-4">
                                        <h4>Addresses</h4>
                                        <p className="mb-0">123 ranking Street, New York, USA</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <div className="mb-3"><i className="fa fa-map-marker-alt fa-2x text-primary" /></div>
                                    <div className="ms-4">
                                        <h4>Addresses</h4>
                                        <p className="mb-0">123 ranking Street, New York, USA</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <div className="mb-3"><i className="fa fa-phone-alt fa-2x text-primary" /></div>
                                    <div className="ms-4">
                                        <h4>Mobile</h4>
                                        <p className="mb-0">+012 345 67890</p>
                                        <p className="mb-0">+012 345 67890</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <div className="mb-3"><i className="fa fa-envelope-open fa-2x text-primary" /></div>
                                    <div className="ms-4">
                                        <h4>Email</h4>
                                        <p className="mb-0">info@example.com</p>
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="me-4">
                                        <i className="fas fa-share-alt fa-2x text-primary" />
                                    </div>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square btn-primary rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="rounded h-100 pb-3">
                                    <iframe className="rounded w-100" style={{ height: 500 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}


            <Footer />
        </div>
    )
}

export default Contact
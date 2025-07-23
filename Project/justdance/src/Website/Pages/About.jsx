import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Nav from '../Common/Nav'
import axios from 'axios'
import { useEffect, useState } from 'react'

function About() {
    const [about, setabout] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])


    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/about")
        console.log(res.data)
        setabout(res.data)
    }
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
            <Nav title="About Us" name="About" />

            <div>
                {/* About Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
                                <div className="border bg-secondary rounded">
                                    <img src="img/about-2.png" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.3s">
                                <h4 className="text-secondary sub-title fw-bold">about The Dance School</h4>
                                <h1 className="display-3 mb-4"><strong className="text-primary">JustDance</strong>, We have been teaching dance since 2001</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint commodi alias, eius incidunt similique exercitationem magni quod recusandae maiores ducimus non porro neque odio explicabo, doloribus deleniti rem sequi adipisci sed ab qui dolorem. Optio sint eius illum consequuntur. Odit.
                                </p>
                                <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore illum nemo deserunt reiciendis perferendis incidunt ullam expedita dolor, voluptas repellat necessitatibus dolore repellendus dolorum, voluptate dolorem. Debitis quis ipsa ullam neque corrupti maxime ad magni, tempore, aperiam rerum, perspiciatis fuga.
                                </p>
                                <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
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
                {/* Team Start */}
                <div className="container-fluid team py-5">
                    <div className="container  text-center">
                        <div className="pb-5">
                            <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Dance Teachers</h4>
                            <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.2s">Our Professional Instructor</h1>
                        </div>

                        <div className="team-carousel owl-carousel  wow fadeInUp" data-wow-delay="0.1s">

                            {

                                about && about.map((data) => {
                                    return (

                                        <div className="team-item border rounded wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="team-img bg-secondary rounded-top">
                                                <img src={data.img} style={{ height: "300px" }} className="img-fluid rounded-top w-100" alt="Image" />
                                                <div className="team-icon">
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                                </div>
                                            </div>
                                            <div className="team-content text-center p-4">
                                                <a href="#" className="h4">{data.name}</a>
                                                <p className="mb-0 text-primary">{data.role}</p>
                                            </div>
                                        </div>


                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                {/* Team End */}
            </div>

            <Footer />
        </div>
    )
}



export default About
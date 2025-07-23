import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Event() {
    const [about, setabout] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])


    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/event")
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
                            {
                                about && about.map((data) => {
                                    return (

                                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="event-item rounded">
                                                <div className="position-relative">
                                                    <img src={data.img} className="img-fluid rounded-top w-100" style={{ height: "350px" }} alt="Image" />
                                                    <div className="bg-primary text-white fw-bold rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>JAN 20</div>
                                                    <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                                                        <a href="#" className="text-dark"><i className="fas fa-clock text-primary" />{data.time}</a>
                                                        <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> {data.city}</a>
                                                    </div>
                                                </div>
                                                <div className="border border-top-0 rounded-bottom p-4">
                                                    <a href="#" className="h4 mb-3 d-block">{data.title}</a>
                                                    <p className="mb-3">{data.dec.slice()}</p>
                                                    <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                                                </div>
                                            </div>
                                        </div>


                                    )
                                })
                            }

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

            </div>

            <Footer />
        </div>
    )
}

export default Event
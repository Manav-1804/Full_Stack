import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'

function Testimonial() {
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
      <Nav title="Testimonial" name="Testimonial" />
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="pb-5">
            <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">OUR CLIENTS RIVIEWS</h4>
            <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">What Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel pt-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="testimonial-item border text-center rounded">
              <div className="rounded-circle position-absolute" style={{ width: 100, height: 100, top: 25, left: '50%', transform: 'translateX(-50%)' }}>
                <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="img" />
              </div>
              <div className="position-relative" style={{ marginTop: 140 }}>
                <h5 className="mb-0">Person Name</h5>
                <p>Profession</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content p-4">
                <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="testimonial-item border text-center rounded">
              <div className="rounded-circle position-absolute" style={{ width: 100, height: 100, top: 25, left: '50%', transform: 'translateX(-50%)' }}>
                <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="img" />
              </div>
              <div className="position-relative" style={{ marginTop: 140 }}>
                <h5 className="mb-0">Person Name</h5>
                <p>Profession</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content p-4">
                <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="testimonial-item border text-center rounded">
              <div className="rounded-circle position-absolute" style={{ width: 100, height: 100, top: 25, left: '50%', transform: 'translateX(-50%)' }}>
                <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" alt="img" />
              </div>
              <div className="position-relative" style={{ marginTop: 140 }}>
                <h5 className="mb-0">Person Name</h5>
                <p>Profession</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content p-4">
                <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="testimonial-item border text-center rounded">
              <div className="rounded-circle position-absolute" style={{ width: 100, height: 100, top: 25, left: '50%', transform: 'translateX(-50%)' }}>
                <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" alt="img" />
              </div>
              <div className="position-relative" style={{ marginTop: 140 }}>
                <h5 className="mb-0">Person Name</h5>
                <p>Profession</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star text-secondary" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="testimonial-content p-4">
                <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      <Footer />
    </div>
  )
}

export default Testimonial
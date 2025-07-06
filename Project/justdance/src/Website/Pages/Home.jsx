import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Home() {
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
      {/* Carousel Start */}
      <div className="header-carousel owl-carousel">
        <div className="header-carousel-item">
          <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3" style={{ maxWidth: 900 }}>
              <h4 className="text-secondary text-uppercase sub-title fw-bold mb-4 wow fadeInUp" data-wow-delay="0.1s" style={{ letterSpacing: 3 }}>Let's Dance</h4>
              <h1 className="display-1 text-capitalize text-white mb-4 wow fadeInUp" data-wow-delay="0.3s">Once A Dancer, Is Always A Dance</h1>
              <p className="fs-5 wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="pt-2">
                <a className="btn btn-primary rounded-pill text-white py-3 px-5 m-2 wow fadeInLeft" data-wow-delay="0.1s" href="#">Join Now</a>
                <a className="btn btn-secondary rounded-pill text-white py-3 px-5 m-2 wow fadeInRight" data-wow-delay="0.3s" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-carousel-item">
          <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3" style={{ maxWidth: 900 }}>
              <h4 className="text-secondary text-uppercase sub-title fw-bold mb-4" style={{ letterSpacing: 3 }}>Let's Dance</h4>
              <h1 className="display-1 text-capitalize text-white mb-4">Once A Dancer, Is Always A Dance</h1>
              <p className="fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="pt-2">
                <a className="btn btn-primary rounded-pill text-white py-3 px-5 m-2 wow fadeInLeft" data-wow-delay="0.1s" href="#">Join Now</a>
                <a className="btn btn-secondary rounded-pill text-white py-3 px-5 m-2 wow fadeInRight" data-wow-delay="0.3s" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-carousel-item">
          <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3" style={{ maxWidth: 900 }}>
              <h4 className="text-secondary text-uppercase sub-title fw-bold mb-4" style={{ letterSpacing: 3 }}>Let's Dance</h4>
              <h1 className="display-1 text-capitalize text-white mb-4">Once A Dancer, Is Always A Dance</h1>
              <p className="fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="pt-2">
                <a className="btn btn-primary rounded-pill text-white py-3 px-5 m-2 wow fadeInLeft" data-wow-delay="0.1s" href="#">Join Now</a>
                <a className="btn btn-secondary rounded-pill text-white py-3 px-5 m-2 wow fadeInRight" data-wow-delay="0.3s" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      {/* Banner Start */}
      <div className="container-fluid bg-secondary wow zoomInDown" data-wow-delay="0.1s">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center p-5">
            <h1 className="me-4"><span className="fw-normal">Join us today for </span><span> your first dance</span></h1>
            <a href="#" className="text-white fw-bold fs-2"> <i className="fa fa-phone me-1" /> 714-783-2205</a>
          </div>
        </div>
      </div>
      {/* Banner End */}

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
      {/* Training Start */}
      <div className="container-fluid training py-5">
        <div className="container py-5">
          <div className="pb-5">
            <div className="row g-4 align-items-end">
              <div className="col-xl-8">
                <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Dance Training</h4>
                <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Training Platform</h1>
              </div>
              <div className="col-xl-4 text-xl-end wow fadeInUp" data-wow-delay="0.3s">
                <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">View All Training</a>
              </div>
            </div>
          </div>
          <div className="training-carousel owl-carousel pt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.1s">
              <div className="training-img rounded-top">
                <img src="img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>01</h1>
              </div>
              <div className="rounded-bottom border border-top-0 p-4">
                <a href="#" className="h4 mb-3 d-block">Dance Theater</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
              </div>
            </div>
            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.3s">
              <div className="training-img rounded-top">
                <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>02</h1>
              </div>
              <div className="rounded-bottom border border-top-0 p-4">
                <a href="#" className="h4 mb-3 d-block">Personalized Learning</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
              </div>
            </div>
            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.5s">
              <div className="training-img rounded-top">
                <img src="img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>03</h1>
              </div>
              <div className="rounded-bottom border border-top-0 p-4">
                <a href="#" className="h4 mb-3 d-block">Convenient Dancing</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
              </div>
            </div>
            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.7s">
              <div className="training-img rounded-top">
                <img src="img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>04</h1>
              </div>
              <div className="rounded-bottom border border-top-0 p-4">
                <a href="#" className="h4 mb-3 d-block">Dance Theater</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
              </div>
            </div>
            <div className="training-item bg-white rounded wow fadeInUp" data-wow-delay="0.9s">
              <div className="training-img rounded-top">
                <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <h1 className="fs-1 fw-bold bg-primary text-white d-inline-block rounded p-2 position-absolute" style={{ top: 0, left: 0 }}>05</h1>
              </div>
              <div className="rounded-bottom border border-top-0 p-4">
                <a href="#" className="h4 mb-3 d-block">Personalized Learning</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Training End */}
      {/* Dance Class Start */}
      <div className="container-fluid class bg-light py-5">
        <div className="container py-5">
          <div className="pb-5">
            <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Our Dance Classes</h4>
            <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Dance Classes for everyone</h1>
          </div>
          <div className="class-carousel owl-carousel pt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="class-item bg-white rounded wow fadeInUp" data-wow-delay="0.1s">
              <div className="class-img rounded-top">
                <img src="img/class-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
              </div>
              <div className="rounded-bottom p-4">
                <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Explore Details</a>
              </div>
            </div>
            <div className="class-item bg-white rounded wow fadeInUp" data-wow-delay="0.3s">
              <div className="class-img rounded-top">
                <img src="img/class-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
              </div>
              <div className="rounded-bottom p-4">
                <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Explore Details</a>
              </div>
            </div>
            <div className="class-item bg-white rounded wow fadeInUp" data-wow-delay="0.5s">
              <div className="class-img rounded-top">
                <img src="img/class-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
              </div>
              <div className="rounded-bottom p-4">
                <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Explore Details</a>
              </div>
            </div>
            <div className="class-item bg-white rounded wow fadeInUp" data-wow-delay="0.7s">
              <div className="class-img rounded-top">
                <img src="img/class-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
              </div>
              <div className="rounded-bottom p-4">
                <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Explore Details</a>
              </div>
            </div>
            <div className="class-item bg-white rounded wow fadeInUp" data-wow-delay="0.9s">
              <div className="class-img rounded-top">
                <img src="img/class-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
              </div>
              <div className="rounded-bottom p-4">
                <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Explore Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dance Class End */}
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
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white fw-bold rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>JAN 20</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                  </div>
                </div>
                <div className="border border-top-0 rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House - Springs Dance</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>JUN 30</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                  </div>
                </div>
                <div className="border rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House And Registration</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>MAY 15</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                  </div>
                </div>
                <div className="border rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House Morris Dance</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{ top: 0, right: 0 }}>APR 2</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{ bottom: 0, left: 0, opacity: '0.8' }}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary" /> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary" /> New York</a>
                  </div>
                </div>
                <div className="border rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House Dance Studio</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Events End */}
      <div>
        {/* Blogs Start */}
        <div className="container-fluid blog pb-5">
          <div className="container pb-5">
            <div className="pb-5">
              <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Blog &amp; News</h4>
              <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Latest News &amp; Articles</h1>
            </div>
            <div className="blog-carousel owl-carousel pt-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.1s">
                <div className="blog-img rounded-top">
                  <img src="img/class-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="bg-light rounded-bottom p-4">
                  <div className="d-flex justify-content-between mb-4">
                    <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                    <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                  </div>
                  <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                </div>
              </div>
              <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.3s">
                <div className="blog-img rounded-top">
                  <img src="img/class-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="bg-light rounded-bottom p-4">
                  <div className="d-flex justify-content-between mb-4">
                    <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                    <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                  </div>
                  <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                </div>
              </div>
              <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.5s">
                <div className="blog-img rounded-top">
                  <img src="img/class-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="bg-light rounded-bottom p-4">
                  <div className="d-flex justify-content-between mb-4">
                    <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                    <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                  </div>
                  <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                </div>
              </div>
              <div className="blog-item bg-white rounded wow fadeInUp" data-wow-delay="0.7s">
                <div className="blog-img rounded-top">
                  <img src="img/class-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="bg-light rounded-bottom p-4">
                  <div className="d-flex justify-content-between mb-4">
                    <a href="#" className="text-muted"><i className="fa fa-calendar-alt text-primary" /> 28 August 2021</a>
                    <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Comments</a>
                  </div>
                  <a href="#" className="h4 mb-3 d-block">Classical Dance class</a>
                  <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blogs End */}
        {/* Team Start */}
        <div className="container-fluid team pb-5">
          <div className="container pb-5">
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
        <div>
          {/* Video Gallery Start */}
          <div className="container-fluid gallery pb-5">
            <div className="container pb-5">
              <div className="pb-5">
                <h4 className="text-secondary sub-title fw-bold wow fadeInUp" data-wow-delay="0.1s">Dance Gallery</h4>
                <h1 className="display-2 mb-0 wow fadeInUp" data-wow-delay="0.3s">Our Dance class gallery</h1>
              </div>
              <div className="tab-class wow fadeInUp" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-center pb-4">
                  <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                    <a className="d-flex py-2 px-5 rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                      <span className="text-dark">All</span>
                    </a>
                  </li>
                  <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                      <span className="text-dark">Dance Practice</span>
                    </a>
                  </li>
                  <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                      <span className="text-dark">Dance Training</span>
                    </a>
                  </li>
                  <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                      <span className="text-dark">Dance Growth</span>
                    </a>
                  </li>
                  <li className="nav-item bg-light border border-primary rounded-pill mb-4">
                    <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                      <span className="text-dark">Dance Improvement</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-2">
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.9s">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2 wow fadeInUp" data-wow-delay="0.9s">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="GalleryTab-2" className="tab-pane fade show p-0">
                    <div className="row g-2">
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="GalleryTab-3" className="tab-pane fade show p-0">
                    <div className="row g-2">
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="GalleryTab-4" className="tab-pane fade show p-0">
                    <div className="row g-2">
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="GalleryTab-5" className="tab-pane fade show p-0">
                    <div className="row g-2">
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="video h-100">
                          <img src="img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="video h-100">
                          <img src="img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} alt />
                          <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Video */}
          <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  {/* 16:9 aspect ratio */}
                  <div className="ratio ratio-16x9">
                    <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video Gallery End */}
          {/* Testimonial Start */}
          <div className="container-fluid testimonial pb-5">
            <div className="container pb-5">
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
        </div>

      </div>


      <Footer />
    </div>
  )
}

export default Home
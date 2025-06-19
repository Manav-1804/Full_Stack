import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='bg-dark'>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span className='text-white'>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <NavLink href className="me-4 text-reset">
        <i className="fab fa-facebook-f " />
      </NavLink>
      <NavLink href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </NavLink>
      <NavLink href className="me-4 text-reset">
        <i className="fab fa-google" />
      </NavLink>
      <NavLink href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </NavLink>
      <NavLink href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </NavLink>
      <NavLink href className="me-4 text-reset">
        <i className="fab fa-github" />
      </NavLink>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className="bg-dark">
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            <i className="fas fa-gem me-3 text-white" />Company name
          </h6>
          <p className='text-white'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            Products
          </h6>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">Angular</NavLink>
          </p>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">React</NavLink>
          </p>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">Vue</NavLink>
          </p>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">Laravel</NavLink>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            Useful links
          </h6>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">Pricing</NavLink>
          </p>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">Settings</NavLink>
          </p>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">Orders</NavLink>
          </p>
          <p className='text-white'>
            <NavLink href="#!" className="text-reset text-white">Help</NavLink>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
          <p className='text-white'><i className="fas fa-home me-3 text-white" /> New York, NY 10012, US</p>
          <p className='text-white'>
            <i className="fas fa-envelope me-3 text-white" />
            info@example.com
          </p>
          <p className='text-white'><i className="fas fa-phone me-3 text-white" /> + 01 234 567 88</p>
          <p className='text-white'><i className="fas fa-print me-3 text-white" /> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4 text-white bg-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</div>

    </div>
  )
}

export default Footer
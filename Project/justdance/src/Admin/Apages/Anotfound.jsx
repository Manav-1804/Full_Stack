import React from 'react'
import Aheader from '../Acomman/Aheader'
import { Link } from 'react-router-dom'

function Anotfound() {
  return (
    <div>
        <Aheader />
         {/* 404 Start */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5 text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-secondary" />
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link className="btn btn-primary text-white rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 End */}
    </div>
  )
}

export default Anotfound
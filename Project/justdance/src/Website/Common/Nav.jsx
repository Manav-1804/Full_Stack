import React from 'react'

function Nav({title,name}) {
    return (
        <div>
            <div>
                {/* Header Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-primary display-3 wow fadeInDown" data-wow-delay="0.1s">{title}</h3>
                        <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
                            <li className="breadcrumb-item"><a href="index.html" className="text-dark">Home</a></li>
                            <li className="breadcrumb-item"><a href="#" className="text-dark">Pages</a></li>
                            <li className="breadcrumb-item active text-primary">{name}</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
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
            </div>


        </div>
    )
}

export default Nav
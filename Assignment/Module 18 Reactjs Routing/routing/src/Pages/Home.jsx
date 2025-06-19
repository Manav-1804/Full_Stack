import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

function Home() {
  return (
    <div>
      <Header />
      <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794637.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&" className="d-block" style={{ width: '100%', height: '560px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Cloud-Forest</h4>
              <p>A lush green forest that refreshes your soul.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/view-mountain-with-dreamy-aesthetic_23-2151700215.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&" className="d-block" style={{ width: '100%', height: '560px' }}  alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Mountain-View</h4>
              <p>Snow-capped peaks that touch the sky.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498274.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&" className="d-block" style={{ width: '100%', height: '560px' }}  alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Beautiful-Rainbow-Nature</h4>
              <p>Nature paints rainbows to remind us of beauty after every storm.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498105.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&" className="d-block" style={{ width: '100%', height: '560px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Japanese-Forest</h4>
              <p>In the heart of a Japanese forest, silence speaks louder than words.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default Home
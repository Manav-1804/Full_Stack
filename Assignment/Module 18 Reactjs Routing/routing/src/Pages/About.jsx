import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
const natureImages = [
  {
    src: "https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794637.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: "Peaceful Forest",
    description: "A lush green forest that refreshes your soul."
  },
  {
    src: "https://img.freepik.com/free-photo/view-mountain-with-dreamy-aesthetic_23-2151700215.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: "Mountain-View",
    description: "Snow-capped peaks that touch the sky."
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498274.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: "Beautiful-Rainbow-Nature",
    description: "Still waters reflecting the beauty of nature."
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498105.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: "Japanese-Forest",
    description: "A stunning sunset that paints the sky with colors."
  }
];

function About() {
  return (
    <div>
        <Header />
        {/* <h1 className='p-5 bg-success'>Hello this is about page</h1> */}
        <div className="container mt-4 p-5">
      <h1 className="text-center mb-4">About Nature</h1>
      <p className="text-center mb-5">
        Nature is full of beauty and wonder. Explore some amazing views from around the world that capture the essence of nature.
      </p>

      <div className="row">
        {natureImages.map((img, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm">
              <img src={img.src} className="card-img-top" style={{  height: '300px' }}  alt={img.title} />
              <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
                <p className="card-text">{img.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        <Footer />
    </div>
  )
}

export default About
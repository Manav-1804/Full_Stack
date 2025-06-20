import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
const natureImages = [
  {
    src: "https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794637.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: <h3>"Peaceful Forest"</h3>,
    description: <p>"The peaceful forest is a sanctuary of calm and natural beauty. Towering trees stretch toward the sky, their leaves forming a soft green canopy that filters the sunlight into golden beams. The gentle rustle of leaves in the breeze and the distant call of birds create a soothing, melodic background. A narrow path winds through the woods, carpeted with fallen leaves and lined with wildflowers. The air is cool and fresh, filled with the scent of earth and pine. Time seems to slow down here, inviting every visitor to breathe deeply, listen closely, and feel completely at peace."</p>
  },
  {
    src: "https://img.freepik.com/free-photo/view-mountain-with-dreamy-aesthetic_23-2151700215.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: <h3>"Mountain-View"</h3>,
    description: <p>"The mountain view is a breathtaking sight that fills the soul with wonder. Majestic peaks rise high into the sky, their snow-capped summits glowing under the golden light of the sun. The crisp, clean air carries the scent of pine and wild herbs, while the valleys below stretch wide and green, dotted with sparkling lakes and winding trails. Clouds drift lazily across the peaks, casting soft shadows that dance across the landscape. From this vantage point, everything feels still, vast, and peaceful—a reminder of nature’s strength, silence, and timeless beauty."</p>
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498274.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: <h3>"Beautiful-Rainbow-Nature"</h3>,
    description: <p>"After a gentle rain, the sky clears to reveal a stunning rainbow arching gracefully across the horizon. Its vibrant colors—red, orange, yellow, green, blue, indigo, and violet—glow against the soft blue sky, creating a magical contrast with the lush greenery below. Trees glisten with raindrops, and flowers sparkle as if touched by light itself. Birds resume their songs, and a fresh, earthy scent fills the air. The beauty of the rainbow in nature feels like a quiet promise of hope and renewal, reminding us of the wonder that follows even the stormiest moments."</p>
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498105.jpg?uid=R193479995&ga=GA1.1.741117527.1743056014&semt=ais_hybrid&w=740",
    title: <h3>"Japanese-Forest"</h3>,
    description: <p>"A Japanese forest is a serene and mystical landscape, where nature and tradition blend in perfect harmony. Tall cedar and bamboo trees rise gracefully, their leaves whispering in the breeze like ancient voices. Moss-covered stones and winding paths lead through the shaded woods, often revealing quiet shrines or torii gates that seem to appear like secrets of the past. The air is cool and filled with the scent of earth, pine, and fresh foliage. Gentle streams trickle through the forest, adding to the tranquil atmosphere. "</p>
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
                <img src={img.src} className="card-img-top" style={{ height: '300px' }} alt={img.title} />
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
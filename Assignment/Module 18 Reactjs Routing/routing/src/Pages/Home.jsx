import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Home() {
  return (
    <div>
        <Header />
        <h1 className='p-5 bg-info'>Hello this is home page</h1>
        <Footer />
    </div>
  )
}

export default Home
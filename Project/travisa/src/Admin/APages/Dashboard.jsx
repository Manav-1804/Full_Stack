import React from 'react'


import Aheader from '../ACommon/Aheader'
import Anav from '../ACommon/Anav'



function Dashboard() {
  return (
    <div>
     
      <Aheader />
      <Anav />
      <h1 className='text-center'>Hello Admin Dashboard</h1>
    </div>
  )
}

export default Dashboard
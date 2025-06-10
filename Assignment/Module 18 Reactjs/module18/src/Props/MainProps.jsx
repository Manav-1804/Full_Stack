import React from 'react'
import UseCard from './UseCard'

function MainProps() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <UseCard name="Manav Prajapati" age="21" location="Ahmedabad City"  />
                <UseCard name="Inayat Parmar" age="23" location="Amreli District"  />
                <UseCard name="Rainil Patel" age="22" location="Surat City"  />
                <UseCard name="Jignesh Prjapati" age="41" location="Gandhinagar City"  />
            </div>
        </div>
    </div>
  )
}

export default MainProps
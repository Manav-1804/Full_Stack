import React, { useState } from 'react'
import Image from './Image'

function Funcobje() {

    const [data, setdata] = useState({
        name: "inyat",
        count: 0,
        Image: true
    })

    // console.log(data)

    return (
        <div>
            <h1>hello name {data.name}</h1>
            <button onClick={() => setdata({ ...data, name: "Shubham" })}>Chnage name</button>
            <button onClick={() => setdata({ ...data, name: "uttam" })}>Chnage name2</button>

            <h1>hello count : {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Increment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>Dencrement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Zero</button>

            {/* <h1>Hello This is image :{data.isImage}</h1> */}


            <br /><br /><br />
            <button onClick={() => setdata({ ...data, Image : false })}>Hide</button>
            <button onClick={() => setdata({ ...data, Image:!Image})}>Toggle</button>


            {
                (Image) ? <Image /> : false
            }
        </div>
    )
}

export default Funcobje
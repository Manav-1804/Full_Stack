import React from 'react'
// Task 1:
// Create a React component UserCard that accepts name, age, and location as
// props and displays them in a card format.
function UseCard({ name, age, location }) {
    return (
        <div  className='col-md-4'>
            <div className="card" style={{ width: '350px', padding: "5px"}}>
                <div className="card-body">
                    <h5 className="name">Name :- {name}</h5>
                    <h5 className="card-subtitle mb-2 text-body-secondary">Age :- {age}</h5>
                    <p className="card-text"><b>Location :- {location}</b> </p>
                </div>
            </div>

        </div>
    )
};

export default UseCard
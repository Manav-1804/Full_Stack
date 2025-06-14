import React, { useState, useEffect } from 'react';

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;

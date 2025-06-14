// Task 2:
// Create a list of users where each user has a unique id. Render the user list using
// React and assign a unique key to each user.



import React from 'react';

function UserList() {
  const users = [
    { id: 1, name: 'Manav', age: 20 },
    { id: 2, name: 'Arath', age: 24 },
    { id: 3, name: 'Vineet', age: 23 },
    { id: 4, name: 'Jay', age: 23 },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name}, 
            <br></br>
            Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

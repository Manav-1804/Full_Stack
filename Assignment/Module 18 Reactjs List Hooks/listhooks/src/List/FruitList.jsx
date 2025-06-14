// Task 1:
// Create a React component that renders a list of items (e.g., a list of fruit names). Use
// the map() function to render each item in the list.


import React from 'react';

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;

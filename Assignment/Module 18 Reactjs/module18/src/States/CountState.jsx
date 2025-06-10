import { useState } from "react";
function CountState() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <h1>Hello count :- {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <button onClick={() => setcount(0)}> Zero</button>
        </div>
    )
}

export default CountState
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyState from "./Context/data/Mystate";
import Home from "./Pages/Home";
import AddProduct from "./Pages/Addproduct";


function App() {
  return (
    <MyState>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addproduct" element={<AddProduct />}/>
      </Routes>
      </BrowserRouter>
    </MyState>
  );
}

export default App;

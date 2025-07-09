import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyState from "./Context/data/Mystate";
import Home from "./Pages/Home";
import AddProduct from "./Pages/Addproduct";

import UpdateProduct from "./Pages/UpdateProduct";


function App() {
  return (
    <MyState>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addproduct" element={<AddProduct />}/>
        <Route path="/updateproduct" element={<UpdateProduct />}/>
      </Routes>
      </BrowserRouter>
    </MyState>
  );
}

export default App;

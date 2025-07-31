import Create from "./Component/Create";
import Edit from "./Component/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Nav";
import Read from "./Component/Read";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/newshoe' element={<Create />} />

          <Route path='/' element={<Read />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

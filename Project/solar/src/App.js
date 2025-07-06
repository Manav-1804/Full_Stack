import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Website/Pages/Home";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer >
        <Routes >
          <Route path="/" element={<Home />}/>
        </Routes>
      </ToastContainer>
    </div>
    </BrowserRouter>
  );
}

export default App;

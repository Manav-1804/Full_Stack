import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Services from "./Website/Pages/Services";
import Featurs from "./Website/Pages/Featurs";
import Country from "./Website/Pages/Country";
import Testimonial from "./Website/Pages/Testimonial";
import Training from "./Website/Pages/Training"
import Contact from "./Website/Pages/Contact";
import NotFound from "./Website/Pages/NotFound";
import Dashboard from "./Admin/APages/Dashboard";
import Servicemanage from "./Admin/APages/Servicemanage";
import Trainingmanage from "./Admin/APages/Trainingmanage";
import Aboutmanage from "./Admin/APages/Aboutmanage";
import Serviceadd from "./Admin/APages/Serviceadd";
import { ToastContainer } from "react-toastify";
import Trainingadd from "./Admin/APages/Trainingadd";
import Aboutadd from "./Admin/APages/Aboutadd";



function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <ToastContainer />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/feature" element={<Featurs />} />
        <Route path="/country" element={<Country />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/training" element={<Training />}/>

         {/* Admin routes */}
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/servicemanage" element={<Servicemanage />}/>
        <Route path="/tmanage" element={<Trainingmanage />} />
        <Route path="/amanage" element={<Aboutmanage />}/>
        <Route path="/addservices" element={<Serviceadd />}/>
        <Route path="/tadd" element={<Trainingadd />}/>
        <Route path="/aadd" element={<Aboutadd />}/>
        </Routes>

       
      </div>
    </BrowserRouter>
  );
}

export default App;

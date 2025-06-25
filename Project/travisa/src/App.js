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



function App() {
  return (
    <BrowserRouter >
      <div className="App">
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
        </Routes>

       
      </div>
    </BrowserRouter>
  );
}

export default App;

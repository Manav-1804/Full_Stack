import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Featurs from "./Pages/Featurs";
import NotFound from "./Pages/NotFound";
import Country from "./Pages/Country";
import Testimonial from "./Pages/Testimonial";
import Training from "./Pages/Training";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/service" element={<Services />}/>
       <Route path="/feature" element={<Featurs />}/>
       <Route path="/*" element={<NotFound />}/>
       <Route path="/country" element={<Country />}/>
       <Route path="/testimonial" element={<Testimonial />}/>
       <Route path="/training" element={<Training />}/>
       <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

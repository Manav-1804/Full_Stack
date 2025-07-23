import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Event from "./Website/Pages/Event";
import Notfound from "./Website/Pages/Notfound";
import Blog from "./Website/Pages/Blog";
import Classes from "./Website/Pages/Classes";
import Dancetraining from "./Website/Pages/Dancetraining";
import Ourteam from "./Website/Pages/Ourteam";
import Testimonial from "./Website/Pages/Testimonial";

import Contact from "./Website/Pages/Contact";
import Aheader from "./Admin/Acomman/Aheader";


import Aboutamanage from "./Admin/Apages/Aboutmanage";
import Eventmanage from "./Admin/Apages/Eventmanage";
import Blogsmanage from "./Admin/Apages/Blogsmanage";
import Trainingmanage from "./Admin/Apages/Trainingmanage";





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          {/* {Website Pages} */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/dance" element={<Dancetraining />} />
          <Route path="/team" element={<Ourteam />} />
          <Route path="/test" element={<Testimonial />} />
        
          <Route path="/contact" element={<Contact />} />


          {/* {Admin Pages} */}

          <Route path="/dash" element={<Aheader />}/>
          
          <Route path="/aboutmanage" element={<Aboutamanage />} />
          <Route path="/eventmanage" element={<Eventmanage />}/>
          <Route path="/blogmanage" element={<Blogsmanage />}/>
          <Route path="/trainingmanage" element={<Trainingmanage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

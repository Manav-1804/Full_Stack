import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Event from "./Website/Pages/Event";
import Notfound from "./Website/Pages/Notfound";
import Blog from "./Website/Pages/Blog";
import Classes from "./Website/Pages/Classes";




function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/event" element={<Event />}/>
        <Route path="/*" element={<Notfound />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/classes" element={<Classes />}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

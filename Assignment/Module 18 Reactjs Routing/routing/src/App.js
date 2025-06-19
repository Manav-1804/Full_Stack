
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
// import Footer from './Common/Footer';
// import Header from './Common/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Help from './Pages/Help';



function App() {
  return (
     <BrowserRouter>
    <div className="App">
     
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manav" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          
      </Routes>
      
      
    </div>
    // </BrowserRouter>
    
  );
}

export default App;


import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Footer from './Common/Footer';
import Header from './Common/Header';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
     <BrowserRouter>
    <div className="App">
      {/* <Header /> */}

      {/* <Footer /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

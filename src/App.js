import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from 'C:/Users/zahed/Desktop/spa/src/Componant/Navbar/Navbar';
import Footer from 'C:/Users/zahed/Desktop/spa/src/Componant/Footer/Footer';
import Homepage from 'C:/Users/zahed/Desktop/spa/src/Componant/Homepage/Homepage';
const App = () => {
  const design = (
    <BrowserRouter>
          <Navbar />
          <div className="page">
              <div className="container">
                  <Routes>
                    <Route path="/home" element={<Homepage/>}/>
                    <Route path="/about" element={<h1>WElcome To About Us</h1>}/>
                    <Route path="/gallery" element={<h1>Welcome TO Gallery</h1>}/>
                    <Route path="/services" element={<h1>Welcome TO Services</h1>}/>
                    <Route path="/settings" element={<h1>Welcome TO Settings</h1>}/>
                  </Routes>
                  </div>
             </div> 
             <Footer />
      </BrowserRouter>    
  );
  return design;
};

export default App;

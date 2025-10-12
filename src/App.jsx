import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Book from "./pages/Book"
import Navbar from "./Navbar/Navbar"
import ReachUs from "./pages/ReachUs"
import Reach from "./Sections/Reach"

import AboutUs from "./Sections/AboutUs"
import Services from "./Sections/Service"
import Hire from "./Sections/hire"
import Service from "./Sections/Service"





function App() {
  

  return (
    <>
      <Navbar />
     
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/book" element={<Book />} />

          <Route path="/Reach" element={<Reach />} />
         

        </Routes>
      
    </>
  )
}


export default App;


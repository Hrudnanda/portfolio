import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Book from "./pages/Book"
import Navbar from "./Navbar/Navbar"
import Reach from "./Sections/Reach"

import AboutUs from "./Sections/AboutUs"
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


import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUS";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Careers from "../Pages/Careers";

const AllRoutes = ()=>{

    return <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about-us" element={<AboutUs/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
        <Route path="/careers" element={<Careers/>} ></Route>
    </Routes>

}

export default AllRoutes;
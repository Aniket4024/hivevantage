import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import AboutUs from "../Pages/AboutUS";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Careers from "../Pages/Careers";
import Loading from "../Components/Loading";


const Home = React.lazy(() => {
    return Promise.all([
      import("../Pages/Home"),
      new Promise(resolve => setTimeout(resolve, 1000))
    ])
    .then(([moduleExports]) => moduleExports);
  });

const AllRoutes = ()=>{

    return <Routes>
        <Route path="/" element={
            <Suspense fallback={<Loading/>}>
                <Home/>
            </Suspense>
        }>
        </Route>
        <Route path="/about-us" element={<AboutUs/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
        <Route path="/careers" element={<Careers/>} ></Route>
    </Routes>

}

export default AllRoutes;
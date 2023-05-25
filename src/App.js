import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";


const App =() => {
    return (
        <>
        <Navbar/>



            <Routes>
                <Route exact path="/" Component={Home} />

                <Route path="/about" Component={About} />
                <Route path="/service" Component={Service} />
                <Route path="/contact" Component={Contact} />
                

                



                
            </Routes>

        </>

    );


};
export default App;
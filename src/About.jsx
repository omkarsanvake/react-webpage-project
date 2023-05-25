import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/pexels-kevin-ku-577585.jpg";
import Common from "./Common";

const About = () =>{
    return(
        <>
           <Common name ="Welcome To About Page" imgsrc={web} visit="/contact" btnname="Contact Now"/>
        </>
    );
};
export default About;
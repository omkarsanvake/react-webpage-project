import React from 'react'
import web from "../src/images/19198666.jpg";
import { NavLink } from 'react-router-dom';
import Common from './Common';

export default function Home() {
  return (
    <>
     <Common name ="Grow Your business" imgsrc={web} visit="/service" btnname="Get Started"/>
      
    </>



  );
};


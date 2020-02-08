import React from "react";
import {Button} from 'react-bootstrap';
import Home from './Home';
import Text from './Text';
import Footer from './Footer';
import Gallery from '../Gallery';
import Service from './Service';
import Contact from './Contact';


export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{id == "section5"?  <Footer/>: 
            id == "section1" ?  <Text/>
            : id == "section3" ? <Gallery/> : id == "section4" ? <Contact/> : id == "section2" ? <Service/> : ""
            }</p>
      </div>
    </div>
  );
}
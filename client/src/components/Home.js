import React, { Component } from 'react';
import image from '../Scroll1.jpg';
import logo from '../KML final logo.png';
import "../App.css";

class Home extends Component {
    render() {
        return (
            <div>
                <img class="home" src ={logo} />
            </div>
        );
    }
}

export default Home;
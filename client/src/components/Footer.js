import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class Footer extends Component {
    render() {
        return (
            <div>
                <Button variant = "secondary" href = "http://www.styleseat.com/kissmylipstickbeauty">Make a reservation</Button>
                <br/>
                <br/>
                <div class="col bottom-social-network">
                    &copy; Copyright KISSMYLIPSTICK BEAUTY INC. 2020

                    <a href="#" class="fa">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="fa">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="fa">
                        <i class="fab fa-yelp"></i>
                    </a>
                    <a href="#" class="fa">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
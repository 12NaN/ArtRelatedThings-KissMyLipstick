import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
class Gallery extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null,
		};
    }
	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction,
		});
	}

    render() {
		const { index, direction } = this.state;
        return (
            <div className="car-image">
                <Carousel
                				activeIndex={index}
                                direction={direction}
                                onSelect={this.handleSelect}
                >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./image1.jpg")}
                    alt="First slide"
                    style ={{"height": "300px", "width": "100px"}}
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./image2.jpg")}
                    alt="Second slide"
                    style ={{"height": "300px", "width": "100px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./image3.jpg")}
                    alt="Third slide"
                    style ={{"height": "300px", "width": "100px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./image4.jpg")}
                    alt="Fourth slide"
                    style ={{"height": "300px", "width": "100px"}}
                    />
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Gallery;
import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../Assets/Rok Nardin - Helikopter.jpg"
import img2 from "../Assets/Atom Music Audio - Immortals.jpg"

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt={img1}
                        />
                        <Carousel.Caption>
                            <h3>img1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt={img2}
                        />
                        <Carousel.Caption>
                            <h3>img2</h3>
                            <p>dolor sit amet, consectetur adipiscing elit. Nam elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;
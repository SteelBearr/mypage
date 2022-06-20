import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import img_photo  from "../media/Painkiller_small.jpg";


class About extends Component {
    render() {
        return (
            <Container>
                <div className="modal-fullscreen container-fluid h-100 ">
                    <Row className="align-items-center h-100">
                            <Col md="6">
                                <div className="justify-content-center">
                                    <h3>Обо мне</h3>
                                    <p mt="1">Sed mattis, diam eget egestas sodales, justo turpis ullamcorper turpis, quis condimentum dui risus porta felis. Cras augue felis, blandit sed lacinia eget, viverra vel massa. Aenean condimentum convallis purus, ac ultrices lacus auctor vel. Mauris dapibus ut ante id faucibus. Etiam vehicula libero at neque tempor dictum. Vivamus imperdiet mauris leo, eget placerat dui interdum id. Praesent gravida mauris et luctus viverra.</p>
                            </div>
                            </Col>
                            <Col md="6">
                                <img src={img_photo} alt="photo"/>
                            </Col>

                    </Row>
                </div>
            </Container>

        );
    }
}

export default About;
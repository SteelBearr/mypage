import React, {Component} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import img_photo  from "../media/Painkiller_small.jpg";


class About extends Component {
    render() {
        return (
            <Container style={{display: "flex", height: "80%"}}>
                    <Row style={{alignItems: "center",
                        justifyContent: "center"}}>
                            <Col md="9">
                                <h2>Обо мне</h2>
                                <p mt="1">Sed mattis, diam eget egestas sodales, justo turpis ullamcorper turpis, quis condimentum dui risus porta felis. Cras augue felis, blandit sed lacinia eget, viverra vel massa. Aenean condimentum convallis purus, ac ultrices lacus auctor vel. Mauris dapibus ut ante id faucibus. Etiam vehicula libero at neque tempor dictum. Vivamus imperdiet mauris leo, eget placerat dui interdum id. Praesent gravida mauris et luctus viverra.</p>
                                <Button variant="primary" size="lg" href={process.env.PUBLIC_URL + "/#/portfolio"}>Мои работы</Button>
                            </Col>
                            <Col md="3">
                                <img src={img_photo} alt=""/>
                            </Col>

                    </Row>
            </Container>

        );
    }
}

export default About;
import React, {Component} from 'react';
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import moddeling from "../media/3D Moddeling_Small.jpg";
import b1 from "../media/English B1_Small.jpg";
import sa from "../media/System Administration Advanced_Small.jpg";


class Certificates extends Component {

    render() {
        return (
            <Container>
                <h2 className="text-center m-4">Сертификаты</h2>

                    <Row>
                        <Col>
                          <img
                                    src={sa}
                                    alt="work"/>

                        </Col>
                        <Col style={{display:"flex",justifyContent:"center"}}>
                            <img className="mt-4"

                                    src={b1}
                                    alt="work"/>

                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" style={{margin: "0 auto",
                            float: "none",
                            marginTop: "20px",
                        display:"flex",justifyContent:"center"}}>
                        <img
                                src={moddeling}
                                alt="work"/>
                        </Col>

                    </Row>

            </Container>
        );
    }
}

export default Certificates;
import React from 'react';

import {Accordion, Card, Col} from "react-bootstrap";
import iconGithub from "../assets/github.png";

function Work(props) {
        return (
            <Col sm="12" md="6" lg="4">
                <Card className="mb-3">
                    <Card.Img
                        variant="top"
                        src={props.img}
                        alt={props.alt}/>
                    <Card.Body>
                        <Card.Title className="text-center" style={{color: "#000077"}}>{props.title}</Card.Title>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header></Accordion.Header>
                                <Accordion.Body>
                        <Card.Text>{props.text}</Card.Text>
                        <p style={{display: props.link !== "" ? "" : "none"}}>
                            <a rel="noreferrer" target="_blank" href={props.link}>
                                <img src={iconGithub} style={{height: "2em"}} alt="GithubIcon"/></a>
                            <a rel="noreferrer" target="_blank" href={props.link} style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                            <span><svg stroke="currentColor"
                                       fill="none" strokeWidth="2"
                                       viewBox="0 5 24 24"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       focusable="false"
                                       height="1em"
                                       width="1em">
                                <line
                                x1="7" y1="17" x2="17" y2="7"></line><polyline
                                points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                    </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Col>
        );
}

export default Work;
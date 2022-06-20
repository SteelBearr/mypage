import React, {Component, useState} from 'react';
import {Container, FormControl, Navbar, Nav, Form, Button, ButtonGroup, ToggleButton, Row, Col} from "react-bootstrap";
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Portfolio from '../Pages/Portfolio.js';
import Contacts from '../Pages/Contacts.js';
import Certificates from '../Pages/Certificates.js';
import img_ru  from "../media/ru.png";
import img_en  from "../media/en.png";



class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/about">Обо мне</Nav.Link>
                                <Nav.Link href="/portfolio">Портфолио</Nav.Link>
                                <Nav.Link href="/certificates">Сертификаты</Nav.Link>
                                <Nav.Link href="/contacts">Контакты</Nav.Link>
                            </Nav>
                            {/*<Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>*/}
                            <Row xs={"auto"}>
                                <Col className="mt-auto">
                                    <img src={img_ru}/>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Check
                                            className="mt-1"
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Form>
                                </Col>
                                <Col className="mt-auto">
                                    <img src={img_en}/>
                                </Col>
                            </Row>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/certificates" element={<Certificates/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}

export default Header;
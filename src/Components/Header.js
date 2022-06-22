import React, {Component} from 'react';
import {Container, Navbar, Nav, Form, Row, Col} from "react-bootstrap";
import {Route, HashRouter, Routes} from "react-router-dom";
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
                                <Nav.Link href={process.env.PUBLIC_URL + '/'}>Главная</Nav.Link>
                                <Nav.Link href={process.env.PUBLIC_URL + "/about"}>Обо мне</Nav.Link>
                                <Nav.Link href={process.env.PUBLIC_URL + "/portfolio"}>Портфолио</Nav.Link>
                                <Nav.Link href={process.env.PUBLIC_URL + "/certificates"}>Сертификаты</Nav.Link>
                                <Nav.Link href={process.env.PUBLIC_URL + "/contacts"}>Контакты</Nav.Link>
                            </Nav>
                            <Row xs={"auto"}>
                                <Col className="mt-auto">
                                    <img src={img_ru} alt="ru"/>
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
                                    <img src={img_en} alt="en"/>
                                </Col>
                            </Row>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <HashRouter>
                    <Routes>
                        <Route path={process.env.PUBLIC_URL + '/'} element={<Home/>}/>
                        <Route path={process.env.PUBLIC_URL + "/about"} element={<About/>}/>
                        <Route path={process.env.PUBLIC_URL + "/portfolio"} element={<Portfolio/>}/>
                        <Route path={process.env.PUBLIC_URL + "/certificates"} element={<Certificates/>}/>
                        <Route path={process.env.PUBLIC_URL + "/contacts"} element={<Contacts/>}/>
                    </Routes>
                </HashRouter>
            </>
        );
    }
}

export default Header;
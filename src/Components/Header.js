import React, {Component} from 'react';
import {Container, Navbar, Nav, Form, Row, Col} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Portfolio from '../Pages/Portfolio.js';
import Contacts from '../Pages/Contacts.js';
import Certificates from '../Pages/Certificates.js';
import iconRu  from "../assets/rus.png";
import iconEn  from "../assets/eng.png";
import imgBackgroundHeader from "../assets/NavBackHiRes.jpg";



class Header extends Component {
    constructor(props) {
        super(props);
        if (JSON.parse(window.localStorage.getItem('state')) != null){
            this.state = {lang: JSON.parse(window.localStorage.getItem('state'))}
        }
        else {
            this.state = {lang: false}
        }

    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" style={{backgroundImage: `url(${imgBackgroundHeader})`, backgroundSize: "cover"}}>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link id="home" href={process.env.PUBLIC_URL + '/#/'}>Главная</Nav.Link>
                                <Nav.Link id="about" href={process.env.PUBLIC_URL + "/#/about"}>Обо мне</Nav.Link>
                                <Nav.Link id="portfolio" href={process.env.PUBLIC_URL + "/#/portfolio"}>Портфолио</Nav.Link>
                                <Nav.Link id="certificates" href={process.env.PUBLIC_URL + "/#/certificates"}>Сертификаты</Nav.Link>
                                <Nav.Link id="contacts" href={process.env.PUBLIC_URL + "/#/contacts"}>Контакты</Nav.Link>
                            </Nav>
                            <Row xs={"auto"}>
                                <Col className="mt-auto">
                                    <img style={{height:"24px"}} src={iconRu} alt="ru"/>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Check
                                            defaultChecked={this.state.lang}
                                            className="mt-1"
                                            type="switch"
                                            id="custom-switch"
                                            onClick={() => {window.localStorage.removeItem('state')
                                                window.localStorage.setItem('state', JSON.stringify(!this.state.lang))
                                                this.setState({lang: !this.state.lang})}}
                                        />
                                    </Form>
                                </Col>
                                <Col className="mt-auto">
                                    <img style={{height:"24px"}} src={iconEn} alt="en"/>
                                </Col>
                            </Row>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/certificates" element={<Certificates/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
            </>
        );
    }
}

export default Header;
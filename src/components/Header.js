import React, {useState,useEffect} from 'react';
import {Container, Navbar, Nav, Form, Row, Col} from "react-bootstrap";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Portfolio from '../pages/Portfolio.js';
import Contacts from '../pages/Contacts.js';
import Certificates from '../pages/Certificates.js';
import iconRu  from "../assets/rus.png";
import iconEn  from "../assets/eng.png";
import imgBackgroundHeader from "../assets/navBackHiRes.jpg";
import {useTransition, animated} from "react-spring";
import {langArr} from "../localization/HeaderTable";

function toggleAnim(){
    if (!JSON.parse(window.localStorage.getItem('anim')))
    {
        window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))
    }
}

function Header(){
    const [lang, setLang] = useState(JSON.parse(window.localStorage.getItem('lang')))
    const location = useLocation()
    const transitions = useTransition(location, {
        enter:{
            transform: !JSON.parse(window.localStorage.getItem('anim')) ? "translateX(0vw)" : "translateY(0vh)"

        },
        from:{
            transform: !JSON.parse(window.localStorage.getItem('anim')) ? "translateX(100vw)" : "translateY(-100vh)"

        }
    })
    useEffect(()=>{window.localStorage.setItem('anim', JSON.stringify(true))})
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" style={{backgroundImage: `url(${imgBackgroundHeader})`, backgroundSize: "cover"}}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link id="home" href={process.env.PUBLIC_URL + '/#/'} onClick={toggleAnim()}>{langArr[0][lang ? 1 : 0].text}</Nav.Link>
                            <Nav.Link id="about" href={process.env.PUBLIC_URL + "/#/about"} onClick={toggleAnim()}>{langArr[1][lang ? 1 : 0].text}</Nav.Link>
                            <Nav.Link id="portfolio" href={process.env.PUBLIC_URL + "/#/portfolio"} onClick={toggleAnim()}>{langArr[2][lang ? 1 : 0].text}</Nav.Link>
                            <Nav.Link id="certificates" href={process.env.PUBLIC_URL + "/#/certificates"} onClick={toggleAnim()}>{langArr[3][lang ? 1 : 0].text}</Nav.Link>
                            <Nav.Link id="contacts" href={process.env.PUBLIC_URL + "/#/contacts"} onClick={toggleAnim()}>{langArr[4][lang ? 1 : 0].text}</Nav.Link>
                        </Nav>
                        <Row xs={"auto"}>
                            <Col className="mt-auto">
                                <img style={{height:"24px"}} src={iconRu} alt="ru"/>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Check
                                        defaultChecked={lang}
                                        className="mt-1"
                                        type="switch"
                                        id="custom-switch"
                                        onClick={() => {window.localStorage.setItem('lang', JSON.stringify(!lang))
                                            setLang(!lang)}}
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
                {transitions((props,item) => (
                    <animated.div style={props}>
                        <Routes location={item}>
                            <Route path='/' element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/portfolio" element={<Portfolio/>}/>
                            <Route path="/certificates" element={<Certificates/>}/>
                            <Route path="/contacts" element={<Contacts lang={lang}/>}/>
                        </Routes>
                    </animated.div>
                    ))}
        </>
    );
}

export default Header;
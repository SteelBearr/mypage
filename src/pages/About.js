import React, {Component} from 'react';
import {Container, Row, Col, Button, Badge} from "react-bootstrap";
import imgPhoto  from "../assets/photo.png";



class About extends Component {
    componentDidMount() {
        document.title = "Обо мне"
        document.querySelector("#about").className = "nav-link active"
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        document.querySelector("#about").classList.remove("active")
    }
    render() {
        return (
                <Container style={{display: "flex", height: "calc(100vh - 56px)"}}>
                        <Row style={{height: "80%", alignItems: "center",
                            justifyContent: "center"}}>
                                <Col lg="8" className="mt-sm-3">
                                    <h2 className="p-4 text-center text-lg-start p-md-0" style={{color: "#000077"}}>Обо мне</h2>
                                    <Row className="d-lg-none d-md-block d-sm-block col-md-6 col-sm-12 mx-auto">
                                        <img className="mb-3" style={{width: "100%", height: "100%", borderRadius: "30px"}} src={imgPhoto} alt=""/>
                                    </Row>
                                    <p className="text-md-start">Я владею принципами функционального и объектно-ориентированного программирования, ознакомлен со множеством языков программирования: <span><Badge pill bg="secondary">Delphi</Badge>,</span> <span><Badge pill bg="secondary">C#</Badge>,</span> <span><Badge pill bg="secondary">Java</Badge>,</span> <span><Badge pill bg="secondary">Python</Badge>.</span> Помимо этого, обладаю навыками веб-разработки, что включает в себя знание <span><Badge pill bg="secondary">HTML</Badge>,</span> <span><Badge pill bg="secondary">CSS</Badge>,</span> <Badge pill bg="secondary">JavaScript</Badge> и некоторых библиотек, таких как <span><Badge pill bg="secondary">Bootstrap</Badge>,</span> <span><Badge pill bg="secondary">jQuery</Badge>,</span> <span><Badge pill bg="secondary">React</Badge>,</span> а также системы управления базами данных <span><Badge pill bg="secondary">PostgreSQL</Badge>.</span> Умею пользоваться системой контроля версий <span><Badge pill bg="secondary">Git</Badge>.</span> Могу строить и печатать на 3D-принтере трёхмерные модели низкой и средней сложности. Имею небольшой опыт в системном администрированнии, развёркте и настройке веб-сервера <span><Badge pill bg="secondary">Apache</Badge>.</span> В свободное время увлекаюсь компьютерными играми и автомобилями.</p>
                                    <Button className="mb-3 d-lg-block d-md-block d-sm-none d-none" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/portfolio"} style={{width:"152px"}} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>Мои работы</Button>
                                    <Button className="mb-3 d-lg-none d-md-none d-sm-block" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/portfolio"} style={{display: "flex", justifyContent: "center"}} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>Мои работы</Button>
                                </Col>
                                <Col className="d-lg-block d-md-none d-sm-none d-none" md="6" lg="4">
                                    <img style={{width: "100%", height: "100%", borderRadius: "10px"}} src={imgPhoto} alt=""/>
                                </Col>
                        </Row>
                </Container>
        );
    }
}

export default About;
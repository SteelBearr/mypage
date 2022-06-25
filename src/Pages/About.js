import React, {Component} from 'react';
import {Container, Row, Col, Button, Badge} from "react-bootstrap";
import imgPhoto  from "../assets/Painkiller_small.jpg";



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
                                <Col md="9" className="mt-sm-3">
                                    <h2 className="p-4 text-center text-md-start p-md-0" style={{color: "#000077"}}>Обо мне</h2>
                                    <Row className="d-lg-none d-md-none d-sm-block">
                                        <img className="mb-3" style={{width: "100%", height: "100%", borderRadius: "50px"}} src={imgPhoto} alt=""/>
                                    </Row>
                                    <p className="text-md-start">Я владею принципами функционального и объектно-ориентированного программирования, ознакомлен с множеством языков программирования: <Badge pill bg="secondary">Delphi</Badge>, <Badge pill bg="secondary">C#</Badge>, <Badge pill bg="secondary">Java</Badge>, <Badge pill bg="secondary">Python</Badge>. Помимо этого, обладаю навыками веб-разработки, что включает в себя знание <Badge pill bg="secondary">HTML</Badge>, <Badge pill bg="secondary">CSS</Badge>, <Badge pill bg="secondary">JavaScript</Badge> и некоторых библиотек: <Badge pill bg="secondary">Bootstrap</Badge>, <Badge pill bg="secondary">jQuery</Badge>, <Badge pill bg="secondary">React</Badge>, а также системы управления базами данных <Badge pill bg="secondary">PostgreSQL</Badge>. Умею пользоваться системой контроля версий <Badge pill bg="secondary">Git</Badge>. Могу строить и печатать на 3D-принтере трёхмерные модели низкой и средней сложности. Имею небольшой опыт в системном администрированнии, развёркте и настройке веб-сервера <Badge pill bg="secondary">Apache</Badge>. В свободное время увлекаюсь компьютерными играми и автомобилями.</p>
                                    <Button className="mb-3 d-lg-block d-md-block d-sm-none d-none" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/portfolio"} style={{width:"152px"}}>Мои работы</Button>
                                    <Button className="mb-3 d-lg-none d-md-none d-sm-block" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/portfolio"} style={{display: "flex", justifyContent: "center"}}>Мои работы</Button>
                                </Col>
                                <Col className="d-lg-block d-md-block d-sm-none d-none" md="3">
                                    <img style={{width: "100%", height: "100%", borderRadius: "25px"}} src={imgPhoto} alt=""/>
                                </Col>
                        </Row>
                </Container>
        );
    }
}

export default About;
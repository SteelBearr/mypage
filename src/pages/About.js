import React, {Component} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import imgPhoto  from "../assets/photo.png";
import {langArr} from "../localization/AboutTable";



class About extends Component {
    componentDidMount() {
        document.title = langArr[0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text
        document.querySelector("#about").className = "nav-link active"
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        document.querySelector("#about").classList.remove("active")
    }
    render() {
        return (
            document.title = langArr[0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text,
                <Container style={{display: "flex", height: "calc(100vh - 56px)"}}>
                        <Row style={{height: "80%", alignItems: "center",
                            justifyContent: "center"}}>
                                <Col lg="8" className="mt-sm-3">
                                    <h2 className="p-4 text-center text-lg-start p-md-0" style={{color: "#000077"}}>{langArr[0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</h2>
                                    <Row className="d-lg-none d-md-block d-sm-block col-md-6 col-sm-12 mx-auto">
                                        <img className="mb-3" style={{width: "100%", height: "100%", borderRadius: "30px"}} src={imgPhoto} alt={langArr[1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}/>
                                    </Row>
                                    <p className="text-md-start">{langArr[2][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</p>
                                    <Button className="mb-3 d-lg-block d-md-block d-sm-none d-none" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/portfolio"} style={{width:"152px"}} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>{langArr[3][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</Button>
                                    <Button className="mb-3 d-lg-none d-md-none d-sm-block" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/portfolio"} style={{display: "flex", justifyContent: "center"}} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>{langArr[3][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</Button>
                                </Col>
                                <Col className="d-lg-block d-md-none d-sm-none d-none" md="6" lg="4">
                                    <img style={{width: "100%", height: "100%", borderRadius: "10px"}} src={imgPhoto} alt={langArr[1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}/>
                                </Col>
                        </Row>
                </Container>
        );
    }
}

export default About;
import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import imgModeling from "../assets/3D Modeling_Big.jpg";
import imgEnglishB1Level from "../assets/englishB1Small.jpg";
import imgEnglishB1LevelBig from "../assets/englishB1.jpg";
import imgSystemAdministration from "../assets/systemAdministrationAdvancedSmall.png";
import imgSystemAdministrationBig from "../assets/systemAdministrationAdvanced.jpg";
import {langArr} from "../localization/CertificatesTable";



class Certificates extends Component {
    componentDidMount() {
        document.title = langArr[0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text
        document.querySelector("#certificates").className = "nav-link active"
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        document.querySelector("#certificates").classList.remove("active")
    }
    render() {
            return (
                    document.title = langArr[0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text,
                    <Container>
                        <h2 style={{color: "#000077"}} className="text-center p-4">{langArr[0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</h2>
                            <Row sm="12" className="mb-2">
                                <Col className="my-3" sm="12" md="6" style={{display:"flex",justifyContent:"center",alignItems: "center"}}>
                                  <a href={imgSystemAdministrationBig} rel="noreferrer" target="_blank"><img style={{width: "100%"}}
                                       src={imgSystemAdministration}
                                       alt={langArr[1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}/></a>
                                </Col>
                                <Col className="my-3" sm="12" md="6" style={{display:"flex",justifyContent:"center",alignItems: "center"}}>
                                    <a href={imgEnglishB1LevelBig} rel="noreferrer" target="_blank"><img style={{width: "100%"}}
                                        src={imgEnglishB1Level}
                                        alt={langArr[2][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}/></a>
                                </Col>
                            </Row>
                            <Row sm="12" className="justify-content-md-center">
                                <Col className="my-3" sm="12" md="6">
                                    <a href={imgModeling} rel="noreferrer" target="_blank"><img style={{width: "100%"}}
                                    src={imgModeling}
                                    alt={langArr[3][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}/></a>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Button className="my-3 d-lg-block d-md-block d-sm-none d-none" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/contacts"} style={{width:"234px"}} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>{langArr[4][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</Button>
                                <Button className="my-3 d-lg-none d-md-none d-sm-block" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/contacts"} style={{maxWidth:"95%"}} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>{langArr[4][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</Button>
                            </Row>
                    </Container>
        );
    }
}

export default Certificates;
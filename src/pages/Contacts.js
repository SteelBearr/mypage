import React, {Component} from 'react';
import {Col, Container, Overlay, Row, Tooltip} from "react-bootstrap";
import iconVk from "../assets/vk.png";
import iconTelegram from "../assets/telegram.png";
import iconGithub from "../assets/github.png";
import iconGmail from "../assets/gmail.png";


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false}
        this.target = React.createRef()
        this.state = {lang: "ru"}
        console.log(langArr)
    }
    componentDidMount() {
        document.title = "Контакты"
        document.querySelector("#contacts").className = "nav-link active"
    }
    componentWillUnmount() {
        document.querySelector("#contacts").classList.remove("active")
    }
    render() {
        return (
            <Container>
                <h2 style={{color: "#000077"}} className="text-center p-4">Контакты</h2>
                <Row>
                    <Col>
                        <a rel="noreferrer" target="_blank" href="https://vk.com/steelbearrr"><img src={iconVk}  height="30px" alt="Vk"/></a>
                        <b><a rel="noreferrer" target="_blank" className="ms-2" style={{color: "black"}} href="https://vk.com/steelbearrr">@steelbearrr</a></b>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <a rel="noreferrer" target="_blank" href="https://t.me/MikhailNikolaevichK"><img src={iconTelegram}  height="30px" alt="Telegram"/></a>
                        <b><a rel="noreferrer" target="_blank" className="ms-2" style={{color: "black"}} href="https://t.me/MikhailNikolaevichK">@MikhailNikolaevichK</a></b>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} height="30px" alt="Github"/></a>
                        <b><a rel="noreferrer" target="_blank" className="ms-2" style={{color: "black"}} href="https://www.github.com/SteelBearr">/SteelBearr</a></b>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <img src={iconGmail}  height="30px" alt="Gmail"/>
                        <button className="ms-2" ref={this.target} style={{color: "black", textDecoration:"underline", cursor:"pointer",background:"none",
                            border:"none", fontWeight:"bold"}} onClick={() => {navigator.clipboard.writeText("steelbearrr@gmail.com"); this.setState({show: !this.state.show})}}>steelbearrr@gmail.com</button>
                        <Overlay target={this.target.current} show={this.state.show} placement="bottom">
                            {(props) => (
                                <Tooltip {...props}>
                                    Скопировано в буфер обмена
                                </Tooltip>
                            )}
                        </Overlay>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contacts;
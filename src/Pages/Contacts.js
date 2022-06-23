import React, {Component} from 'react';
import {Col, Container, Overlay, Row, Tooltip} from "react-bootstrap";
import vk_icon from "../media/Vk.png";
import telegram_icon from "../media/telegram.png";
import github_icon from "../media/github.png";
import gmail_icon from "../media/gmail.png";



class Contacts extends Component {
    constructor(props) {
        super(props);
        this.show = {
            show: false
        };
        this.target = React.createRef();
    }
    render() {
        return (
            <Container>
                <h2 className="text-center m-4">Контакты</h2>
                <Row>
                    <Col>
                        <a href="https://vk.com/steelbearrr"><img src={vk_icon}  height="30px" alt="vk"/></a>
                        <b><a className="ms-2" style={{color: "black"}} href="https://vk.com/steelbearrr">@steelbearrr</a></b>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <a href="https://t.me/MikhailNikolaevichK"><img src={telegram_icon}  height="30px" alt="telegram"/></a>
                        <b><a className="ms-2" style={{color: "black"}} href="https://t.me/MikhailNikolaevichK">@MikhailNikolaevichK</a></b>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <a href="https://www.github.com/SteelBearr"><img src={github_icon}  height="30px" alt="github"/></a>
                        <b><a className="ms-2" style={{color: "black"}} href="https://www.github.com/SteelBearr">@SteelBearr</a></b>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <img src={gmail_icon}  height="30px" alt="gmail"/>
                        <button className="ms-2" ref={this.target} style={{color: "black", textDecoration:"underline", cursor:"pointer",background:"none",
                            border:"none", fontWeight:"bold"}} onClick={() => {navigator.clipboard.writeText("steelbearrr@gmail.com");console.log(this.show); this.setState({show: !this.show})}}>steelbearrr@gmail.com</button>
                        <Overlay target={this.target.current} show={Boolean(this.show)} placement="bottom">
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
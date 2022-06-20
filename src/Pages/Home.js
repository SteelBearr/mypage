import React, {Component} from 'react';
import img_background  from "../media/Background_white.png";
import {Button, Container, Row} from "react-bootstrap";


class Home extends Component {
    render() {
        return (
            <div style={{backgroundImage: `url(${img_background})`, position:"absolute"}} className="modal-fullscreen">
                <Container>
                    <div className="text-center position-absolute top-50 start-50 translate-middle">
                        <h1>Добро пожаловать на мой сайт!</h1>
                        <p style={{padding: "3em"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisi ut nulla facilisis mattis at at eros. Sed non ultrices tortor. Fusce pretium vel massa in accumsan. Sed mollis orci at congue ullamcorper. Nam iaculis gravida imperdiet. Vivamus in justo ut felis pellentesque convallis sit amet in sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                        <Button variant="primary" size="lg" href="/about">Узнать больше</Button>
                    </div>

                </Container>
            </div>

        );
    }
}

export default Home;
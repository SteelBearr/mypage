import React, {Component} from 'react';
import img_background  from "../media/Background_white.png";
import {Button, Container} from "react-bootstrap";


class Home extends Component {
    render() {
        return (
                <Container className="text-center" style={{
                    backgroundImage: `url(${img_background})`,
                    display: "flex",
                    height: "94.2%",
                    maxWidth: "100%",
                    alignItems: "center",
                    justifyContent: "center"}}>
                    <div style={{maxWidth: "1320px"}}>
                        <h1>Добро пожаловать на мой сайт!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisi ut nulla facilisis mattis at at eros. Sed non ultrices tortor. Fusce pretium vel massa in accumsan. Sed mollis orci at congue ullamcorper. Nam iaculis gravida imperdiet. Vivamus in justo ut felis pellentesque convallis sit amet in sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                        <Button variant="primary" size="lg" href={process.env.PUBLIC_URL + "/#/about"}>Узнать больше</Button>
                    </div>
                </Container>
        );
    }
}

export default Home;
import React, {Component} from 'react';
import imgBackground  from "../assets/backgroundHiResWhite.jpg";
import imgBackgroundCol  from "../assets/colBack.png";
import {Button, Container} from "react-bootstrap";



class Home extends Component {
    componentDidMount() {
        document.title = "Главная"
        document.querySelector("#home").className = "nav-link active"
        document.querySelector("body").style.backgroundImage = `url(${imgBackground})`
        document.querySelector("body").style.backgroundSize = "cover"
        document.querySelector("body").style.backgroundPosition = "center"
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        document.querySelector("#home").classList.remove("active")
        document.querySelector("body").style.backgroundImage = `url(${imgBackgroundCol}), url(${imgBackgroundCol})`
        document.querySelector("body").style.backgroundSize = ""
        document.querySelector("body").style.backgroundPosition = "left, right"
    }
    render() {
        return (
                <Container className="text-center"  style={{height:"calc(100vh - 56px)", display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                flexWrap: "wrap"}}>
                    <div style={{width: "70%"}}>
                        <h1 style={{color: "#000077"}}>Добро пожаловать на мой сайт!</h1>
                        <p>Здравствуй, меня зовут Михаил, я студент московского технического университета связи и информатики, обучаюсь по направлению "Иформатика и вычислительная техника". Занимаюсь программированием, фотообработкой, видеомонтажём, 3D моделированием, практически всем, что связано с информационными технологиями.</p>
                        <Button variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/about"} data-rr-ui-event-key="/#/about" onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>Узнать больше</Button>
                    </div>
                </Container>

        );
    }
}

export default Home;
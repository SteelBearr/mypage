import React, {Component} from 'react';
import img_background  from "../assets/BackgroundHiResWhite.jpg";
import {Button, Container} from "react-bootstrap";



class Home extends Component {
    componentDidMount() {
        document.title = "Главная"
        document.querySelector("#home").className = "nav-link active"
        document.querySelector("#about").className = "nav-link"
        document.querySelector("#portfolio").className = "nav-link"
        document.querySelector("#certificates").className = "nav-link"
        document.querySelector("#contacts").className = "nav-link"
        if (document.body.scrollHeight == document.body.offsetHeight){
            document.querySelector("#homeBack").className = "noScrollHomeBack"
        }
        else {
            document.querySelector("#homeBack").className = ""
        }
    }
    render() {
        return (
                <Container id="homeBack"  style={{
                    backgroundImage: `url(${img_background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    maxWidth: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div className="text-center" style={{maxWidth: "1320px",height:"100%",display: "flex",flexDirection: "column",width: "50%",alignItems: "center",
                        justifyContent: "center"}}>
                        <h1 style={{color: "#000077"}}>Добро пожаловать на мой сайт!</h1>
                        <p>Здравствуй, меня зовут Михаил, я студент московского технического университета связи и информатики, обучаюсь по направлению "Иформатика и вычислительная техника". Увлекаюсь программированием, фотообработкой, видеомонтажём, 3D моделированием, практически всем, что связано с техникой.</p>
                        <Button variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/about"} data-rr-ui-event-key="/#/about">Узнать больше</Button>
                    </div>
                </Container>

        );
    }
}

export default Home;
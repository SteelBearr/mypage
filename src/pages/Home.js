import React, {Component} from 'react';
import imgBackground  from "../assets/backgroundHiResWhite.jpg";
import imgBackgroundCol  from "../assets/colBack.png";
import {Button, Container} from "react-bootstrap";
import {langArr} from "../localization/HomeTable";



class Home extends Component {
    componentDidMount() {
        document.title = langArr[0][window.localStorage.getItem('lang') == "true" ? 1 : 0].text
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
                document.title = langArr[0][window.localStorage.getItem('lang') == "true" ? 1 : 0].text,
                <Container className="text-center"  style={{height:"calc(100vh - 56px)", display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                flexWrap: "wrap"}}>
                    <div style={{width: "70%"}}>
                        <h1 style={{color: "#000077"}}>{langArr[1][window.localStorage.getItem('lang') == "true" ? 1 : 0].text}</h1>
                        <p>{langArr[2][window.localStorage.getItem('lang') == "true" ? 1 : 0].text}</p>
                        <Button variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/about"} data-rr-ui-event-key="/#/about" onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>{langArr[3][window.localStorage.getItem('lang') == "true" ? 1 : 0].text}</Button>
                    </div>
                </Container>

        );
    }
}

export default Home;
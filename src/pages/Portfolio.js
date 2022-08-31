import React, {Component} from 'react';
import {Button, CardGroup, Container, Row} from "react-bootstrap";
import imageDataBaseProject from "../assets/dataBaseProject.jpg"
import imageCrawler from "../assets/crawler.jpg"
import imageTechnicalInspection from "../assets/technicalInspection.jpg"
import imageAuthorization from "../assets/authorization.jpg"
import imageShop from "../assets/shop.jpg"
import imageDarkestDungeonMod from "../assets/darkestDungeonMod.jpg"
import imageWitcher3Mod from "../assets/witcher3Mod.jpg"
import imageGameSaver from "../assets/gameSaver.jpg"
import Work from "../components/Work";
import {langArr} from "../localization/PortfolioTable";

class Portfolio extends Component {
    componentDidMount() {
        document.title = langArr[0][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text
        document.querySelector("#portfolio").className = "nav-link active"
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        document.querySelector("#portfolio").classList.remove("active")
    }
    render() {
        return (
            document.title = langArr[0][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text,
            <Container>
                <h2 style={{color: "#000077"}} className="text-center p-4">{langArr[0][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</h2>
                <CardGroup>
                    <Row className="justify-content-center">
                        <Work img={imageDataBaseProject} alt={langArr[1][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[1][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[1][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link="https://www.github.com/SteelBearr/Sibirskiye-airlines"/>

                        <Work img={imageCrawler} alt={langArr[2][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[2][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[2][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link="https://www.github.com/SteelBearr/Crawler"/>

                        <Work img={imageShop} alt={langArr[3][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[3][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[3][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link=""/>

                        <Work img={imageAuthorization} alt={langArr[4][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[4][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[4][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link="https://www.github.com/SteelBearr/Authorization-System"/>

                        <Work img={imageTechnicalInspection} alt={langArr[5][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[5][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[5][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link="https://www.github.com/SteelBearr/Vehicle-Inspection"/>

                        <Work img={imageDarkestDungeonMod} alt={langArr[6][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[6][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[6][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link="https://www.github.com/SteelBearr/Darkest-Dungeon-Character-Mod"/>

                        <Work img={imageWitcher3Mod} alt={langArr[7][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[7][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[7][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link="https://www.github.com/SteelBearr/The-Witcher-3-Gwent-Mod"/>

                        <Work img={imageGameSaver} alt={langArr[8][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}  title={langArr[8][0][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              text={langArr[8][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}
                              link=""/>

                        <Row className="justify-content-center">
                            <Button className="mb-3 d-lg-block d-md-block d-sm-none d-none" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/certificates"} style={{width:"214px"}} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>{langArr[0][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</Button>
                            <Button className="mb-3 d-lg-none d-md-none d-sm-block" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/certificates"} onClick={() => {window.localStorage.setItem('anim', JSON.stringify(!JSON.parse(window.localStorage.getItem('anim'))))}}>{langArr[0][1][window.localStorage.getItem('lang') === "true" ? 1 : 0].text}</Button>
                        </Row>
                    </Row>
                </CardGroup>
            </Container>
        );
    }
}

export default Portfolio;
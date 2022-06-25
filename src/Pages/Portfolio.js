import React, {Component} from 'react';
import {Badge, Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import iconGithub from "../assets/github_small.png";
import imageDataBaseProject from "../assets/DataBaseProject.jpg"
import imageCrawler from "../assets/Crawler.jpg"
import imageTechnicalInspection from "../assets/TechnicalInspection.jpg"
import imageBusinessCardSite from "../assets/BuisinessCard.jpg"
import imageDarkestDungeonMod from "../assets/DarkestDungeonMod.jpg"
import imageWitcher3Mod from "../assets/Witcher3Mod.jpg"
import imageGameSaver from "../assets/GameSaver.jpg"

class Portfolio extends Component {
    componentDidMount() {
        document.title = "Портфолио"
        document.querySelector("#portfolio").className = "nav-link active"
        window.scrollTo(0, 0)
    }
    componentWillUnmount() {
        document.querySelector("#portfolio").classList.remove("active")
    }
    render() {
        return (
            <Container>
                <h2 style={{color: "#000077"}} className="text-center p-4">Портфолио</h2>
                <CardGroup >
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="4">
                            <Card className="mb-3">
                                <Card.Img
                                    variant="top"
                                    src={imageDataBaseProject}
                                    alt="work"/>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{color:"#000077"}}>База данных для автоматизированной системы на предприятии</Card.Title>
                                    <Card.Text>
                                        Спроектированная на системе <Badge pill bg="secondary">PostgreSQL</Badge> база данных с группами пользователей, разделённых по уровню доступа к данным для проекта по созданию автоматизированной системы управления территориально-распределёнными воздушными перевозками.
                                    </Card.Text>
                                    <p><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr" style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                                        <span><svg stroke="currentColor"
                                           fill="none" strokeWidth="2"
                                           viewBox="0 5 24 24"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                           focusable="false"
                                           height="1em"
                                           width="1em"><line
                                        x1="7" y1="17" x2="17" y2="7"></line><polyline
                                        points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="4">
                            <Card className="mb-3">
                                <Card.Img
                                    variant="top"
                                    src={imageCrawler}
                                    alt="work"/>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{color:"#000077"}}>Поисковый робот</Card.Title>
                                    <Card.Text>
                                        Приложение на языке программирования <Badge pill bg="secondary">Java</Badge> без пользовательского интерфейса, представляющая собой поисковый робот для индексации веб-страниц. Программа посылает запрос на заданный веб-сервер, анализирует полученный ответ на наличие ссылок на ещё не просмотренные веб-страницы и анализирует их все таким же образом на следующей итерации до тех пор, пока не будет достигнута заданная глубина. В приложении реализована многопоточность. Такая программа может использоваться поисковых сервисов.
                                    </Card.Text>
                                    <p><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr" style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                                        <span><svg stroke="currentColor"
                                                   fill="none" strokeWidth="2"
                                                   viewBox="0 5 24 24"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   focusable="false"
                                                   height="1em"
                                                   width="1em"><line
                                            x1="7" y1="17" x2="17" y2="7"></line><polyline
                                            points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="4">
                            <Card className="mb-3">
                                <Card.Img
                                    variant="top"
                                    src={imageTechnicalInspection}
                                    alt="work"/>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{color:"#000077"}}>Вспомогательная система для ТО автомобиля</Card.Title>
                                    <Card.Text>
                                        Приложение на языке программирования <Badge pill bg="secondary">C#</Badge> визуализирует процесс технического осмотра автомобилей. По мере его прохождения вбиваются данные, и по окончании формируется отчёт с выделением параметров, не соответствующих нормам. В программе представлен ряд автобобилей для отображения.
                                    </Card.Text>
                                    <p><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr" style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                                        <span><svg stroke="currentColor"
                                                   fill="none" strokeWidth="2"
                                                   viewBox="0 5 24 24"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   focusable="false"
                                                   height="1em"
                                                   width="1em"><line
                                            x1="7" y1="17" x2="17" y2="7"></line><polyline
                                            points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="4">
                            <Card className="mb-3">
                                <Card.Img
                                    variant="top"
                                    src={imageBusinessCardSite}
                                    alt="work"/>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{color:"#000077"}}>Сайт-визитка</Card.Title>
                                    <Card.Text>
                                        Первый веб-проект. На странице представлено несколько разделов, создана мультиязычность. Используются библиотеки <Badge pill bg="secondary">Boostrap</Badge> и <Badge pill bg="secondary">jQuery</Badge>
                                    </Card.Text>
                                    <p><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr" style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                                        <span><svg stroke="currentColor"
                                                   fill="none" strokeWidth="2"
                                                   viewBox="0 5 24 24"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   focusable="false"
                                                   height="1em"
                                                   width="1em"><line
                                            x1="7" y1="17" x2="17" y2="7"></line><polyline
                                            points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="4">
                            <Card className="mb-3">
                                <Card.Img
                                    variant="top"
                                    src={imageDarkestDungeonMod}
                                    alt="work"/>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{color:"#000077"}}>Модификация для игры Darkest Dungeon</Card.Title>
                                    <Card.Text>
                                        Модификация для игры Darkest Dungeon, добавляющая в игровой процесс нового персонажа, помимо представленных изначально. Для персонажа созданы текстуры, способности, диалоговые фразы, а также звуковые эффекты.
                                    </Card.Text>
                                    <p><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr" style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                                        <span><svg stroke="currentColor"
                                                   fill="none" strokeWidth="2"
                                                   viewBox="0 5 24 24"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   focusable="false"
                                                   height="1em"
                                                   width="1em"><line
                                            x1="7" y1="17" x2="17" y2="7"></line><polyline
                                            points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="4">
                            <Card className="mb-3">
                                <Card.Img
                                    variant="top"
                                    src={imageWitcher3Mod}
                                    alt="work"/>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{color:"#000077"}}>Модификация для игры The Witcher 3: Wild Hunt</Card.Title>
                                    <Card.Text>
                                        Модификация для игры The Witcher 3: Wild Hunt, добавляющая в игровой процесс новые предметы для внутреигровой мини-игры "Гвинт", а также изменяющая параметры уже существущих предметов для внесения баланса.
                                    </Card.Text>
                                    <p><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr" style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                                        <span><svg stroke="currentColor"
                                                   fill="none" strokeWidth="2"
                                                   viewBox="0 5 24 24"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   focusable="false"
                                                   height="1em"
                                                   width="1em"><line
                                            x1="7" y1="17" x2="17" y2="7"></line><polyline
                                            points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="4">
                            <Card className="mb-3">
                                <Card.Img
                                    variant="top"
                                    src={imageGameSaver}
                                    alt="work"/>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{color:"#000077"}}>Система управления <div style={{whiteSpace:"nowrap"}}>сохранениями <Badge pill bg="warning"><b>В разработке</b></Badge></div></Card.Title>
                                    <Card.Text>
                                        Далеко не во всех компьютерных играх реализована система отдельных сохранений, часто используется система автосохранений. Приложение, реализованное на языке программирования <Badge pill bg="secondary">C#</Badge>, создаёт систему отдельных сохранений для большинства одиночных игр.
                                    </Card.Text>
                                    <p><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr"><img src={iconGithub} alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.github.com/SteelBearr" style={{color: "black", textDecoration: "none"}} className="ms-2">Github
                                        <span><svg stroke="currentColor"
                                                   fill="none" strokeWidth="2"
                                                   viewBox="0 5 24 24"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   focusable="false"
                                                   height="1em"
                                                   width="1em"><line
                                            x1="7" y1="17" x2="17" y2="7"></line><polyline
                                            points="7 7 17 7 17 17"></polyline></svg></span></a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Row className="justify-content-center">
                            <Button className="mb-3 d-lg-block d-md-block d-sm-none d-none" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/certificates"} style={{width:"163px"}}>Сертификаты</Button>
                            <Button className="mb-3 d-lg-none d-md-none d-sm-block" variant="outline-dark" size="lg" href={process.env.PUBLIC_URL + "/#/certificates"}>Сертификаты</Button>
                        </Row>
                    </Row>
                </CardGroup>
            </Container>
        );
    }
}

export default Portfolio;
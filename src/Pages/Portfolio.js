import React, {Component} from 'react';
import {Badge, Button, CardGroup, Container, Row} from "react-bootstrap";
import imageDataBaseProject from "../assets/dataBaseProject.jpg"
import imageCrawler from "../assets/crawler.jpg"
import imageTechnicalInspection from "../assets/technicalInspection.jpg"
import imageAuthorization from "../assets/authorization.jpg"
import imageShop from "../assets/shop.jpg"
import imageDarkestDungeonMod from "../assets/darkestDungeonMod.jpg"
import imageWitcher3Mod from "../assets/witcher3Mod.jpg"
import imageGameSaver from "../assets/gameSaver.jpg"
import Work from "../components/Work";

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
                <CardGroup>
                    <Row className="justify-content-center">
                        <Work img={imageDataBaseProject} alt="Data Base Project"  title="База данных для автоматизированной системы на предприятии"
                              text={<>Спроектированная на <Badge pill bg="secondary">PostgreSQL</Badge> база данных для проекта по созданию автоматизированной системы управления территориально-распределёнными воздушными перевозками. В ней созданы группы пользователей, разделённые по уровню доступа к данным.</>}
                              link="https://www.github.com/SteelBearr"/>

                        <Work img={imageCrawler} alt="Crawler"  title="Поисковый робот"
                              text={<>Приложение без пользовательского интерфейса на языке программирования <span><Badge pill bg="secondary">Java</Badge>,</span> представляющее собой поисковый робот для индексации веб-страниц. Программа посылает запрос на заданный веб-сервер, анализирует полученный ответ на наличие ссылок на ещё не просмотренные веб-страницы и анализирует их таким же образом на следующей итерации до тех пор, пока не будет достигнута заданная глубина. В приложении реализована многопоточность. Такая программа может использоваться для поисковых сервисов.</>}
                              link="https://www.github.com/SteelBearr"/>

                        <Work img={imageShop} alt="Business Card Site"  title="Сайт для магазина одежды"
                              text={<>Первый веб-проект. На странице представлена краткая информация о компании, галерея, контакты и форма для отклика соискателей. Используются библиотеки <Badge pill bg="secondary">Boostrap</Badge> и <Badge pill bg="secondary">jQuery</Badge></>}
                              link=""/>

                        <Work img={imageAuthorization} alt="Authorization"  title="Система авторизации"
                              text={<>Приложение на языке программирования <span><Badge pill bg="secondary">C#</Badge>,</span> представляющее собой систему авторизации с возможностью регистрации новых пользователей. Хранение паролей осуществляется в зашифрованном виде.</>}
                              link="https://www.github.com/SteelBearr"/>

                        <Work img={imageTechnicalInspection} alt="TechnicalInspection"  title="Вспомогательная система для технического осмотра автомобиля"
                              text={<>Приложение на языке программирования <Badge pill bg="secondary">С#</Badge> визуализирует процесс технического осмотра автомобилей. По мере его прохождения вносятся данные, и по окончании формируется отчёт с выделением параметров, не соответствующих нормам. В программе представлен ряд автомобилей для отображения.</>}
                              link="https://www.github.com/SteelBearr"/>

                        <Work img={imageDarkestDungeonMod} alt="Darkest DungeonMod"  title="Модификация для игры Darkest Dungeon"
                              text="Модификация для игры Darkest Dungeon, добавляющая в игровой процесс нового персонажа. Для персонажа созданы текстуры, способности, диалоговые фразы, звуковые эффекты, а также уникальные внутреигровые события."
                              link="https://www.github.com/SteelBearr"/>

                        <Work img={imageWitcher3Mod} alt="The Witcher 3 Mod"  title="Модификация для игры The Witcher 3: Wild Hunt"
                              text={<>Модификация для игры The Witcher 3: Wild Hunt, добавляющая в игровой процесс новые предметы для внутреигровой мини-игры "Гвинт", а также изменяющая параметры уже существущих предметов для внесения баланса.</>}
                              link="https://www.github.com/SteelBearr"/>

                        <Work img={imageGameSaver} alt="iGame Saver"  title={<>Система управления <div style={{whiteSpace:"nowrap"}}>сохранениями <Badge pill bg="warning"><b>В разработке</b></Badge></div></>}
                              text={<>Далеко не во всех компьютерных играх реализована система отдельных сохранений, часто используется система автосохранений. Приложение, реализованное на языке программирования <span><Badge pill bg="secondary">C#</Badge>,</span> создаёт систему отдельных сохранений для большинства одиночных игр.</>}
                              link="https://www.github.com/SteelBearr"/>

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
import React, {Component} from 'react';
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import github_icon from "../media/github_small.png";

class Portfolio extends Component {
    render() {
        return (
            <Container>
                <h2 className="text-center m-4">Портфолио</h2>
                <CardGroup>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/323190/ss_6462337ad7ec4e705a501e7121aa1de7d9013dcb.1920x1080.jpg?t=1655472899"
                                alt="work"/>
                            <Card.Body>
                                <Card.Title>Work 1</Card.Title>
                                <Card.Text>
                                    Nam venenatis accumsan est, ac tincidunt sem rutrum at. Sed sed odio facilisis, volutpat sem ut, venenatis urna. Nullam nec diam in leo scelerisque lobortis nec a tellus. Vivamus euismod, enim sit amet pellentesque tincidunt, libero turpis sagittis eros, eu dictum metus dui pulvinar quam. Mauris faucibus mauris arcu, at tincidunt neque condimentum ac. Fusce eu luctus sem, vel porta felis. Nunc at elementum elit, sit amet lobortis tortor. Ut et arcu sed purus malesuada tempor. Duis in dignissim neque, sit amet fringilla augue.
                                </Card.Text>
                                <p><a href="https://www.github.com/SteelBearr"><img src={github_icon} alt=""/></a></p>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/323190/ss_680799fc8f335607924c5703e10eb62780f91d97.1920x1080.jpg?t=1655472899"
                                alt="work"/>
                            <Card.Body>
                                <Card.Title>Work 2</Card.Title>
                                <Card.Text>
                                    Nam venenatis accumsan est, ac tincidunt sem rutrum at. Sed sed odio facilisis, volutpat sem ut, venenatis urna. Nullam nec diam in leo scelerisque lobortis nec a tellus. Vivamus euismod, enim sit amet pellentesque tincidunt, libero turpis sagittis eros, eu dictum metus dui pulvinar quam. Mauris faucibus mauris arcu, at tincidunt neque condimentum ac. Fusce eu luctus sem, vel porta felis. Nunc at elementum elit, sit amet lobortis tortor. Ut et arcu sed purus malesuada tempor. Duis in dignissim neque, sit amet fringilla augue.
                                </Card.Text>
                                <p><a href="https://www.github.com/SteelBearr"><img src={github_icon} alt=""/></a></p>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/323190/ss_9f89445fe1e07acc39d3537037f33eb90ad5834e.600x338.jpg?t=1655472899"
                                alt="work"/>
                            <Card.Body>
                                <Card.Title>Work 3</Card.Title>
                                <Card.Text>
                                    Nulla facilisi. Nam quis aliquet orci, a imperdiet tellus. Aliquam vestibulum convallis nibh, quis gravida quam rutrum vel. In varius faucibus semper. Nam et felis id turpis viverra eleifend sed ac eros. Cras vitae bibendum sapien, vel rhoncus metus. Quisque volutpat arcu eget ante sollicitudin maximus. Sed leo velit, tristique eget lectus et, mollis efficitur ex. Curabitur sit amet finibus purus. Nulla facilisi. Curabitur consequat ligula non augue consequat finibus.
                                </Card.Text>
                                <p><a href="https://www.github.com/SteelBearr"><img src={github_icon} alt=""/></a></p>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/323190/ss_4257ced5cb8e2409547363316611c4cd4d718578.1920x1080.jpg?t=1655472899"
                                alt="work"/>
                            <Card.Body>
                                <Card.Title>Work 4</Card.Title>
                                <Card.Text>
                                    Nulla auctor turpis sit amet odio condimentum, at varius magna porta. Phasellus quis risus vitae erat mollis posuere eu non tortor. Duis mauris urna, elementum quis nisl vitae, fringilla porttitor lorem. Fusce semper nisl id maximus dictum. Morbi sit amet sem lacinia, pretium purus vel, porttitor urna. Cras imperdiet suscipit augue et faucibus. Nunc libero mauris, scelerisque eu lorem sed, cursus vehicula lectus.
                                </Card.Text>
                                <p><a href="https://www.github.com/SteelBearr"><img src={github_icon} alt=""/></a></p>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/323190/ss_9607dc7618a72e189f17d09e9b42a93ae8ee648c.1920x1080.jpg?t=1655472899"
                                alt="work"/>
                            <Card.Body>
                                <Card.Title>Work 5</Card.Title>
                                <Card.Text>
                                    Sed ac neque eu neque egestas elementum ut vel ipsum. Fusce sit amet eleifend dui, eu feugiat mauris. Phasellus sodales placerat lacus, non semper arcu tempor vitae. Fusce tristique sapien ante, vitae posuere erat rutrum eget. Phasellus volutpat metus tellus, nec lacinia mi tincidunt eget. Praesent felis justo, ornare eu egestas eget, consectetur eu dui.
                                </Card.Text>
                                <p><a href="https://www.github.com/SteelBearr"><img src={github_icon} alt=""/></a></p>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </Container>
        );
    }
}

export default Portfolio;
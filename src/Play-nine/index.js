import React, {Component} from "react";
import "./index.css"
import {Container, Row, Col, Button} from "react-bootstrap";
import { GiShuriken} from "react-icons/gi"

export default class PlayNine extends Component {
    constructor (props) {
        super(props);
        this.state = {
           randomNumber: 0,
            changes: 5,
            randomArray: []
        }
    }

    componentDidMount() {
        this.generateRandomNumber();

    }

    componentWillUnmount() {
        this.setState({randomArray: []})
    }

    generateRandomNumber = () => {
        let {randomArray} = this.state; //destructure array of random numbers from state
        this.setState({ randomArray: []}); //emtpy randomArrays
        let localRandomArray = [];

        //generate Random Numbers
        let randomNumber = Math.floor(Math.random() * 9) + 1;
        this.setState({randomNumber});

        //generate an array of numbers in the randomNumbers,
        // so as to use to update the count of stars
        for (let i = 1; i <= randomNumber; i++) {
            localRandomArray.push(i)
        }

        this.setState({randomArray: localRandomArray}) ;

    };


    render() {
        const {randomNumber, changes, randomArray} = this.state;
        console.log(randomArray);
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 className={"float-left"}> PlayNine</h2>
                        </Col>
                        <Col md={6}>
                            <h4 className={"float-right"}>Changes: {changes}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={{ span: 8, offset: 2 }}>
                            <div className={"mt-4"}>
                                {
                                    randomArray.map(num => {
                                        return <GiShuriken/>;
                                    })
                                }

                                {/*{randomNumber} STARS*/}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className={"mt-4"}>
                            Numbers {randomNumber}
                        </Col>
                        <Col md={4} className={"mt-4"}>
                            Selected Number
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className={"btn-containter center"}>
                            <Button onClick={this.generateRandomNumber} className={"mx-2"}>Click</Button>
                            <Button className={"mx-2"}>Refresh</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
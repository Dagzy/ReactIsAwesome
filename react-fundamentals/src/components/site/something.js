import React, {Component} from 'react';
import Variables from './Test'
import {Container, Row, Col} from 'reactstrap';
// import {doMath as DoMath} from './sometest'
const theDiv = {
    border: '5px solid black'
}
const theRow = {
    backgroundColor: "#FFFFFF",
    border: "2px solid white"
}
const theCol = {
    border: "2px solid black"
}
class Jack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "quincy"
        }
    }
    render() {
        console.log(Variables)
        return (
            <Container id="theDiv" style={theDiv}>
                <Row style={theRow}>
                    {Variables.map(vars => {
                        return <Col xs="3" style={theCol} key={vars.name}>{vars.name}</Col>
                    })}
                </Row>
                <Row style={theRow}>
                    {Variables.map(vars => {
                        console.log(vars)
                        if (vars.glasses) {
                            return (
                                <Col xs="3" style={theCol} key={vars.name}>{vars.gender}</Col>
                            )
                        } else {
                            return (
                                <Col xs="3" style={theCol} key={vars.name}>False</Col>
                            )
                        }
                    })}
                </Row>

            </Container>
        )
    }
}
export default Jack;
// <DoMath title={this.state.name}/>
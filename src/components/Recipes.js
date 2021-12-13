import React from "react";
import { Card, Container, Col, Row } from 'react-bootstrap'
import Meal from "./Meal";
import styled from "styled-components";

const Message = styled.div`
    color: red;
`;
function Recipes(props) {
    if (!props.ready) {
        return (
            <div></div>
        );
    } else {
        let message;
        if (props.highlow[0]) {
            message = <Message>Your current blood sugar level is above the recommended values. Here are some food to lower your blood sugar:</Message>;
        } else if (props.highlow[1]){
            message = <Message>Your current blood sugar level is below the recommended values. Here are some food to increase your blood sugar:</Message>;
        } else {
            message = <Message>You are within range</Message>;
        }
        return (
            <div>
                {message}
                <Container style={{margin: 'auto'}}>
                    <Row md={2} style={{alignItems: 'center'}}>
                        <Col style={{padding: '0px'}}><Meal values={props.values} highlow={props.highlow} meal={"b"}></Meal></Col>
                        <Col style={{padding: '0px'}}><Meal values={props.values} highlow={props.highlow} meal={"l"}></Meal></Col>
                    </Row>
                    <Row md={2}>
                        <Col style={{padding: '0px'}}><Meal values={props.values} highlow={props.highlow} meal={"d"}></Meal></Col>
                        <Col style={{padding: '0px'}}><Meal values={props.values} highlow={props.highlow} meal={"s"}></Meal></Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Recipes;
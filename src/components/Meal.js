import React from "react";
import { Card } from 'react-bootstrap'
import Foods from "./Foods"
function Meal(props) {
    let meal;
    let text;
    if (props.meal === "b") {
        meal = <Card.Title><b>Breakfast</b></Card.Title>;
        text = <Card.Text>Here are some breakfast choices</Card.Text>
    } else if (props.meal === "l"){
        meal = <Card.Title><b>Lunch</b></Card.Title>;
        text = <Card.Text>Here are some lunch choices</Card.Text>
    } else if (props.meal === "d") {
        meal = <Card.Title><b>Dinner</b></Card.Title>;
        text = <Card.Text>Here are some dinner choices</Card.Text>
    } else {
        meal = <Card.Title><b>Snack</b></Card.Title>;
        text = <Card.Text>Here are some snack choices</Card.Text>
    }
    return (
        <div>
            <br></br>
            <Card style={{ margin: 'auto', width:'20rem', height:'15rem'}}>
                <Card.Body>
                    {meal}
                    {text}
                    <Foods values={props.values} highlow={props.highlow} meal={props.meal}></Foods>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Meal;
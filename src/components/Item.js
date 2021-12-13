import React from "react";
import { Card } from 'react-bootstrap'
import styled from "styled-components";

const Short = styled.ul`
    margin-left: 20px;
`;
function Item(props) {
    if (props.short) {
        if (!props.values["before"]) {
            return (<div></div>);
        }
        if (props.helpslower && props.highlow[0]) {
            return (
                <div>
                    <h4 style={{color:'blue'}}><b>{props.title}</b></h4>
                    <Short>
                    <li>Pumpkin Seeds</li>
                    <li>Nuts</li>
                    <li>Avocadoes</li>
                    <li>Beans</li>
                    </Short>
                </div>
            );
        } else if (props.helpsincrease && props.highlow[1]){
            return (
                <div>
                    <h4 style={{color:'blue'}}><b>{props.title}</b></h4>
                    <Short>
                    <li>Fruit juice</li>
                    <li>Fat free milk</li>
                    <li>Honey</li>
                    <li>Fresh or dried fruit</li>
                    </Short>
                </div>
            );
        } else {
            return (<div></div>);
        }
    } else {
        if ((props.helpsincrease && props.highlow[0]) || (props.helpslower && props.highlow[1])) {
            return (<div></div>);
        } else {
            return (
                <div>
                    <h4 style={{color:'blue'}}><b>{props.title}</b></h4>
                    <p><b>Ingredients: </b>{props.ingredients}</p>
                    <p>{props.instructions}</p>
                    <p><b>Carbohydrates: </b>{props.carbs}</p>
                    <p><b>Protein: </b>{props.protein}</p>
                    <p><b>Fiber: </b>{props.fiber}</p>
                </div>
            );
        }
        
    }
    
}

export default Item;
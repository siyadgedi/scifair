import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { RadioGroup, Radio } from 'react-radio-group'
import Recipes from "./Recipes"
import {calculateBloodSugar, appendSpreadsheet} from "./script"
const defaultValues = {
  name: "",
  bloodSugar: 0,
  before: true
};

const formStyle = {
  marginTop: '3.5rem',
  width: '20rem',
  margin: 'auto',
  fontSize: '20px'
};

const HealthForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const [HL, setHL] = useState([false, false]);
  const handleRadioChange = (value) => {
    if (value === "before") {
      setFormValues({
        ...formValues,
        before: true,
      });
    } else {
      setFormValues({
        ...formValues,
        before: false,
      });
    }
    
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if ( !!errors[name] ) setErrors({
      ...errors,
      [name]: null
    });
  };

  const findErrors = () => {
    const newErrors = {}
    if (formValues["name"] === "") {
      newErrors.name = "Please enter your first name"
    }
    if (formValues["bloodSugar"] == 0) {
      newErrors.bloodSugar = "Please enter your blood sugar"
    }
    return newErrors;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setReady(true);
      setHL(calculateBloodSugar(formValues));
      const date = new Date();
      let before = "";
      if (formValues["before"]) {
        before = "Before";
      } else {
        before = "After";
      }
      const newRow = { Name: formValues["name"], "Blood Sugar Level (mg/dL)": formValues["bloodSugar"], "Time": date.toString(), "Before/After": before};
      appendSpreadsheet(newRow);
    }
  };
  if (ready) {
    return (<div><Recipes ready={ready} values={formValues} highlow={HL}></Recipes></div>);
  } else {
    return (
      <div style={formStyle}>
        <form>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="name" placeholder="Name" onChange={handleInputChange} isInvalid={ !!errors.name }/>
            <Form.Control.Feedback type='invalid'>
          { errors.name }
      </Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Blood Sugar (mg/dL)</Form.Label>
            <Form.Control name="bloodSugar" placeholder="0" onChange={handleInputChange} isInvalid={ !!errors.bloodSugar }/>
            <Form.Control.Feedback type='invalid'>
          { errors.bloodSugar }
      </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Is this before or after a meal?</Form.Label>
            <RadioGroup name="time" onChange={handleRadioChange}>
              <Radio value="before" /> Before
              <br></br>
              <Radio value="after" /> After
            </RadioGroup>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
            </Button>
        </Form>
        </form>
        
      </div>
  
    );
  }
  
};
export default HealthForm;
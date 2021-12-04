import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MyButton = styled(Button)`
    margin-top: 30px;
`;
const defaultValues = {
  name: "",
  bloodSugar: 0,
};
const formStyle = {
    marginTop: '100px'
};
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
      <div style={formStyle}> 
<form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="bloodSugar"
            label="Blood Sugar"
            type="number"
            value={formValues.bloodSugar}
            onChange={handleInputChange}
          />
        </Grid>
        <MyButton variant="contained" color="primary" type="submit">
          Submit
        </MyButton>
      </Grid>
    </form>
      </div>
    
  );
};
export default Form;
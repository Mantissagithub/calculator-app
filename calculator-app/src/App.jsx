import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const App = () => {
  const [{ input, output }, setState] = useState({ input: "", output: "" });

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const cardStyle = {
    backgroundColor: "#f2f2f2",
    padding: "16px",
  };

  const buttonStyle = {
    width: "60px",
    height: "60px",
    fontSize: "24px",
    backgroundColor: "#4caf50",
    color: "white",
  };

  const handleInput = (value) => {
    setState((prevState) => ({ ...prevState, input: prevState.input + value }));
  };

  const clearInput = () => {
    setState({ input: "", output: "" });
  };

  const calculateResult = () => {
    try {
      setState((prevState) => ({ ...prevState, output: eval(prevState.input).toString() }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, output: "Error" }));
    }
  };

  const handleBackspace = () => {
    setState((prevState) => ({ ...prevState, input: prevState.input.slice(0, -1) }));
  };

  const handleDecimal = () => {
    setState((prevState) => ({ ...prevState, input: prevState.input + "." }));
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Calculator
          </Typography>
          <Typography variant="h5" gutterBottom>
            {input}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {output}
          </Typography>
          <Grid container spacing={2}>
            {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/", "←", "."].map((value) => (
              <Grid item xs={3} key={value}>
                <Button
                  variant="contained"
                  style={buttonStyle}
                  onClick={() => {
                    switch (value) {
                      case "C":
                        clearInput();
                        break;
                      case "=":
                        calculateResult();
                        break;
                      case "←":
                        handleBackspace();
                        break;
                      case ".":
                        handleDecimal();
                        break;
                      default:
                        handleInput(value);
                    }
                  }}
                >
                  {value}
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;

import { useState } from 'react';
import { Card, Typography, Button, Grid } from '@mui/material';

function App() {
  const [value1, setValue1] = useState(''); // Use string to allow multiple digits
  const [value2, setValue2] = useState('');
  const [value, setValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleOperation = (op) => {
    if (op === '=' && value1 !== '' && value2 !== '') {
      const num1 = parseFloat(value1);
      const num2 = parseFloat(value2);
      switch (operator) {
        case '+':
          setValue(num1 + num2);
          break;
        case '-':
          setValue(num1 - num2);
          break;
        case '×':
          setValue(num1 * num2);
          break;
        case '÷':
          if (num2 === 0) {
            setValue('ERROR');
          } else {
            setValue(num1 / num2);
          }
          break;
        case '%':
          setValue(num1 % num2);
          break;
        default:
          break;
      }
      setValue1('');
      setValue2('');
      setOperator('');
    } else if (!operator) {
      setOperator(op);
    } else {
      // Handle operator when operator is already set
      handleOperation('=');
      setOperator(op);
    }
  };

  const handleClear = () => {
    setValue1('');
    setValue2('');
    setValue('');
    setOperator('');
  };

  const handleSign = () => {
    if (value !== '') {
      setValue(-1 * parseFloat(value));
    } else if (value1 !== '') {
      setValue1(-1 * parseFloat(value1).toString());
    } else if (value2 !== '') {
      setValue2(-1 * parseFloat(value2).toString());
    }
  };

  const handleNumericInput = (num) => {
    if (!operator) {
      setValue1(value1 + num);
    } else {
      setValue2(value2 + num);
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 10, padding: 2 }}>
      <Typography variant='h2' align='center' gutterBottom>
        CALCULATOR APP
      </Typography>
      <Typography variant='h5' align='right' gutterBottom>
        {value}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Button variant='contained' onClick={handleClear} fullWidth>
            AC
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={handleSign} fullWidth>
            +/-
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleOperation('%')} fullWidth>
            %
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleOperation('÷')} fullWidth>
            ÷
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('7')} fullWidth>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('8')} fullWidth>
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('9')} fullWidth>
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleOperation('×')} fullWidth>
            ×
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('4')} fullWidth>
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('5')} fullWidth>
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('6')} fullWidth>
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleOperation('-')} fullWidth>
            -
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('1')} fullWidth>
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('2')} fullWidth>
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('3')} fullWidth>
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleOperation('+')} fullWidth>
            +
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant='contained' onClick={() => handleNumericInput('0')} fullWidth>
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleNumericInput('.')} fullWidth>
            .
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => handleOperation('=')} fullWidth>
            =
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

// export default App;

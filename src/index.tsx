import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  DISPLAY_USER_NAME,
  addNumber,
} from './components/constants/learnts.model';
import * as customer from './components/constants/utils';

console.log('Name of god ->', DISPLAY_USER_NAME);

const result = addNumber(200, 300);
console.log(`the result is, I am good ${result} we one the goal`);

console.log(customer.color.BLUE);
var objCustomer = new customer.Customer('devesh', 30, 'london');
objCustomer.displayCutomer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

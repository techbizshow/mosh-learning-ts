import { stringify } from 'querystring';
import React from 'react';
import Header from './components/Header';
import { ProdcutDetails } from './components/constants/learnts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY FIRST PAGE</h1>
        <Header />
        <h1>{ProdcutDetails.des}</h1>
        <br />
      </header>
    </div>
  );
}

export default App;

//object
// {
//   cname: "abc",
//   age:100
// }

//json
// {
//     "cname": "abc",
//     "age":"100"
// }

//array
// const pname = [10, 203, 4004, 'raja'];

//map always work on array
// [
//   {fanme:"abc", city:"ncnc", age:100}
//   {fanme:"abc1", city:"ncnc1", age:200}
//   {fanme:"abc2", city:"ncnc2", age:300}
// ]

// stringify({ sname: 'Sian', ag: 100 }, { sname: 'Bian', ag: 200 });
// parseInt('2000');
// 2000.toString()


//This changes has been made by Pankaj
//This changes has been made by Pankaj
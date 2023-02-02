import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
let time = 0;
setInterval(()=>{
  time ++;

 const Four = Math.floor (time/100000);
  const Three = Math.floor(time/10000);
  const Two = Math.floor(time/1000);
  const One = Math.floor(time/100); 
  root.render(
  <React.StrictMode>
    <App numberOne ={One} numberTwo={Two} numberThree = {Three} numberFour = {Four}/>
  </React.StrictMode>
);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Boton from './Boton';
import Card from './Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Boton numero={1}/>
  <Boton numero={2}/>
  <Boton numero={3}/>
  <Boton numero={4}/>
  <Card nombre= "Benamin Vicuña" fechaNacimiento={1978} nacionalidad ="Chilena" series= {['Terapia Alternativa','Farsantes','Atav']} cromo={true}/>
  <Card nombre= "M. Eugenia Suarez" fechaNacimiento={1992} nacionalidad ="Argentina" series= {['Terapia Alternativa','Casi Angeles','Atav']} cromo={true}/>

  </> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

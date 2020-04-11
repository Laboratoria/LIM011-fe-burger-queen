import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../RutaCss/logoReina.svg';
import '../RutaCss/estilo.css';

const Encabezado = ({ocultar}) => {
  if (ocultar) {
return(
  <div data-testid="imagen">
    <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <Link className="btn btn-success float-right m-5 btn-lg border border-light" to="/chef"> Ver Pedidos </Link>
    </header>
  </div>
)} 
return(
     <div data-testid="imagen">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <Link className="btn btn-success float-right m-5 btn-lg border border-light" to="/">Menu</Link>
      </header>
  </div>
)}

export default Encabezado;
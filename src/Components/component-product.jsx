import React from 'react';


const Producto = ({ documento, buscarProducto }) => {
   const { producto, precio, url } = documento.data();
   return (
      <section data-testid="itemsproductos" className="card style prod" >
         <div data-testid="clickProducto" key={documento.id} onClick={() => { buscarProducto(documento.data(), documento.id) }}>
            <img src={url} className="card-img img" alt="producto" />
            <h5 data-testid='item'>{producto}</h5>
            <p data-testid='item'>S/.{precio}</p>
         </div>
      </section>
   )
};

export default Producto;

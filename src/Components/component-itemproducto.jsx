import React, { useState } from "react";

const ItemProducto = ({ dataProducto, eliminarProducto, cantidadproducto }) => {

  const { cantidad, producto, precio } = dataProducto;
  const [Cantidad, setCantidad] = useState(cantidad);

  const incrementar = (e) => {
    const p = e.target.value;
    cantidadproducto(dataProducto.id, p);
    setCantidad(p);
  };

  //  console.log('vista primo', dataProducto)
  return (
    <section className="row justify-content-between">
      <input data-testid="clickCantidad" className="col-sm-1 ml-3 form-control tamaño" type="text" onChange={incrementar} placeholder="N°" />
      <h6 data-testid="items" className="col-sm-5 text-white">{producto}</h6>
      <h6 data-testid="items" className="col-sm-2 text-white">{precio}</h6>
      <h6 data-testid="items" className="col-sm-2 text-white">S/.{precio * Cantidad}</h6>
      <button data-testid="clickEliminar" className="btn btn-light"
        onClick={() => {
          const idElimina = dataProducto;
          eliminarProducto(idElimina);
        }}>
        <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
          <path d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
      </button>
    </section>
  )
}

export default ItemProducto; 
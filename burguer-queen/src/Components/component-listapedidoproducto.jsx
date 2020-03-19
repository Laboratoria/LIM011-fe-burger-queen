import React  from 'react';
import ItemProduct from './component-itemproducto';
import './component-menu.css';

const ListaPedidoProducto = ({ array, eliminar}) => {

  return (
    <section>
      <div className="lista">
        <p>Vista del Pedido</p>
        <form>
          <label> Nombre <input type="text" /> </label> <br />
          <label> N° de Mesa <input type="text" /> </label>
        </form>
      </div>
      {
        array.length === 0 ?
          'Iniciar Pedido' :
          array.map((el, index) => <ItemProduct dataProducto={el} key={index} eliminarProducto={eliminar} />)
      }
    </section>
  )
}

export default ListaPedidoProducto;


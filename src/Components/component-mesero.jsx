import React, { useState } from 'react';
import Menu from './component-menu';
import ListaPedidoProducto from './component-listapedidoproducto';
import { enviarOrden } from './compo.js';
import 'firebase/firestore';

const ComponentMesero = () => {
  let [, setState] = useState();

  const [arrayNombre, setArrayNombre] = useState([]);
  const [arrayMesa, setArrayMesa] = useState([]);

  const [arrayProductosOrden, setArrayProductosOrden] = useState([]);
  const buscarProducto = (obj, Id) => {
    // console.log('vista padre',objTarea); 

    let arrayId = arrayProductosOrden.filter(el => el.id === Id)
    // console.log(arrayId);
    if (arrayId.length === 0) {
      const producto = {
        cantidad: 1,
        producto: obj.producto,
        precio: obj.precio,
        id: Id,
        url: obj.url,
      }
      const newArr = arrayProductosOrden.concat([producto]);
      setArrayProductosOrden(newArr);
    }
  }

  const buscaNombreyMesa = (nombre, mesa) => {
    setArrayNombre(nombre);
    setArrayMesa(mesa);
  }

  function eliminarProducto(obj) {
    const temp = arrayProductosOrden;
    // console.log('Producto que queremos borrar', obj);
    const indice = temp.indexOf(obj);
    // console.log('indice del producto', obj);
    if (indice >= 0) {
      temp.splice(indice, 1)
    }
    setArrayProductosOrden(temp)
    //  console.log(arrayProductosOrden);
    setState({});
  };

  const incrementarCantidad = (productoId, cant) => {
    const arrNew = arrayProductosOrden.map((element) => {
      // console.log('antes', element);
      if (productoId === element.id) {
        return {
          ...element,
          cantidad: cant,
        };
      }
      // console.log('despues', element);
      return element;
    });
    setArrayProductosOrden(arrNew);
  };

  const totalOrden = () => {
    let totalprecio = 0;
    if (arrayProductosOrden.length !== 0) {
      totalprecio = arrayProductosOrden.reduce((acum, obj) => acum + obj.precio * obj.cantidad, 0)
      // console.log('precio total', totalprecio);
    }
    return totalprecio
  }
  return (
    <main>
      <div className="container-fluid ">
        <div className="row">
          <section className="col-sm-12 col-md-6 fondo">
            <Menu buscarProductos={buscarProducto} />
          </section>
          <section className="col-sm-12 col-md-6 plomo ">
            <ListaPedidoProducto array={arrayProductosOrden} eliminarProductos={eliminarProducto} cantidadProductos={incrementarCantidad} buscarDatoCliente={buscaNombreyMesa} />
          </section>
        </div>
      </div>

      <section className="container">
        <div className=" row justify-content-end fixed-bottom ">
          <div className="col-sm-3 verde text-center" >
            <h3 data-testid="montoTotal" >Total S. {totalOrden()}</h3>
          </div>
          <div className="col-sm-2" >
            <button className="btn btn-secondary btn-lg btn-block" type="button" onClick={() => {
              enviarOrden(arrayNombre, arrayMesa, arrayProductosOrden, 'Pendiente', totalOrden(), new Date())
                .then(() => {
                  setArrayProductosOrden([]);
                });
            }
            }
            >
              Enviar
            </button>
          </div>
        </div>
      </section>
    </main>
  )
};

export default ComponentMesero;






//  arcentus 
//  everis
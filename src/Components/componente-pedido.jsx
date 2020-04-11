import React, { useState } from 'react';
import '../RutaCss/estilo.css';

const Pedido = ({ documento }) => {
  const { estado, nombre, mesa, fecha, producto, totalp} = documento.data();
  const [ tiempo, setTiempo] = useState(0)

  const DuracionPedido = () => {
    let duraccion = new Date() - fecha.toDate();
    console.log(duraccion);
    const addZ = (n) => {
      return (n < 10 ? '0' : '') + n;
    };
    const ms = duraccion % 1000;
    duraccion = (duraccion - ms) / 1000;
    const secs = duraccion % 60;
    duraccion = (duraccion - secs) / 60;
    const mins = duraccion % 60;
    const hrs = (duraccion - mins) / 60;
    const tiempoDuraccion = `${addZ(hrs)}:${addZ(mins)}:${addZ(secs)}`;
    setTiempo(tiempoDuraccion)


    // firebase
    //   .firestore()
    //   .collection('Orden')
    //   .doc(id)
    //   .update({
    //     estado: 'Listo',
    //     duraccion: tiempoDuraccion,
    //   });
  };

  return (
    <div className="col-sm-6 border border-success" key={documento.id}>
      <h2 className="text-white">{estado}</h2>
      <div className="row">
        <p className="col-sm-3 datos"> <span className="textos">Cliente:</span> {nombre} </p>
        <p className="col-sm-3 datos"> <span className="textos">Mesa: </span><br></br>{mesa} </p>
        <p data-testid="horaPedido" className="col-sm-3 datos"> <span className="textos">Hora de Pedido: </span> {fecha.toDate().getHours()} : {fecha.toDate().getMinutes()} </p>
        </div>
        <div className="row">
        <div className="col-sm-4">
          <p><span className="textos">Productos a Preparar</span></p>
          {producto.map((p) => {
            // console.log(p);
            return (
              <div>
                <p className="datos">{p.cantidad} <span>{p.producto}</span></p>
              </div>
            )
          })}
        </div>
        <p className="col-sm-4 datos"> <span className="textos">Total Pedido </span> {totalp} </p>
        <p className="col-sm-4 datos"> <span className="textos">Tiempo de Duracion </span> {tiempo} </p>
      </div>
      <button className="btn btn-success float-right m-5 btn-lg border border-light" onClick={() => { DuracionPedido()}}>Listo</button>
    </div>
  )
};

export default Pedido;
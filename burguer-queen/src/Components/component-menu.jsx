import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebaseconfig';
import Product from './component-product';
import './component-menu.css';

function Menu({ agregar }) {
  const [type, setType] = useState('desayuno');
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('Menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )
  return (
    <section>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span> Loading...</span>}
      {value && (
        <section >
          <h1 className="text-center">LISTA DE PRODUCTOS</h1>
          <div className="p">
            <button type="button" className="btn btn-success m-3" onClick={() => setType('desayuno')}>
              Desayuno
          </button>
            <button type="button" className="btn btn-success m-3" onClick={() => setType('hamburguesa')}>
              Hamburguesas
          </button>
            <button type="button" className="btn btn-success m-3" onClick={() => setType('acompañamientos')}>
              Acompañamientos
          </button>
            <button type="button" className="btn btn-success m-3" onClick={() => setType('bebida')}>
              Bebidas
          </button>
          </div>
          <div className="p">
            {value.docs.filter(doc => doc.data().categoria === type)
              .map(doc =>
                <Product document={doc} key={doc.id} agrega={agregar} />
              )}
          </div>
        </section>

      )}
    </section>
  )
};

export default Menu;
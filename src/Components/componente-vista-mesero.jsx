import React from 'react';
import ComponentMesero from './component-mesero';
import Encabezado from './component-header';


const ComponenteVistaMesero = () => {
  return (
    <div>
      <Encabezado ocultar={true} />
      <ComponentMesero />
    </div>
  )
};

export default ComponenteVistaMesero;
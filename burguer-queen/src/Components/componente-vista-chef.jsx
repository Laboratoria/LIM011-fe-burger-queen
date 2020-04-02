import React from 'react';
import ComponenteChef from './componente-chef';
import Encabezado from './component-header';


const ComponenteVistaChef = () => {
  return (
    <div>
      <Encabezado />
      <ComponenteChef />
    </div>
  )
};

export default ComponenteVistaChef;
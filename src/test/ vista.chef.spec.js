import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ComponenteVistaChef from '../Components/componente-vista-chef';
import { render } from '@testing-library/react';

it('',async() => {
    const router = render(<BrowserRouter><ComponenteVistaChef/></BrowserRouter >);
    const rutas = router.queryByTestId('');
    expect(rutas).toBe(null);
  
} )
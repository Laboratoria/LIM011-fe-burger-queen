import React from 'react';
import { render } from '@testing-library/react'; 
import Logo from '../Components/component-header';

  it('Deberia mostrar el logo de la Aplicacion', () => {
    const { getByTestId }= render(<Logo/>)
    const element= getByTestId('imagen');
    expect(element).toBeTruthy();
  })

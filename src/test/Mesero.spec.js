
import React from 'react';
import { render, wait, fireEvent, act } from '@testing-library/react';
import ComponentMesero from '../Components/component-mesero';
jest.mock('../Components/compo.js');


describe('Componente Mesero', () => {  
  it('Deberia acceder a elementos dentro de los componetes', (done) => {
    
    const mesero  = render( <ComponentMesero /> );

    wait(() => mesero.getAllByTestId('clickProducto')).then(() => {

      const btnProducto = mesero.getAllByTestId('clickProducto')[0];

    act(() => {
      fireEvent.click(btnProducto);
      })

    expect(mesero.getAllByTestId('items')).toBeTruthy();
    expect(mesero.getAllByTestId('clickCantidad').length).toBe(1);

    const btnEnviar = mesero.getByText('Enviar');
    act(() => {
      fireEvent.click(btnEnviar);
      })

    wait(() => mesero.getByText('Enviar')).then(() => {
    expect(mesero.queryAllByTestId('items').length).toBe(0);
  
    done();
    });
});
});

it('Deberia cambiar la cantidad de productos', (done) => {
    
  const mesero  = render( <ComponentMesero /> );
  wait(() => mesero.getAllByTestId('clickProducto')).then(() => {
  const btnProducto = mesero.getAllByTestId('clickProducto')[0];

  act(() => {
    fireEvent.click(btnProducto);
    })
  wait(() =>  mesero.getByPlaceholderText('N°')).then(() => {
    const input1 = mesero.getByPlaceholderText('N°');

  // cuando se pinta por primera vez
    expect(input1.value).toBe('');

  act(() => {
      fireEvent.change(input1, { target: { value: '2' } });
      })
  
    // verifica cambio del input
    expect(input1.value).toBe('2');
  done();
});
});
});

it('Deberia agregar nombre del cliente', (done) => {
    
  const mesero  = render( <ComponentMesero /> );
  wait(() => mesero.getAllByTestId('clickProducto')).then(() => {
  const btnProducto = mesero.getAllByTestId('clickProducto')[0];

  act(() => {
    fireEvent.click(btnProducto);
    })

  wait(() =>  mesero.getByPlaceholderText('Ejemplo: Mary')).then(() => {
    const input1 = mesero.getByPlaceholderText('Ejemplo: Mary');

  // cuando se pinta por primera vez
    expect(input1.value).toBe('');

  act(() => {
      fireEvent.change(input1, { target: { value: 'Maria' } });
      })
  
    // verifica cambio del input
    expect(input1.value).toBe('Maria');
  done();
});
});
})
})

import React from 'react';
import { render,  fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ListaPedidoProducto from '../Components/component-listapedidoproducto';

  
  it('Deberia mostrar 2 items de una orden de pedido en una lista', () => {
    const fnBuscarMyN= jest.fn();
    const fnCantidad= jest.fn();
    const fnEliminar= jest.fn();

    const obj= [{
        Cantidad: 2,
        Descripcion: 'Cafe',
        Precio: '5',
      },
      {
        Cantidad: 1,
        Descripcion: 'Cafe con Leche',
        Precio: '7',
      }];
       
    const listaProductos= render(<ListaPedidoProducto array={ obj } eliminarProductos={ fnEliminar } cantidadProductos={ fnCantidad } buscarDatoCliente={ fnBuscarMyN}/>);
    const input1= listaProductos.getByPlaceholderText('Ejemplo: Mary');
    const input2= listaProductos.getByPlaceholderText('1');

  // cuando se pinta por primera vez
    expect(input1.value).toBe('');
    expect(input2.value).toBe('');

    // cambiar el valor del input
    act(() => {
    fireEvent.change(input1, { target: { value: 'Maria' } });
    })
    act(() => {
    fireEvent.change(input2, { target: { value: '2' } });
    })

  // verifica cambio del input
  expect(input1.value).toBe('Maria');
  expect(input2.value).toBe('2');

  });
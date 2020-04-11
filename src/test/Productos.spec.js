import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Product from '../Components/component-product';


it('Deberia pintar los productos', () => {
    const fnagregar = jest.fn();
    const objProducto = {
        data : () => {
        return ({
        producto: 'Cafe',
        precio: '5',
        url: 'mi imagen de prueba',
        })
        },
    }

    const productos  = render( <Product documento={objProducto} buscarProducto={ fnagregar }/> );
    const btnProducto = productos.getByTestId('clickProducto');
    const listaDeNodos = productos.getAllByTestId('item');

    act(() => {
    fireEvent.click(btnProducto);
    })

    expect(fnagregar).toHaveBeenCalled();
    expect(getNodeText(listaDeNodos[0])).toBe('Cafe');
    expect(getNodeText(listaDeNodos[1])).toBe('S/.5');

});

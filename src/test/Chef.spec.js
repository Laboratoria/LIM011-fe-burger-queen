import React from 'react';
import { render, wait } from '@testing-library/react';
import ComponenteChef from '../Components/componente-chef';



it('Deberia pintar los productos que se muestran al hacer clic en cada categoria', (done) => {

    const containerChef= render( <ComponenteChef /> );

    wait(() => containerChef.getByText('DETALLES DE PEDIDO') ).then(() => {
    
        const h1 = containerChef.getByText('DETALLES DE PEDIDO');
        expect(h1).toBeTruthy();

        wait(() => containerChef.getByText('DETALLES DE PEDIDO') ).then(() => {
        const horaPedido = containerChef.getAllByTestId('horaPedido');

        expect(horaPedido).toBeTruthy();
        done();
    })
   })
});
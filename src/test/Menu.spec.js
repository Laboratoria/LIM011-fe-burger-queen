import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Menu from '../Components/component-menu';



it('Deberia pintar los productos que se muestran al hacer clic en cada categoria', (done) => {

    const fnagregar= jest.fn();

    const containerMenu= render( <Menu agregar={ fnagregar }/> );
    
    wait(() => containerMenu.getByText('Hamburguesas') ).then(() => {
    
    const antes= containerMenu.getAllByAltText('producto').length;
    
    const buttonA= containerMenu.getByText('Acompañamientos');

    // disparando el evento de click del button Acompañamientos
   
    fireEvent.click(buttonA);

    wait(() => containerMenu.getAllByAltText('producto')).then(() => {

    const despuesA= containerMenu.getAllByAltText('producto').length
   // console.log(antes);
   // console.log(despues);
    expect(antes).not.toEqual(despuesA);

    const buttonB= containerMenu.getByText('Bebidas');
    // disparando el evento de click del button Bebidas
    fireEvent.click(buttonB);
    const despuesB = containerMenu.getAllByAltText('producto').length
    
    expect(despuesA).not.toEqual(despuesB);

    const buttonC= containerMenu.getByText('Hamburguesas');
    // disparando el evento de click del button Hamburguesas
    fireEvent.click(buttonC);
    const despuesC= containerMenu.getAllByAltText('producto').length
    // console.log(despuesB);
    // console.log(despuesC);
    expect(despuesB).not.toEqual(despuesC);

    const buttonD= containerMenu.getByText('Desayuno');
    // disparando el evento de click del button Desayuno
    fireEvent.click(buttonD);
    const despuesD= containerMenu.getAllByAltText('producto').length
    // console.log(despuesD);
    // console.log(despuesC);
    expect(despuesC).not.toEqual(despuesD);

     done();
    })
   })
    });


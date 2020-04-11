import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { render } from '@testing-library/react';

it('',async() => {
    const router = render(<BrowserRouter><App/></BrowserRouter >);
    const rutas = router.queryByTestId('');
    expect(rutas).toBe(null);
  
} )

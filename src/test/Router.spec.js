import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import { render } from '@testing-library/react';

const url = '/';

it('',async() => {
    const router = render(<BrowserRouter><Routes url={url}/></BrowserRouter >);
    const rutas = router.queryByTestId('');
    expect(rutas).toBe(null);
  
} )

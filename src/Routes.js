
import React from 'react';
import {HashRouter,Switch, Route} from 'react-router-dom';
import ComponenteVistaMesero from './Components/componente-vista-mesero';
import ComponenteVistaChef from './Components/componente-vista-chef';

const Routes = () => {
      return(
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ComponenteVistaMesero} />
            <Route path='/chef' component={ComponenteVistaChef} />
          </Switch>
        </HashRouter>


      )}
export default Routes;

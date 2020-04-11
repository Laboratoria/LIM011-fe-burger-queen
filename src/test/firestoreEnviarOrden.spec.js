import enviarOrden from "../Components/compo.js";
jest.mock('../firebase/firebaseconfig.js');

const nombre= {
  name: 'Mary',
};
const mesa= {
  mesas: '1',
};
const producto= {
  producto: 'Cafe',
  precio: '5',
  url: 'mi imagen de prueba',
}
const estado= {
  status: 'pendiente'
}
const totalp= {
  total: 5
}

describe('enviarOrden', () => {
  it('Deberia de agregar una tarea', (done) => {
    return enviarOrden(nombre, mesa, producto, estado, totalp)
      .then((response) => {
        expect(response.nombre).toBe('Mary');
        done();
      })
  });
});



// const fixtureData = {
//   __collection__: {
//     Orden: {
//       __doc__: {
//         post001: {
//           contenido: 'probando mocks',
//           tipo: 'publico',
//           uid: 'user001',
//           name: 'mariangel mora',
//           email: 'mariangel@gmail.com',
//           date: '20/01/2020',
//         },
//         },
//         },
//       },
// };

// global.firebase = new MockFirebase(fixtureData);
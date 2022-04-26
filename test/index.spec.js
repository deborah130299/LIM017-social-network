// importamos la funcion que vamos a testear
import { Login } from '../components/Login.js';

describe('Login', () => {
  it('debería ser una función', () => {
    expect(typeof Login).toBe('object');
  });
});

// importamos la funcion que vamos a testear
import { Login } from '../src/components/Login.js';

describe('Login', () => {
  it('debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });
});

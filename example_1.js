/*Ejercicio 1:
Ejecutar el metodo GET al siguiente API: https://pokeapi.co/api/v2/pokemon/ditto
Validar si el status code es 200
Hacer esperar al script 1 segundo
Usando las opciones de K6 configurar que dicho script se ejecute con 5 VUS
 */

import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  vus: 5,
  duration: '1s',
};

export default function () {
  const res = http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  sleep(1);

const checkRes = check(res, {
    'status is 200': (r) => r.status === 200
});
}
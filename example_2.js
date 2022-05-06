/*Ejercicio 2:
Ejecutar el metodo GET al siguiente API: https://httpbin.test.k6.io
Validar si el status code es 200
Hacer esperar al script 1 segundo
Usando las opciones de K6 configurar que dicho script se ejecute con 15 VUS y que tenga una duración de 1 minuto

 */

import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  vus: 15,
  duration: '1m',
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  sleep(1);

const checkRes = check(res, {
    'status is 200': (r) => r.status === 200
});
}
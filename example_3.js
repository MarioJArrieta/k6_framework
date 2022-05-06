/*Ejercicio 3

Ejecutar el metodo GET al siguiente API: https://httpbin.test.k6.io
Validar si el status code es 200
Hacer esperar al script 1 segundo
Usando las opciones de K6 configurar con la opción stage las siguientes configuraciones:
Target de 20 vus con duración de 2 30 segundos minutos
Target de 2 vus con duración de 30 segundos
Target de 0 vus con duración de 10 segundos

 */

import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  stages: [
      {target: 20, duration: '150s'},
      {target: 2, duration: '30s'},
      {target: 0, duration: '10s'},
  ]
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  sleep(1);

const checkRes = check(res, {
    'status is 200': (r) => r.status === 200
});
}
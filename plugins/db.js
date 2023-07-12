// En tu archivo db.js

import { createConnection } from 'mysql2';

let connection = null;

export async function connectToDatabase() {
  if (connection) {
    return connection.promise();
  }

  connection = createConnection({
    host: 'mageova.net', // Cambia esto con la dirección de tu base de datos
    user: 'consulta', // Cambia esto con el nombre de usuario de tu base de datos
    password: '4rOnu', // Cambia esto con la contraseña de tu base de datos
    database: 'mageova_portales' // Cambia esto con el nombre de tu base de datos
  });

  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        console.error('Error al conectar a la base de datos:', err);
        reject(err);
        return;
      }

      console.log('Conexión exitosa a la base de datos MySQL');

      resolve(connection);
    });
  });
}

export function closeDatabaseConnection() {
  if (connection) {
    connection.end();
    connection = null;
    console.log('Conexión a la base de datos cerrada');
  }
}

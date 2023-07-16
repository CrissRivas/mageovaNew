// En tu archivo db.js

import { createConnection } from 'mysql2';

let connection = null;

export async function connectToDatabase(insertData) {
  
  if (connection) {
    return connection.promise();
  }
  
  connection = createConnection({
    host: 'mageova.net', // Cambia esto con la dirección de tu base de datos
    user: 'mageova_mageova', // Cambia esto con el nombre de usuario de tu base de datos
    password: 'C5z4p0p4n', // Cambia esto con la contraseña de tu base de datos
    database: 'mageova_portales' // Cambia esto con el nombre de tu base de datos
  });
  console.log('init');
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        console.error('Error al conectar a la base de datos:', err);
        reject(err);
        return;
      }

      console.log('Conexión exitosa a la base de datos MySQL');



      connection.execute(
        'INSERT INTO Intentos (host_campana, path, fecha, identificador, folio, dispositivo_rt, direccion_ip, navegador, sistema) VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?)',
        [
          insertData.hostCampana,
          insertData.path,
          // insertData.date,
          insertData.identificador,
          insertData.folio,
          insertData.dispositivoRt,
          insertData.direccionIp,
          insertData.navegador,
          insertData.sistema
        ],
        (error, results) => {
          if (error) {
            console.error('Error al realizar la inserción:', error);
            reject(error);
            return;
          }

          console.log('Inserción exitosa en la tabla Intentos');

          resolve(results);
        }
      );
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

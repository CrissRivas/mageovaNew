import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'mageova.net', // Cambia esto con la dirección de tu base de datos
  user: 'consulta', // Cambia esto con el nombre de usuario de tu base de datos
  password: '4rOnu', // Cambia esto con la contraseña de tu base de datos
  database: 'mageova_portales' // Cambia esto con el nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

export default connection.promise();

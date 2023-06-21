const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const puerto = 8080; // Puerto 8080

// Configuración del servidor Express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para enviar el formulario
app.post('/enviar', (req, res) => {
  enviarCorreo(req.body)
    .then(() => {
      res.send('Correo enviado con éxito');
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo');
    });
});

// Función para enviar el correo electrónico
async function enviarCorreo(formulario) {
  try {
    // Configuración del transporte de correo
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jorgepazosn@gmail.com',
        pass: 'faxayberryduwetz',
      },
    });

    // Construir el contenido del correo como texto plano
    let contenidoTexto = `
      Consulta de potencial cliente:

      - Nombre: ${formulario.nombre}
      - Teléfono: ${formulario.telefono}
      - País: ${formulario.pais}
      - Email: ${formulario.email}

      Mensaje:
      ${formulario.mensaje}
    `;

    // Configurar el correo
    let mailOptions = {
      from: 'jorgepazosn@gmail.com',
      to: 'jorgepazosn@gmail.com',
      subject: 'TECH CAMUS',
      text: contenidoTexto,
    };

    // Envío del correo
    let info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
}

// Iniciar el servidor
app.listen(puerto, () => {
  console.log('Servidor iniciado en el puerto ' + puerto);
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

body.addEventListener('click', (event) => {
  const target = event.target;
  
  // Comprueba si el clic se realizó fuera del menú hamburguesa
  if (!target.closest('header')) {
    nav.classList.remove('nav-active');
  }
});

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const pais = document.getElementById('pais').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Crear el objeto de datos a enviar
  const datos = {
    nombre: nombre,
    telefono: telefono,
    pais: pais,
    email: email,
    mensaje: mensaje
  };

  // Realizar la petición POST al servidor
  fetch('/enviar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => response.text()) // Leer la respuesta como texto
  .then(data => {
    console.log(data); // Mostrar la respuesta en la consola del navegador
    alert('Correo enviado con éxito'); // Mostrar mensaje de éxito
    // Limpiar el formulario si se envió correctamente
    document.getElementById('formulario').reset();
  })
  .catch(error => {
    console.error('Error al enviar el formulario:', error);
    alert('Error al enviar el formulario');
  });
});

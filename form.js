const url = 'https://jsonplaceholder.typicode.com/users'; 

const formulario = document.getElementById('form'); 

formulario.addEventListener("submit", function(event){ 
    event.preventDefault();
    alert("abre la consola")
    /* se le añade un envento a el formulario y event.preventDefault() para que al enviar los datos no se recargue la pagina automaticamente */ 
    
    // obtiene los datos de las inputs

    const Nombre = document.getElementById('nombre').value;
    const Apellido = document.getElementById('apellido').value;
    const FechaNacimiento = document.getElementById('fecha').value;

    //coloca los datos de los inputs en un variable y crea un objeto con ellos.
    const data = {
        nombre: Nombre,
        apellido: Apellido,
        fechaNacimiento: FechaNacimiento
    };


    // Configura las opciones para la solicitud de envío al servidor

    const requestOptions = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify(data) 
    };

    fetch(url, requestOptions)
    .then(response => {   // Verifica si la respuesta del servidor indica un error
        if (!response.ok) {
            throw new Error('La solicitud no se completó correctamente.');
        
        }
        return response.json(); // Convierte la respuesta del servidor en un objeto JSON
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);  // Maneja la respuesta del servidor
    })
    .catch(error => {   // Maneja los errores que puedan ocurrir durante la solicitud
        console.error('Error:', error);
    });
});








// creamos un template para ir iterando con un foreach desde el
// archivo json con un fetch


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/data.json'); // Especifica la ruta relativa al archivo JSON
        const data = await response.json();
        
        const fotosCV = data; // Asigna los datos del archivo JSON a la variable fotosCV
        const template = document.getElementById('template').content;
        const container = document.getElementById('container');
        
        fotosCV.forEach(fotoCV => { 
            const tarjeta = document.importNode(template, true);  
            tarjeta.querySelector('.imgTendencia').src = fotoCV.img_url;
            tarjeta.querySelector('.titulo-foto').textContent = fotoCV.name;
            container.appendChild(tarjeta);
        });
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
});


/*

document.addEventListener('DOMContentLoaded', () => {
  
  fetch('data/data.json') // Especifica la ruta relativa al archivo JSON
  .then(response => response.json())
  .then(data => {
      const fotosCV = data; // Asigna los datos del archivo JSON a la variable fotosCV
      const template = document.getElementById('template').content;
      const container = document.getElementById('container');
      fotosCV.forEach(fotoCV => { 
          const tarjeta = document.importNode(template, true);  
          tarjeta.querySelector('.imgTendencia').src = fotoCV.img_url;
          tarjeta.querySelector('.titulo-foto').textContent = fotoCV.name;
          container.appendChild(tarjeta);
      });
  })
  .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
  });
});





*/



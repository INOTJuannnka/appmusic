<template>
    <div class="form">
      <div>
        <h1>Formulario de Actualización de Canción</h1>
        <div>
          <form @submit.prevent="updateSong" class="container">
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <div>
              <input type="text"  v-model="nombre" id="nombre" class="custom-input" required></div>
            </div>
            <div class="form-group">
              <label for="artista">Artista:</label><div>
              <input type="text" v-model="artista" id="artista" class="custom-input" required>
              </div>
            </div>
            <div class="form-group">
              <label for="genero">Género:</label>
              <div>
              <input type="text" v-model="genero" id="genero" class="custom-input" required></div>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar Canción</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: 'Nombre Genérico', // Nuevo nombre
        artista: 'Artista Genérico', // Nuevo artista
        genero: 'Género Genérico',  // Nuevo género
      };
    },
    methods: {
      updateSong() {
        //TO DO:
        //Hacer peticion a servidor
        setTimeout(() => {
          alert('Se ha actualizado la canción con los datos.');
        }, 1000);
      },
    },
    props: {
      cancionId: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
.form {
    background-color: #1DB954;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 400px;
    height: 100vh;
    max-width: 400px;
    margin: 0 auto;
  }
  .centered-box {
    background-color: #0aca2a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Altura del 100% de la ventana */
  }
  
  .box-content {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  /* .container {
  background-color: #0aca2a;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */

.custom-input {
  width: 300px;
  height: 40px;
  padding: 8px;
  border: none;
  background-color: #444; 
  color: #fff; 
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); 
}

.custom-input::placeholder {
  color: #ccc; 
}
  </style>
  
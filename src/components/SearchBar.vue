<template>
    <div class="spotify-search-bar">
      <input
        type="text"
        v-model="query"
        @input="buscarCanciones"
        class="spotify-input"
        placeholder="Buscar canciones..."
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '',
      };
    },
    methods: {
      buscarCanciones() {
        // Aquí puedes implementar la lógica para buscar canciones en función de la consulta "query"
        // Puedes emitir un evento con la consulta para que otro componente la maneje
        this.$emit('busqueda', this.query);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos similares a Spotify */
  .spotify-search-bar {
    margin: 20px 0;
  }
  
  .spotify-input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: none;
    border-radius: 5px;
    background-color: #282828;
    color: white;
  }
  
  .spotify-input::placeholder {
    color: #B3B3B3;
  }
  </style>
  
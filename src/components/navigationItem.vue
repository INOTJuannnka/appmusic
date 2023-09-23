<template>
  <header id="header">
    <a href="#" id="image-container">
        <img
      src="https://cdn.pixabay.com/photo/2017/04/19/10/24/vinyl-2241789_1280.png"
      alt="icon"
    />
    </a>
    <div class="spotify-search-bar">
      <input
        type="text"
        v-model="query"
        @input="buscarCanciones"
        class="spotify-input"
        placeholder="Buscar canciones..."
      />
    </div>
    <ul id="lista">
      <li><a @click="showComponent" href="default.asp">Songs</a></li>
      <create-form :show="showComponent"></create-form> 
      <li><a href="contact.asp">Create Songs</a></li>
    </ul>
  </header>
</template>

<script>
import CreateForm from './CreateForm.vue';
export default {
  name: "navigationItem",
  showComponent:{CreateForm},
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spotify-search-bar {
    margin: 20px 0;
  }
  
  .spotify-input {
    width: 200%;
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
#header {
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  background-color: #403f55;
  height: 3rem;
  gap: 1.5rem;
  justify-content: space-between;
}

#header #image-container {
  height: 100%;
  display: flex;
  align-items: center;
}

#header #image-container img {
  height: 80%;
}

#lista {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style-type: none;
}

#lista a {
  text-decoration: none;
  color: #e4da83;
  font-size: 1.2rem;    
  font-family: monospace;
  padding: 5px;
  transition: ease-in-out 0.5s;
}

#lista a:hover {
    border-bottom: 2px solid #e4da83;
}

</style>

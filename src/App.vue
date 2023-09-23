<template>
  <div class="contenedor">
    <div class="imagen">
      <img alt="Vue logo" src="https://pbs.twimg.com/profile_images/1262277252903047169/hpah3oB8_400x400.jpg">
    </div>
    <div class="texto">
      <p>AppMusica</p>
      <HelloWorld msg="AppMusica" />
      <CreateForm msg="AppMusica" />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CreateForm from './components/CreateForm.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CreateForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

img {
  width: 6%;
  padding-right: 100%;
  flex: 1; /* La imagen ocupará el 50% del ancho disponible */
  margin-right: 20px; /* Espacio entre la imagen y el texto */
}

.texto {
  flex: 1; /* El texto ocupará el 50% del ancho disponible */
}
</style>

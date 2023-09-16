<template>
  <div class="hello">
    <header>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="contact.asp">Crear canción</a></li>
      </ul>
    </header>
    <h1>{{ msg }}</h1>
    <p>
      Nuestra aplicación es un CRUD para canciones el cual tiene los componentes de buscar,eliminar,crear
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #296e54;
}

a {
  color: #42b983;
}
</style>

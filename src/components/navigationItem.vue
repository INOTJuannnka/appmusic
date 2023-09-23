<template>
  <header id="header">
    <a href="#" id="image-container">
        <img
      src="https://cdn.pixabay.com/photo/2017/04/19/10/24/vinyl-2241789_1280.png"
      alt="icon"
    />
    </a>
    <ul id="lista">
      <li><a href="default.asp">Songs</a></li>
      <li><a href="contact.asp">Create Songs</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "navigationItem",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

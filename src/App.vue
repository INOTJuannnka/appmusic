<template>
  <navigationItem/>
  <section id="item">
    <router-view/>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import navigationItem from "./components/navigationItem.vue";
export default defineComponent({
  name: 'App',
  components: {
    navigationItem
  }
})
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color:  #333131;
  }

  #item{
    height: 100vh;
  }
</style>

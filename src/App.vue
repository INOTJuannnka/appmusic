<template>
  <navigationItem/>
  <songList/>
</template>

<script>
import navigationItem from './components/navigationItem.vue'
import songList from './components/songList.vue';

export default {
  name: 'App',
  components: {
    navigationItem,
    songList
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color:  #333131;
  }
</style>

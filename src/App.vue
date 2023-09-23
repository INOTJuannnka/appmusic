<template>
  <navigationItem/>
  <UpdateSong></UpdateSong>
</template>

<script>
import navigationItem from './components/navigationItem.vue';
import UpdateSong from './components/UpdateSong.vue';

export default {
  name: 'App',
  components: {
    navigationItem,
    UpdateSong
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>

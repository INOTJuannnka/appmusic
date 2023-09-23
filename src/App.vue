<template>
  <navigationItem/>
  <songList/>
  <CreateForm></CreateForm>
  <update-song></update-song>
</template>

<script>
import CreateForm from './components/CreateForm.vue';
import navigationItem from './components/navigationItem.vue'
import songList from './components/songList.vue';
import UpdateSong from './components/UpdateSong.vue';
export default {
  name: 'App',
  components: {
    navigationItem,
    songList,
    CreateForm,
    UpdateSong
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

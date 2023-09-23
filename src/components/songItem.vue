<template>
    <div id="songItem">
        <img :src="song.songImage" :alt="song.songTitle">
        <div id="song-info">
            <h2 id="song-title">{{ song.songTitle }}</h2>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "songItem",
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  
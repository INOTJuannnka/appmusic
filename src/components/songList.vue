<template>
  <div v-for="song in songs" :key="song.songID" id="song-item" v-bind:value="song.songID">
    <a v-bind:href="song.songLink" target="_blank" id="song-link">
      <img v-bind:src="song.songImage" v-bind:alt="song.songName" id="song-img">
    <div id="song-data">
      <h2 id="song-title">{{ song.songName }}</h2>
      <h3 id="artist-name">{{ song.artistName }}</h3>
      <h3 id="song-genre">{{ song.songGenre }}</h3>
    </div>
    </a>
    <div id="song-buttom">
      <a href=""><span class="fa-solid fa-trash"></span></a>
      <a href=""><span class="fa-solid fa-pencil"></span></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "songList",
  data: () => ({
    songs: null,
  }),
  created() {
    axios.get("http://localhost:3000/api/songs").then((result) => {
      this.songs = result.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #song-item{
    display: flex;
    height: 5rem;
    margin: 1rem;
    width: 60%;
    border-bottom: 3px solid #1DB954;
    margin: 0 auto;
  }

  #song-item #song-link{
    width: 80%;
    display: flex;
    color: white;
    text-decoration: none;
  }

  #song-item #song-link #song-img{
    border-radius: 10px;
    margin: 0.5rem;
  }

  #song-item #song-buttom{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2rem;
  }
  #song-item #song-buttom span{
    font-size: 2rem;
    color: white;
  }

</style>

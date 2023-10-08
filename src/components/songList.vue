<template>
  <div class="spotify-search-bar">
    <input
      type="text"
      v-model="text"
      @input="buscarCanciones"
      class="spotify-input"
      placeholder="Buscar canciones..."
    />
  </div>
  <div>
    <div
      v-for="song in songs"
      :key="song.songID"
      id="song-item"
      v-bind:value="song.songID"
    >
      <a v-bind:href="song.songLink" target="_blank" id="song-link">
        <img
          v-bind:src="song.songImage"
          v-bind:alt="song.songName"
          id="song-img"
        />
        <div id="song-data">
          <h2 id="song-title">{{ song.songName }}</h2>
          <h3 id="artist-name">{{ song.artistName }}</h3>
          <h3 id="song-genre">{{ song.songGenre }}</h3>
        </div>
      </a>
      <div id="song-buttom">
        <a @click="deleteSong(song.songID)"
          ><span class="fa-solid fa-trash"></span
        ></a>
        <a
          ><router-link :to="/update/ + song.songID"
            ><span class="fa-solid fa-pencil"></span
          ></router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "songList",
  data: () => ({
    songs: null,
    text: "",
  }),
  created() {
    axios.get("http://localhost:3000/api/songs").then((result) => {
      this.songs = result.data;
    });
  },
  methods: {
    buscarCanciones() {
      const url = "http://localhost:3000/api/songs/name/";
      let query = this.text.trim().replace(/\s+/g, "&");
      if (query.length > 0) {
        axios
          .get(`${url}${query}`)
          .then((result) => {
            this.songs = result.data;
          })
          .catch(() => {
            this.songs = [];
          });
      } else {
        axios.get("http://localhost:3000/api/songs").then((result) => {
          this.songs = result.data;
        });
      }
    },
    deleteSong(id) {
      const userConfirmed = window.confirm("Are you sure about that?");
      if (userConfirmed) {
        const url = "http://localhost:3000/api/songs";
        axios.delete(`${url}/${id}`).then(() => {
          axios.get(url).then((result) => {
            this.songs = result.data;
          });
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spotify-search-bar {
  display: flex;
  width: 100%;
  margin: 1rem 0;
}

.spotify-input {
  padding: 10px;
  width: 30%;
  margin: 0 auto;
  border: none;
  border-bottom: solid 2px #1db954;
  border-radius: 5px;
  outline: none;
  background-color: #282828;
  color: white;
}
#song-item {
  display: flex;
  height: 5rem;
  margin: 1rem;
  width: 60%;
  border-bottom: 3px solid #1db954;
  margin: 0 auto;
}

#song-item #song-link {
  width: 70vw;
  display: flex;
  color: white;
  text-decoration: none;
}

#song-item #song-link:hover {
  opacity: 0.6;
}

#song-item #song-link #song-img {
  border-radius: 10px;
  margin: 0.5rem;
}

#song-item #song-buttom {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
}

#song-item #song-buttom a {
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

#song-item #song-buttom a:hover {
  transform: scale(1.1);
}

#song-item #song-buttom span {
  font-size: 2rem;
  color: white;
}
</style>

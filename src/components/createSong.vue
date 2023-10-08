<template>
  <div class="form">
    <h2 class="form-title">Create a new song</h2>
    <form @submit.prevent="crearCancion" class="form-container">
      <div class="form-group">
        <label for="songName" class="label">Song name:</label>
        <input
          type="text"
          id="songName"
          v-model="cancion.songName"
          class="input"
          required
        />
      </div>
      <div class="form-group">
        <label for="artistName" class="label">Artist name:</label>
        <input
          type="text"
          id="artistName"
          v-model="cancion.artistName"
          class="input"
          required
        />
      </div>
      <div class="form-group">
        <label for="genre" class="label">Song genre:</label>
        <select id="genre" v-model="cancion.songGenre" class="input" required>
          <option value="">Select the genre</option>
          <option v-for="genero in generosMusica" :key="genero" :value="genero">
            {{ genero }}
          </option>
        </select>
      </div>
      <button type="submit" class="button" :disabled="buttonDisabled">
        Create Song
      </button>
      <p v-if="cancionCreada" class="spotify-success-message">
        The song is being create.
      </p>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      buttonDisabled: false,
      cancionCreada: false,
      cancion: {
        songName: "",
        artistName: "",
        songGenre: "",
      },
      generosMusica: [
        "Pop",
        "Rock",
        "Hip Hop",
        "Electrónica",
        "R&B",
        "Reggaetón",
        "Country",
        "Jazz",
        "Clásica",
        "Blues",
        "Metal",
        "Soul",
        "Funk",
        "Punk",
        "Indie",
        "Dance",
        "Rap",
        "Reggae",
        "Ska",
      ],
    };
  },
  methods: {
    crearCancion() {
      this.cancionCreada = true;
      this.buttonDisabled = true;
      axios
        .post("http://localhost:3000/api/songs", this.cancion)
        .then(() => {
          alert("song created");
          this.cancionCreada = false;
          this.buttonDisabled = false;
          this.$router.go("/");
        });
    },
  },
};
</script>
<style scoped>
.spotify-success-message {
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
}
.form {
  background-color: #1db954;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 400px;
  margin: 5rem auto;
}

.form-title {
  color: white;
  font-size: 28px;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
}

.input {
  width: 90%;
  padding: 10px;
  margin: 6px 0;
  border: none;
  border-radius: 5px;
  background-color: #282828;
  color: white;
}
.button {
  background-color: #127f34;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #1ed760;
}
</style>

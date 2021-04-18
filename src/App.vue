<template>
  <div class="App">
    <header class="App-header">
      <img src="/logo.svg" class="App-logo" alt="logo"/>
      <h2>ECHO announcements</h2>
      <Toggle
          v-model="scheduler.value"
          id="example2"
          on-label="On"
          off-label="Off"
      />
      <a
          class="App-link"
          @click="announcements('5_min.mp3')"
      >5 min</a>
      <a
          class="App-link"
          @click="announcements('0_min.mp3')"
      >0 min</a>
      <br>
      <h2>Spotify</h2>
      <div>
        <Slider v-model="volume.value"
                id="volume"/>
      </div>

      <a
          class="App-link"
          @click="spotifyVolume(0)"
      >Mute</a>
      <a
          class="App-link"
          @click="spotifyVolume(70)"
      >Volume 70</a>
      <a
          class="App-link"
          @click="spotifyVolume(99)"
      >Volume 100</a>
      <a
          class="App-link"
          @click="spotifyToggle()"
      >Play/Pause</a>
      <Toggle
          v-model="spotify.value"
          id="spotify"
          on-label="Play"
          off-label="Pause"
      />
    </header>
  </div>
</template>

<script>
import axios from 'axios';
import Toggle from '@vueform/toggle';
import Slider from '@vueform/slider';

export default {
  components: {
    Toggle,
    Slider,
  },
  data: () => ({
    scheduler: {
      value: true
    },
    volume: {
      value: 80
    },
    spotify: {
      value: false
    },
  }),
  methods: {
    announcements(file) {
      // POST request using axios with error handling
      const data = { file: file };
      axios.post('api/play/', data)
          .then(response => this.articleId = response.data.id)
          .catch(error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
          });
    },
    spotifyToggle() {
      // POST request using axios with error handling
      const data = {};
      axios.post('api/spotify/toggle', data)
          .then(response => this.articleId = response.data.id)
          .catch(error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
          });
    },
    spotifyVolume(volume = 80) {
      // POST request using axios with error handling
      const data = { volume: volume };
      axios.post('api/spotify/volume', data)
          .then(response => this.articleId = response.data.id)
          .catch(error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
          });
    }
  }
};
</script>
<style>
@import "@vueform/toggle/themes/default.css";
@import "@vueform/slider/themes/default.css";

.App {
  text-align: center;
  font-family: 'Nunito';
}

.App-header {
  background-color: #f9f6f6;
  color: #32485f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
}

.App-link {
  color: #00c185;
  cursor: pointer;
}

.App-logo {
  height: 10vmin;
  pointer-events: none;
  margin-bottom: 1rem;
}

</style>

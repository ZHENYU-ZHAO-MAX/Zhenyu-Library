<template>
  <div class="container">

    <h1>Weather Check</h1>

    <input
      v-model="city"
      type="text"
      placeholder="Enter city name"
    />

    <button @click="searchByCity">
      Search
    </button>

    <main>

      <div v-if="weatherData">

        <h2>
          {{ weatherData.name }},
          {{ weatherData.sys.country }}
        </h2>

        <div>

          <img
            :src="iconUrl"
            alt="Weather Icon"
          />

          <p>
            {{ temperature }} °C
          </p>

        </div>

        <span>
          {{ weatherData.weather[0].description }}
        </span>

      </div>

    </main>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const apikey = "c59bebce689644584aecddcd3bd62595";

const city = ref("");

const weatherData = ref(null);

const hourlyForecast = ref([]);

const dailyForecast = ref([]);

const temperature = computed(() => {
  return weatherData.value
    ? Math.floor(weatherData.value.main.temp - 273)
    : null;
});

const iconUrl = computed(() => {
  return weatherData.value
    ? `https://openweathermap.org/img/wn/${weatherData.value.weather[0].icon}@2x.png`
    : null;
});

const fetchWeatherData = async (url) => {
  try {

    const response = await axios.get(url);

    weatherData.value = response.data;

  } catch (error) {

    console.error(
      "Error fetching weather data:",
      error
    );

  }
};

const fetchCurrentLocationWeather = () => {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const { latitude, longitude }
          = position.coords;

        const url =
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;

        await fetchWeatherData(url);

      }

    );

  }

};

const searchByCity = async () => {

  if (!city.value) return;

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`;

  await fetchWeatherData(url);

};

onMounted(() => {
  fetchCurrentLocationWeather();
});
</script>

<style scoped>
.container {
  padding: 20px;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
}

img {
  width: 80px;
}
</style>
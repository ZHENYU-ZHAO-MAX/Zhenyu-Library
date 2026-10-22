<template>
  <div class="container">
    <h1>Book Counter</h1>

    <button @click="getBookCount">
      Get Book Count
    </button>

    <p v-if="count !== null">
      Total number of books: {{ count }}
    </p>

    <p v-else-if="error">
      {{ error }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetBookCountView",

  data() {
    return {
      count: null,
      error: null,
    };
  },

  methods: {
    async getBookCount() {
      try {

        const response = await axios.get(
          "https://us-central1-fit5032-e85be.cloudfunctions.net/countBooks"
        );

        this.count = response.data.count;
        this.error = null;

      } catch (err) {

        this.count = null;
        this.error = "Error retrieving book count";

        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
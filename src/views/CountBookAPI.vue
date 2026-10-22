<template>

  <pre>
{{ jsondata }}
  </pre>

</template>

<script setup>

import axios from "axios";
import { ref, onMounted } from "vue";

const jsondata = ref(null);

const getBookCountAPI = async () => {

  try {

    const response = await axios.get(
      "https://us-central1-fit5032-e85be.cloudfunctions.net/countBooks"
    );

    jsondata.value = response.data;

  }
  catch (error) {

    console.error(error);

  }

};

onMounted(() => {

  getBookCountAPI();

});

</script>
<template>
  <div class="profile_container">
    <p>{{ userData[0] }}</p>
    <div class="edit_button">Edit Post</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // URL: process.env.VUE_APP_BACKEND_API_URL,
      // URL: "https://api.coindesk.com/v1/bpi/currentprice.json",
      userData: [],
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      await axios.get(import.meta.env.VITE_BACKEND_API_URL).then((response) => {
        this.userData = response.data;
      });
    },

    async deleteUser() {
      awa;
    },
  },
};
</script>

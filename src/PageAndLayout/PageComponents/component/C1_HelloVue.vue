<script>
export default {
  data() {
    return {
      color: "red",
    };
  },
  methods: {
    changeColor() {
      this.color = this.color == "red" ? "blue" : "red";
    },
  },
};
</script>

<template>
  <div class="button" @click="changeColor">Toggle Color</div>
</template>
<style scoped>
.button {
  user-select: none;
  padding: 70px;
  background-color: v-bind(color);
  color: #fff;
  border-radius: 10px;
  /* border: 3px solid red; */
}
</style>

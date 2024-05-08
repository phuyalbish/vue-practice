<script>
export default {
  data() {
    return {
      message: "This is the initial message to be passed",
      count: 0,
    };
  },
  methods: {
    increament() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
  computed: {},
  watch: {},
};
</script>

<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <p>{{ count }}</p>
    <button @click="increament">+</button>
  </div>
</template>
<style>
.counter {
  align-self: center;
  padding: 10px;
  display: flex;
  height: 100%;
  gap: 2rem;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: hidden;
  background-color: cyan;
  button {
    width: 3rem;
    background-color: transparent;
    border: none;
    font-size: 24px;
  }
}
</style>

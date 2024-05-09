<template>
  <div class="header-container">
    <div
      :class="
        getNavdata === 'home' ? 'header-items selectedNav' : 'header-items'
      "
      @click="changeNavbarState('home')"
    >
      Home
    </div>
    <div
      :class="
        getNavdata === 'product' ? 'header-items selectedNav' : 'header-items'
      "
      @click="changeNavbarState('product')"
    >
      Products
    </div>
    <div
      :class="
        getNavdata === 'category' ? 'header-items selectedNav' : 'header-items'
      "
      @click="changeNavbarState('category')"
    >
      Category
    </div>
    <div
      :class="
        getNavdata === 'profile' ? 'header-items selectedNav' : 'header-items'
      "
      @click="changeNavbarState('profile')"
    >
      Profile
    </div>
  </div>
</template>
<style>
.header-container {
  /* padding: 10px; */
  display: flex;
  justify-content: space-around;
  background-color: cyan;
  color: #000;
  .header-items {
    padding: 20px;
  }
  .header-items:hover {
    background-color: black;
    color: #fff;
  }
  .selectedNav {
    background-color: black;

    color: #fff;
  }
}
</style>
<script>
export default {
  computed: {
    getNavdata() {
      return this.$store.state.navbarState;
    },
  },
  methods: {
    changeNavbarState(nav_item) {
      this.$store.state.navbarState = nav_item;
    },
  },
};
</script>

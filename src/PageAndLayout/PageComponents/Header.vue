<template>
  <div class="header-container">
    <div class="header-items">Home</div>
    <div class="header-items">Products</div>
    <div class="header-items">Category</div>
    <div class="header-items">Profile</div>
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
}
</style>

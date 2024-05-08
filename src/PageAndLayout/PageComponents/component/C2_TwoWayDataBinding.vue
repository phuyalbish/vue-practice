<script>
export default {
  data() {
    return {
      myname: "Joe Black",
      myage: 20,
    };
  },
  updated() {
    console.log("Component is Updated");
  },
};
</script>
<template>
  <div class="inputandoutput">
    <h2>My name is {{ myname }} and I am {{ myage }} year's old</h2>
    <input class="input-field" v-model="myname" />
    <input class="input-field" type="number" v-model="myage" />
  </div>
</template>
<style>
.inputandoutput {
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 0.5rem;
  border: 1px solid grey;
  border-radius: 10px;

  .input-field {
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0 10px;
    height: 40px;
  }
}
</style>

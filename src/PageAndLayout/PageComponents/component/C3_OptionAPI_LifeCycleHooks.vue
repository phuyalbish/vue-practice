<script>
export default {
  //data: when we return properties from data then it will become reactive state. and will be exposed to 'this'
  data() {
    return {
      msg: "Message",
    };
  },

  mounted() {
    console.log("Component is Mounted to the RealDOM");
  },

  beforeCreate() {
    console.log("Component is not yet created");
  },
  created() {
    console.log("Component is created in VirtualDOM");
  },
  beforeMount() {
    console.log("Component is not yet Mounted to the RealDOM");
  },
  //   updated() {
  //     console.log("Component is updated.");
  //   },
  beforeUnmount() {
    console.log("Component is not UnMounted");
  },
  unmounted() {
    console.log("Component is Unmounted");
  },
  computed: {
    addition() {},
  },
};
</script>
<template></template>
<style></style>

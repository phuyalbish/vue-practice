<script setup>
import C2_TwoWayDataBinding from "./component/C2_TwoWayDataBinding.vue";
import C1_HelloVue from "./component/C1_HelloVue.vue";
import C3_OptionAPI_LifeCycleHooks from "./component/C3_OptionAPI_LifeCycleHooks.vue";
import C4_OptionAPI_Othermethods from "./component/C4_OptionAPI_Othermethods.vue";
</script>
<template>
  <div class="container">
    <C1_HelloVue />
    <C2_TwoWayDataBinding />
    <C3_OptionAPI_LifeCycleHooks />
    <C4_OptionAPI_Othermethods />
  </div>
</template>
<style>
.container {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
}
</style>

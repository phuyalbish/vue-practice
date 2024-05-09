<template>
  <div class="innerContent">
    <div
      :class="
        item.selected === true ? 'sidebar-item selectedColor' : 'sidebar-item'
      "
      @click="clicked(index)"
      v-for="(item, index) in items"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Item1", bgColor: "grey", selected: true },
        { title: "Item2", bgColor: "grey", selected: false },
        { title: "Item3", bgColor: "grey", selected: false },
        { title: "Item4", bgColor: "grey", selected: false },
        { title: "Item5", bgColor: "grey", selected: false },
        { title: "Item6", bgColor: "grey", selected: false },
      ],
    };
  },
  methods: {
    clicked(id) {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].selected = false;
      }
      this.items[id].selected = true;
    },
  },
};
</script>

<style>
.innerContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .sidebar-item {
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    width: 100%;
    background-color: grey;
  }
  .selectedColor {
    background-color: red;
    color: white;
  }
}
</style>

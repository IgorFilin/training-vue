<template>
  <div class="container">
    <button class="button" @click="decrementCount">-</button>
    <input type="number" min="0" max="10" class="input" :value="count" />
    <button class="button" @click="incrementCount">+</button>
  </div>
</template>

<script>
export default {
  name: "CountNumbers",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      if (this.count <= 9) {
        this.count++;
      }
    },
    decrementCount() {
      if (this.count >= 1) {
        this.count--;
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.button {
  background: none;
  border: 2px solid teal;
  padding: 5px;
  min-width: 50px;
}
.input {
  padding: 5px;
}
</style>

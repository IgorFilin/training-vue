<template>
  <div class="app">
    <my-input v-model="current" />
    {{ current }}
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      current: "1",
    };
  },
};
</script>
<style>
.app {
  width: 100%;
  height: 100vh;
  background: aliceblue;
}
</style>

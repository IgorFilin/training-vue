<template>
  <div class="app">
    <user-card />
  </div>
</template>
<script>
import UserCard from "@/my-components/UserCard";
export default {
  name: "App",
  components: { UserCard },
};
</script>
<style>
.app {
  width: 100%;
  height: 100vh;
  background: aliceblue;
}
</style>

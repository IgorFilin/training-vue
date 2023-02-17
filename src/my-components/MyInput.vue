<template>
  <input
    :value="modelValue"
    class="input"
    type="text"
    @input="$emit('update:modelValue', $event.currentTarget.value)"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: ["modelValue"],
};
</script>

<style scoped>
.input {
  padding: 5px;
}
</style>

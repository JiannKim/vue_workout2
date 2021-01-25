<template>
  <div>
    <input type="date" v-model="date" />
    <br />
    <br />
    <span>Selected: {{ date }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
    };
  },
};
</script>

<style></style>

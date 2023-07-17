<template>
  <div>
    <h2>Profile Page</h2>
  </div>
</template>

<script>
export default {
  created() {
    console.log(localStorage.getItem("token"));
  },
};
</script>

<style>
</style>
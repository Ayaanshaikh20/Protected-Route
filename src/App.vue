<template>
  <div class="msg">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "../component/Theheader";
export default {
  components: { TheHeader },
  data() {
    return {
      msg: "ayaan shaikh",
    };
  },
};
</script>

<style scoped>
.msg {
  margin-left: 10px;
}
</style>

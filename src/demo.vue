<template>
  <div style="height: 5000px;backgrount: red;">
    <GulpBackToTop transitionName="star" />


  </div>
</template>
<script>
import GulpBackToTop from "./backToTop/index.vue";

export default {
  name: "demo",
  components: {
    GulpBackToTop,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: white;
}
</style>
<style scoped lang="scss">
</style>

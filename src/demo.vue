<template>
  <div>
    <simplemdeMd />
  </div>
</template>
<script>
import simplemdeMd from './marDowndEditor'

export default {
  name: "demo",
  components: {
    simplemdeMd
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

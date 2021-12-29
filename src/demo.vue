<template>
  <div>
    <JsonEditor />
  </div>
</template>
<script>
import JsonEditor from './jsonEditor/index.vue'

export default {
  name: "demo",
  components: {
    JsonEditor
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

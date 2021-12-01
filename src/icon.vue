<template>
  <svg class="g-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import "./svg.js";
export default {
  name: "L-Icon",
  props: ["name"]
};
</script>
<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>

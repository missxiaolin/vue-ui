<template>
  <div class="gulu-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "L-Content",
};
</script>

<style lang="scss" scoped>
.gulu-content {
  flex-grow: 1;
}
</style>
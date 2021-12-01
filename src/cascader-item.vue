<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <template v-if="sourceItem.children">
      <gulu-cascader-item
        v-for="(item, index) in sourceItem.children"
        :key="index"
        :sourceItem="item"
      ></gulu-cascader-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "LCascaderItem",
  props: {
    sourceItem: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.cascaderItem {
  border: 1px solid red;
  margin: 10px;
}
</style>
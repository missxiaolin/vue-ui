<template>
  <div>
    <div style="padding: 20px">
      <l-cascader
        :source="source"
        popover-height="200px"
        :selected.sync="selected"
      ></l-cascader>
    </div>
  </div>
</template>
<script>
import Button from "./button.vue";
import Cascader from "./cascader.vue";
import db from "./db";

function ajax(parentId = 0) {
  return db.filter((item) => item.parent_id == parentId);
}

console.log(ajax());

export default {
  name: "demo",
  components: {
    "l-button": Button,
    "l-cascader": Cascader,
  },
  data() {
    return {
      selected: [],
      source: ajax(),
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>
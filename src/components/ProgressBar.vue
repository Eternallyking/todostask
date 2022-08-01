<template>
  <div
    class="app"
    :style="`width:${width}px;height:${height}px;border-radius: ${radius}px; background-color:${backgroundColor} `"
  >
    <div
      class="main"
      :style="`width: ${progress};height:${height}px; border-radius: ${radius}px; background-color:${color}`"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    progress: {
      type: String,
    },
    radius: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
    },
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.app {
  width: 250px;
  height: 50px;
  background-color: green;
  border-radius: 10px;
  overflow: hidden;
}
.main {
  height: 50px;
  width: 100px;
  background-color: red;
  border: 0;
}
</style>

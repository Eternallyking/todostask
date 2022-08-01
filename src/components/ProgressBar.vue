<template>
  <div
    class="app"
    :style="`width:${width}px;height:${height}px;border-radius: ${radius}px; background-color:${backgroundColor} `"
  >
    <div
      class="main"
      :style="`width: ${progresss}%;height:${height}px; border-radius: ${radius}px; background-color:${colors}`"
    >
      {{ progresss }}%
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progresss: this.progress,
      colors: this.color,
    };
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

  created() {
    const timer = setInterval(() => {
      if (this.progresss == "100") {
        clearInterval(timer);
        this.colors = "green";
        this.$emit("finish");
        return;
      }
      this.progresss = this.progresss - 0 + 1;
    }, 100);
  },

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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

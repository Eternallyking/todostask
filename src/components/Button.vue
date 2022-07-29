<template>
  <div>
    <button
      @click="clickfn"
      :style="` width: ${width}px; height: ${height}px; background-color: ${backgroundColor}; color: ${color};
      border-color: ${borderColor}; border-radius:${borderRadius}px`"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: () => "#000",
    },
    width: {
      type: String,
      default: () => "50",
    },
    height: {
      type: String,
      default: () => "20",
    },
    backgroundColor: {
      type: String,
      default: () => "#fff",
    },
    text: {
      type: String,
    },
    borderColor: {
      type: String,
      default: () => "#000",
    },
    borderRadius: {
      type: String,
      default: () => "5",
    },
  },
  created() {},

  methods: {
    clickfn() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
</style>

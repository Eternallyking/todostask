<template>
  <div>
    <button
      class="btn"
      @click="clickfn"
      :style="` width: ${width}px; height: ${height}px; background-color: ${backgroundColor}; color: ${color};
      border-color: ${borderColor};`"
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
.btn {
  border-radius: 5px;
  border-color: #000;
}
</style>

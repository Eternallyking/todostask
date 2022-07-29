<template>
  <header class="header">
    <h1 :style="`color: ${Peeling}`">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      v-model="values"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addtaskfn"
    />
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      values: "",
    };
  },
  computed: {
    ...mapGetters(["Peeling"]),
  },
  methods: {
    addtaskfn() {
      this.$store.dispatch("asyncaddtask", this.values);
      this.values = "";
    },
  },
};
</script>

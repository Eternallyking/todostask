<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ nofinishtask }}</strong></span
    >
    <ul class="filters">
      <li>
        <a class="selected" href="javascript:;">全部</a>
      </li>
      <li>
        <a href="javascript:;">未完成</a>
      </li>
      <li>
        <a href="javascript:;">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="delallfn">清除已完成</button>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tasklist", "nofinishtask"]),
  },
  methods: {
    delallfn() {
      this.$store.dispatch("asyncdelall");
    },
  },
};
</script>

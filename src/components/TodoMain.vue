<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="item in tasklist"
      :key="item.id"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          @change="changestatefn(item.id)"
        />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="deltasklistfn(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tasklist"]),
  },
  methods: {
    deltasklistfn(id) {
      this.$store.dispatch("asyncdeltask", id);
    },
    changestatefn(id) {
      this.$store.dispatch("asyncchangestate", id);
    },
  },
};
</script>

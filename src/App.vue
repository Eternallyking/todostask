<template>
  <div>
    <button @click="Peelingfn(Math.floor(Math.random() * 4))">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <Button
      width="40"
      height="20"
      color="#fff"
      backgroundColor="red"
      @click="clickfn"
      text="按钮"
      borderRadius="10"
      borderColor="pink"
    ></Button>
    <Button></Button>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue"; // shift + alt + 下
import TodoHeader from "./components/TodoHeader.vue"; // shift + alt + 下
import TodoMain from "./components/TodoMain.vue"; // shift + alt + 下
import { mapMutations } from "vuex";
import Button from "./components/Button.vue";
export default {
  data() {
    return {};
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    Button,
  },

  created() {},

  methods: {
    ...mapMutations(["Peeling"]),
    Peelingfn(index) {
      this.$store.dispatch("asyncPeeling", index);
    },
    clickfn() {
      console.log(1);
    },
  },
};
</script>

<style scoped></style>

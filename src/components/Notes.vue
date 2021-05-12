<template>
  <ul>
    <li v-for="(title, index) in titles" :key="index">{{ title }}</li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const titles = computed(() => store.state.titles);
    return {
      titles,
    };
  },
};
</script>
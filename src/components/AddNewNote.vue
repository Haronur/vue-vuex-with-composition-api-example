<template>
  <input type="text" v-model="title" @keypress.enter="save" />
  <p>Total Notes: {{ totalTitles }}</p>
</template>


<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const totalTitles = computed(() => store.getters.totalTitles);
    const title = ref("");
    function save() {
      store.dispatch("saveTitle", title.value);
      title.value = "";
    }
    return {
      totalTitles,
      title,
      save,
    };
  },
};
</script>
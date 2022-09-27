<!-- eslint-disable prettier/prettier -->
<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClass"> {{ action }} </span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-medium">Find your next job at Pennyway.</h2>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import NextOrFirst from "@/utils/NextOrFirstElement.js";
export default {
  name: "HeadlineVue",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClass() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeAction();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeAction() {
      this.interval = setInterval(() => {
        //action verb options
        const actions = ["Build", "Code", "Create", "Design"];
        //set action
        this.action = NextOrFirst(actions, this.action);
      }, 4000);
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>

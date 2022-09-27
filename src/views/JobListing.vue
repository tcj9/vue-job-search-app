<!-- eslint-disable prettier/prettier -->
<template>
  <div>Job Page {{ currentJobId }}</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "JobListing",
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>

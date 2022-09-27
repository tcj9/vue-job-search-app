<!-- eslint-disable prettier/prettier -->
<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mx-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10">Role?</label>
        <text-input
          v-model="role"
          placeholder="Developer"
          data-test="job-search-form-role-input"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r to-brand-gray-3 bg-brand-gray-2"
      >
        in
      </span>
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label for="" class="absolute left-0 -top-10">Where?</label>
        <text-input
          v-model="location"
          placeholder="Developer"
          data-test="job-search-form-location-input"
        />
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
      data-test="job-search-form-submit-button"
    />
  </form>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import ActionButton from "@/components/common/ActionButton.vue";
import TextInput from "../common/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>

<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semi-bold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <accordian header="Degree"></accordian>
      <accordian header="Job Types"></accordian>
      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import ActionButton from "@/components/common/ActionButton.vue";
import Accordian from "@/components/common/Accordian.vue";
import JobFiltersSidebarOrganizations from "@/components/job-results/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordian,
    JobFiltersSidebarOrganizations,
  },
};
</script>

<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline-vue />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-cover rounded"
            src="/work.jpg"
            alt="picture of a work group"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import HeadlineVue from "@/components/job-search/Headline.vue";
import JobSearchForm from "@/components/job-search/JobSearchForm.vue";
export default {
  name: "HeroVue",
  components: {
    HeadlineVue,
    JobSearchForm,
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style></style>

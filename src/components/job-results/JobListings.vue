<!-- eslint-disable prettier/prettier -->
<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="tx-sm flex-grow" data-test="job-results-page-number">
          Page {{ currentPage }}
        </p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{
              name: 'JobResults',
              query: { page: previousPage, max: maxPerPage },
            }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
          >
            Previous
          </router-link>
          <router-link
            v-if="nextPage"
            :to="{
              name: 'JobResults',
              query: { page: nextPage, max: maxPerPage },
            }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { FETCH_JOBS } from "@/store";
import JobListing from "@/components/job-results/JobListing.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    maxPerPage() {
      return Number.parseInt(this.$route.query.max || "10");
    },
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    previousPage() {
      const numberPrior = this.currentPage - 1;
      return numberPrior >= 1 ? numberPrior : undefined;
    },
    nextPage() {
      const nextNumber = this.currentPage + 1;
      const maxPage = Math.ceil(this.jobs.length / this.maxPerPage);
      return nextNumber <= maxPage ? nextNumber : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const startIndex = (pageNumber - 1) * this.maxPerPage;
      const endIndex = pageNumber * this.maxPerPage;
      return this.jobs.slice(startIndex, endIndex);
    },
    ...mapState(["jobs"]),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>

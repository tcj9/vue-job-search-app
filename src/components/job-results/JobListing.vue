<!-- eslint-disable prettier/prettier -->
<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
        <div class="flex flex-row align-middle">
          <div>
            <font-awesome-icon :icon="['far', 'building']" class="mr-2" />
            <span>{{ job.organization }}</span>
          </div>
          <div class="mx-4"></div>
          <div>
            <ul>
              <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2" />
              <li
                v-for="location in job.locations"
                :key="location"
                class="inline-block mr-5 italic"
              >
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div><h3 class="mt-1 mb-2">Qualifications:</h3></div>
        <div>
          <ul class="pl-8 list-disc">
            <li
              v-for="qualification in job.minimumQualifications"
              :key="qualification"
            >
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-2 mb-4 text-center">
        <router-link :to="jobPageLink" class="text-brand-blue-1"
          >Expand</router-link
        >
      </div>
    </router-link>
  </li>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "JobListing",
  props: {
    job: {
      required: true,
      type: Object,
    },
  },
  computed: {
    jobPageLink() {
      return `/jobs/results/${this.job.id}`;
    },
  },
};
</script>

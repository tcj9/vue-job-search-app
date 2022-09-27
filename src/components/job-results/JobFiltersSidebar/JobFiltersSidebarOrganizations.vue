<!-- eslint-disable prettier/prettier -->
<template>
  <accordian header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" name="VueTube" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="w-1/2 h-8">
            <input
              id="Between Vue"
              type="checkbox"
              name="Between Vue"
              class="mr-3"
            />
            <label for="Between Vue">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input
              id="Et Vue Brute"
              type="checkbox"
              name="Et Vue Brute"
              class="mr-3"
            />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input
              id="Vue and a half"
              type="checkbox"
              name="Vue and a half"
              class="mr-3"
            />
            <label for="Vue and a half">Vue and a half</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordian>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Accordian from "@/components/common/Accordian.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordian,
  },
};
</script>

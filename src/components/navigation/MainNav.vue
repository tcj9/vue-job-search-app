<!-- eslint-disable prettier/prettier -->
<template>
  <nav :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl font-semibold"
        >
          {{ company }}
        </router-link>
        <div class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                href=""
                class="flex items-center h-full py-2 5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="flex items-center h-full ml-auto">
          <action-button
            v-if="!isLoggedIn"
            text="Sign In"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
          <profile-img v-else data-test="profile-image" />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </nav>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { mapMutations, mapState } from "vuex";
import ActionButton from "@/components/common/ActionButton.vue";
import ProfileImg from "@/components/navigation/ProfileImage.vue";
import SubNav from "@/components/navigation/SubNav.vue";
import { LOGIN_USER } from "@/store";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImg,
    SubNav,
  },
  data() {
    return {
      company: "Pennyway Listings",
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Life at Pennyway", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
        { text: "Students", url: "/" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations([LOGIN_USER]),
  },
};
</script>

import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobResultsView from "@/views/JobResultsView.vue";
// import JobListingView from "@/views/JobListing.vue";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/*webpackChunkName:"jobs"*/ "@/views/JobResultsView.vue");
const JobListingView = () =>
  import(/*webpackChunkName:"jobs"*/ "@/views/JobListing.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobListingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;

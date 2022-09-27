/* eslint-disable prettier/prettier */
import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import JobListings from "@/components/job-results/JobListings.vue";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });
  const createStore = (config = {}) => ({
    state: {
      jobs: Array(15).fill({}),
    },
    dispatch: jest.fn(),
    ...config,
  });
  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to fetch jobs", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    const $route = createRoute({ page: "1" });
    const numbeOfJobsInStore = 15;
    const $store = createStore({
      state: {
        jobs: Array(numbeOfJobsInStore).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("when 'query params' exclude page number", () => {
    it("displays page number 1", () => {
      const pageQuery = { page: undefined };
      const $route = createRoute(pageQuery);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const pageNumberElement = wrapper.find(
        "[data-test='job-results-page-number']"
      );
      expect(pageNumberElement.text()).toBe("Page 1");
    });
  });

  describe("when 'query params' include page number", () => {
    it("displays page number", () => {
      const pageQuery = { page: "3" };
      const $route = createRoute(pageQuery);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const pageNumberElement = wrapper.find(
        "[data-test='job-results-page-number']"
      );
      expect(pageNumberElement.text()).toBe("Page 3");
    });
  });

  describe("when user is on first page of job results page", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPageButton = wrapper.find(
        "[data-test='previous-page-link']"
      );
      expect(previousPageButton.exists()).toBe(false);
    });

    it("shows link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const numbeOfJobsInStore = 15;
      const $store = createStore({
        state: {
          jobs: Array(numbeOfJobsInStore).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPageButton = wrapper.find("[data-test='next-page-link']");
      expect(nextPageButton.exists()).toBe(true);
    });
  });

  describe("when user is on last page of job results page", () => {
    it("shows link to previous page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const numbeOfJobsInStore = 15;
      const $store = createStore({
        state: {
          jobs: Array(numbeOfJobsInStore).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPageButton = wrapper.find(
        "[data-test='previous-page-link']"
      );
      expect(previousPageButton.exists()).toBe(true);
    });

    it("does not show link to next page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const numbeOfJobsInStore = 15;
      const $store = createStore({
        state: {
          jobs: Array(numbeOfJobsInStore).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPageButton = wrapper.find("[data-test='next-page-link']");
      expect(nextPageButton.exists()).toBe(false);
    });
  });
});

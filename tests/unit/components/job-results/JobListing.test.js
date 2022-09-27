/* eslint-disable prettier/prettier */
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/job-results/JobListing.vue";

describe("JobListing", () => {
  const createConfig = (job) => ({
    props: {
      job,
    },
    global: {
      stubs: {
        FontAwesomeIcon: true,
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    //job & jobListing object
    const job = { title: "Software Engineer" };
    const wrapper = shallowMount(JobListing, createConfig(job));
    //results
    expect(wrapper.text()).toMatch("Software Engineer");
  });

  it("renders job organization", () => {
    //job & jobListing object
    const job = { organization: "Corndog" };
    const wrapper = shallowMount(JobListing, createConfig(job));
    //results
    expect(wrapper.text()).toMatch("Corndog");
  });

  it("renders job locations", () => {
    //job & jobListing object
    const job = { locations: ["Las Vegas", "Orlando"] };
    const wrapper = shallowMount(JobListing, createConfig(job));
    //results
    expect(wrapper.text()).toMatch("Las Vegas");
    expect(wrapper.text()).toMatch("Orlando");
  });

  it("renders job locations", () => {
    //job & jobListing object
    const job = { minimumQualifications: ["Good codes", "Good laughs"] };
    const wrapper = shallowMount(JobListing, createConfig(job));
    //results
    expect(wrapper.text()).toMatch("Good codes");
    expect(wrapper.text()).toMatch("Good laughs");
  });

  it("links to individual job page", () => {
    //job & jobListing object
    const job = { id: 99 };
    const wrapper = shallowMount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const to = jobPageLink.props("to");
    //results
    expect(to).toBe("/jobs/results/99");
  });
});

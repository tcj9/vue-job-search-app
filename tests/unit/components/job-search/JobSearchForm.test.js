/* eslint-disable prettier/prettier */
import { mount } from "@vue/test-utils";
import JobSearchForm from "@/components/job-search/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job results page", async () => {
      const push = jest.fn();

      const $router = { push };

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find(
        "[data-test='job-search-form-role-input']"
      );
      await roleInput.setValue("Developer");

      const locationInput = wrapper.find(
        "[data-test='job-search-form-location-input']"
      );
      await locationInput.setValue("Colorado");

      const submitButton = wrapper.find(
        "[data-test='job-search-form-submit-button']"
      );
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: { role: "Developer", location: "Colorado" },
      });
    });
  });
});

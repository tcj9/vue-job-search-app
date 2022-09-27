/* eslint-disable prettier/prettier */
import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import HeadlineVue from "@/components/job-search/Headline";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays first action", () => {
    const wrapper = mount(HeadlineVue);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consistant level", () => {
    const intervalCall = jest.spyOn(global, "setInterval");
    mount(HeadlineVue);
    expect(intervalCall).toHaveBeenCalled();
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(HeadlineVue);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Code for everyone");
  });

  it("removes interval when component disapears", () => {
    const intervalCall = jest.spyOn(global, "clearInterval");
    const wrapper = mount(HeadlineVue);
    wrapper.unmount();
    expect(intervalCall).toHaveBeenCalled();
  });
});

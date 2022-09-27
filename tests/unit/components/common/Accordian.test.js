/* eslint-disable prettier/prettier */
import { shallowMount } from "@vue/test-utils";
import Accordian from "@/components/common/Accordian.vue";

describe("Accordian", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Header Text",
    },
    slots: {
      default: "<p>nested child</p>",
    },
    ...config,
  });

  it("renders child", async () => {
    const slots = {
      default: "<p>nested child</p>",
    };
    const wrapper = shallowMount(Accordian, createConfig({ slots }));
    expect(wrapper.text()).not.toMatch("nested child");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("nested child");
  });

  describe("when we do not provide custom child content", () => {
    it("renders default content", async () => {
      const accordianConfig = createConfig({ slots: {} });

      const wrapper = shallowMount(Accordian, accordianConfig);

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch("Empty");
    });
  });
});

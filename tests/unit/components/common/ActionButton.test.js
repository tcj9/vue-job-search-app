/* eslint-disable prettier/prettier */
import { mount } from "@vue/test-utils";
import ActionButton from "@/components/common/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable",
      },
    });

    expect(wrapper.text()).toMatch("Clickable");
  });

  it("applies styles to buttons", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
        text: "Click me!",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});

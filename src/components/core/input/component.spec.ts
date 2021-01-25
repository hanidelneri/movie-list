import { mount } from "@/tests/utils";
import Input from "./component.vue";

describe("core/input", () => {
  test("should update value correctly", async () => {
    const wrapper = mount(Input);
    const input = jest.fn();
    wrapper.vm.$on("input", input);
    await wrapper.setData({
      innerValue: "foo"
    });
    expect(input).toHaveBeenCalledWith("foo");
  });

  test("cross icon should clear the value", async () => {
    const wrapper = mount(Input);
    const input = jest.fn();
    await wrapper.setData({
      innerValue: "foo"
    });
    wrapper.vm.$on("input", input);
    const icon = wrapper.find("button.v-icon");
    await icon.trigger("click");
    expect(input).toHaveBeenCalledWith(null);
  });
});

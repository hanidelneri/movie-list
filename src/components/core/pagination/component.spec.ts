import { mount } from "@/tests/utils";
import Pagination from "./component.vue";

describe("core/pagination", () => {
  test("should update page number when clicking on next", async () => {
    const wrapper = mount(Pagination, {
      propsData: {
        totalItems: 100,
        pageSize: 10
      }
    });

    await wrapper.vm.$nextTick();
    const cb = jest.fn();
    wrapper.vm.$on("input", cb);
    const navigation = wrapper.findAll(".v-pagination__item").wrappers;
    await navigation[1].trigger("click");
    expect(cb).toHaveBeenCalledWith(2);
  });

  test("should update page number when clicking on previous", async () => {
    const wrapper = mount(Pagination, {
      propsData: {
        totalItems: 100,
        pageSize: 10,
        value: 6
      }
    });

    await wrapper.vm.$nextTick();
    const cb = jest.fn();
    wrapper.vm.$on("input", cb);
    const navigation = wrapper.findAll(".v-pagination__navigation").wrappers;
    await navigation[0].trigger("click");
    expect(cb).toHaveBeenCalledWith(5);
  });

  test("should update page number when clicking onnext", async () => {
    const wrapper = mount(Pagination, {
      propsData: {
        totalItems: 100,
        pageSize: 10,
        value: 6
      }
    });

    await wrapper.vm.$nextTick();
    const cb = jest.fn();
    wrapper.vm.$on("input", cb);
    const navigation = wrapper.findAll(".v-pagination__navigation").wrappers;
    await navigation[1].trigger("click");
    expect(cb).toHaveBeenCalledWith(7);
  });
});

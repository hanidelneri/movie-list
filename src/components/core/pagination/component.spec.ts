import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import { Icons } from "vuetify/types/services/icons";
import Pagination from "./component.vue";

const en = {};
const mockIcons: Icons = {
  iconfont: "fa",
  component: "",
  values: {
    complete: "",
    cancel: "",
    close: "",
    delete: "",
    clear: "",
    success: "",
    info: "",
    warning: "",
    error: "",
    prev: "",
    next: "",
    checkboxOn: "",
    checkboxOff: "",
    checkboxIndeterminate: "",
    delimiter: "",
    sort: "",
    expand: "",
    menu: "",
    subgroup: "",
    dropdown: "",
    radioOn: "",
    radioOff: "",
    edit: "",
    ratingEmpty: "",
    ratingFull: "",
    ratingHalf: "",
    loading: "",
    first: "",
    last: "",
    unfold: "",
    file: "",
    plus: "",
    minus: ""
  }
};

const mockLang = {
  locales: { en },
  current: "en",
  t: () => {
    return "";
  }
};

describe("core/pagination", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  test("test", async () => {
    const value = 1;
    const wrapper = mount(Pagination, {
      propsData: {
        totalItems: 100,
        pageSize: 10,
        value: value
      },
      created() {
        this.$vuetify.icons = mockIcons;
        this.$vuetify.lang = mockLang;
      }
    });
    const button = wrapper.findAll("li").at(4);
    await button.trigger("click");
    console.log(wrapper.emitted().input);
    expect(value).toBe(2);
  });
});

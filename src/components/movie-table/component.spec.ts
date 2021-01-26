jest.mock("axios");

import axios from "axios";
import { mount } from "@/tests/utils";
import MovieTable from "./component.vue";

describe("movie-table", () => {
  beforeAll(() => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        data: {
          data: [],
          total: 100
        }
      })
    );
  });
  test("should fetch data on search title value change", async () => {
    const wrapper = mount(MovieTable);
    const input = wrapper.find("input");
    await input.setValue("title");
    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  test("should fetch data on page number value change", async () => {
    const wrapper = mount(MovieTable);
    await wrapper.vm.$nextTick();
    const navigation = wrapper.findAll(".v-pagination__item").wrappers[1];
    await navigation.trigger("click");
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonmock.hackerrank.com/api/movies/search/?Title=&page=2"
    );
  });
});

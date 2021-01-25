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
});

import { mount } from "@/tests/utils";
import { Movie } from "@/types";
import Table from "./component.vue";

const mock: Movie[] = [
  {
    Title: "movie-1",
    Year: 1999,
    imdbID: "1"
  },
  {
    Title: "movie-2",
    Year: 1998,
    imdbID: "2"
  }
];

describe("core/table", () => {
  beforeEach(() => {
    localStorage.setItem("favourite-movies", JSON.stringify([]));
  });
  test("add to favourites works correctly", async () => {
    const wrapper = mount(Table, {
      propsData: {
        movies: mock
      }
    });
    const stars = wrapper.findAll("tbody > tr button").wrappers;
    await stars[0].trigger("click");

    let stored = localStorage.getItem("favourite-movies");
    if (!stored) stored = "";
    const movies = JSON.parse(stored) as Movie[];
    expect(movies[0].Title).toBe(mock[0].Title);
    expect(movies[0].Year).toBe(mock[0].Year);
    expect(movies[0].imdbID).toBe(mock[0].imdbID);
    expect(wrapper).toMatchSnapshot();
  });

  test("remove from favourites works correctly", async () => {
    const wrapper = mount(Table, {
      propsData: {
        movies: mock
      }
    });
    const star = wrapper.findAll("tbody > tr button").wrappers[0];
    await star.trigger("click");
    await wrapper.vm.$nextTick();
    const remove = wrapper.findAll("tbody > tr button").wrappers[0];
    await remove.trigger("click");
    await wrapper.vm.$nextTick();
    let stored = localStorage.getItem("favourite-movies");
    if (!stored) stored = "";
    const movies = JSON.parse(stored) as Movie[];
    expect(movies).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });
});

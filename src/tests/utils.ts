import {
  mount as baseMount,
  createLocalVue,
  VueClass,
  ThisTypedMountOptions
} from "@vue/test-utils";
import Vuetify from "vuetify";
import CompositionApi from "@vue/composition-api";
import VueRouter from "vue-router";

export function mount<V extends Vue>(
  component: VueClass<V>,
  options?: ThisTypedMountOptions<V>
) {
  const localVue = createLocalVue();
  localVue.use(Vuetify);
  localVue.use(CompositionApi);
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: []
  });
  const vuetify = new Vuetify();

  return baseMount(component, {
    localVue: localVue,
    vuetify,
    router,
    ...options
  });
}

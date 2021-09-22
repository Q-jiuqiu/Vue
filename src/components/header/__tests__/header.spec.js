import { mount } from "@vue/test-utils";
import header from "../header.vue"

describe("header.vue", () => {
  const wrapper = mount(header);
  it("header test", () => {
    const title = "标题";
    expect(wrapper.text()).toMatch(title)
  })
})
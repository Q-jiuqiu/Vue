import { mount } from "@vue/test-utils"
import ifAndShow from "../ifAndShow.vue"

describe("ifAndShow.spec", () => {
  it("初始页面", () => {
    const wrapper = mount(ifAndShow);
    // get("选择器") 获取组件
    console.log(wrapper.componentVM);
    // console.log(wrapper.find(".ifDiv"));
    // console.log(wrapper.find(".ifDiv").isVisible());
    // expect(wrapper.find(".ifDiv").isVisible()).toBe(false)
  })
})
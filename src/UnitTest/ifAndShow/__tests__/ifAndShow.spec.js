import { mount } from "@vue/test-utils"
import ifAndShow from "../ifAndShow.vue"

describe("ifAndShow.spec", () => {
  it("判断showDiv是否可见", () => {
    const wrapper = mount(ifAndShow);
    // get("选择器") 获取一定存在的组件/元素 如果元素/组件不存在则会报错
    const showDiv = wrapper.get(".showDiv"); // domWrapper
    const showDivFind = wrapper.find(".showDiv"); // domWrapper
    // isVisible 如果有一个祖先元素拥有 display: none 或 visibility: hidden 样式则返回 false
    // v-if false 不可用改方法判断
    expect(showDiv.isVisible()).toBe(false);
    expect(showDivFind.isVisible()).toBe(false);
    expect(showDivFind.exists()).toBe(true);
  })

  it("判断ifDiv是否存在", () => {
    const wrapper = mount(ifAndShow);
    // find
    const ifDiv = wrapper.find(".ifDiv");
    // exists 组件或者组件的祖先元素设置了display: none 或 visibility: hidden 样式则返回 true
    expect(ifDiv.exists()).toBe(false);
  })
})
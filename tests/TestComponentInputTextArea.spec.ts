import TestComponentInputTextArea from "../src/components/TestComponentInputTextArea.vue";
import { mount } from "@vue/test-utils";

describe("TestComponentInputTextArea.vue component test", () => {
    test("rendering TestComponentInputTextArea.vue correct", () => {
        const wrapper = mount(TestComponentInputTextArea);
        expect(wrapper.html()).toContain("This is a heading for a textarea")
    })
})

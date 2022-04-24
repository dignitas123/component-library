import TestComponentInput from "../src/components/TestComponentInput.vue";
import { mount } from "@vue/test-utils";

describe("TestComponentInput.vue component test", () => {
    test("rendering TestComponentInput.vue correct", () => {
        const wrapper = mount(TestComponentInput);

        expect(wrapper.html()).toContain("Test");
    })
})

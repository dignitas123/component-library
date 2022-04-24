import { App } from 'vue';
import TestComponentInput from "./components/TestComponentInput.vue";
import TestComponentInputTextArea from "./components/TestComponentInputTextArea.vue";

export default {
    install (app: App) {
        app.component(TestComponentInput.name, TestComponentInput);
        app.component(TestComponentInputTextArea.name, TestComponentInputTextArea);
    }
}

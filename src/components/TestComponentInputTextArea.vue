<template>
    <p>{{ textareaHeading }}:</p>
    <textarea />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "TestComponentInputTextArea",
    setup() {
        const textareaHeading = ref("This is a heading for a textarea");
        return { textareaHeading }
    }
})
</script>

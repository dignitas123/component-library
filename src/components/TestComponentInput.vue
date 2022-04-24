<template>
    <input class="test-component-input" type="text" :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "TestComponentInput",
    setup() {
        const placeholder = ref("");

        placeholder.value = "Test";

        return { placeholder }
    }
})
</script>

<style lang="scss" scoped>
$color: violet;

.test-component-input {
    background-color: $color;
}
</style>

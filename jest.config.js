module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
    transform: {
        "^.+\\.vue$": "vue-jest",
    },
    testMatch: ["**/*.spec.ts"],
    coverageReporters: ["text", "json", "cobertura"],
    reporters: ["default", "jest-junit"],
    setupFilesAfterEnv: ["<rootDir>/tests/setupTest.ts"]
}
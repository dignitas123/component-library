jest.mock("vue-router", () => ({
    useRouter: jest.fn(() => ({
        push: jest.fn(),
    })),
    useRoute: jest.fn(() => ({
        fullPath: "",
        path: "",
    })),
}));
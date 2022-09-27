module.exports = {
  collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.{js,jsx}"],
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
};

module.exports = {
  testMatch: ["<rootDir>/**/*.spec.(js|jsx|ts|tsx)"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  }
};

module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/App.test.tsx"],
  testEnvironment: "jsdom",
};

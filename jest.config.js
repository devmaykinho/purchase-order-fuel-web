const testType = process.argv[2] ? process.argv[2].replace(".test", "") : "";

const jestJunitConfig = {
  suiteName: "jest tests",
  suiteNameTemplate: "{filename}",
  outputDirectory: "./reports",
  outputName: "./test-junit.html",
  classNameTemplate: "{classname}-{title}",
  titleTemplate: "{classname}-{title}",
  ancestorSeparator: " › ",
  usePathForSuiteName: "true",
};

module.exports = {
  preset: "ts-jest",
  reporters: ["default", ["jest-junit", jestJunitConfig]],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$":
      "<rootDir>/jest-files-mock.js",
    "\\.(css|styl|less|sass|scss)$": "<rootDir>/jest-files-mock.js",
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/jest-files-mock.js",
    "\\.(css|less)$": "<rootDir>/jest-files-mock.js",
  },
  setupFiles: ["raf/polyfill"],
  testRegex: "\\.(test|spec)\\.(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageDirectory: `./reports/${testType}`,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "src/**/**/*.{ts,tsx}",
    "!*.js",
    "!*/**/*.js",
    "!src/**/*.data*",
    "!src/**/*.data",
    "!src/routes/*.{ts,tsx}",
    "!src/index.{ts,tsx}",
    "!src/infrastructure/defaultProps/defaultProps.ts",
    "!src/domains/domains.ts",
    "!src/react-app-env.d.ts",
    "!src/services/test-id-selector/TestIdSelectorService.ts",
    "!src/assets/styles/themes.ts",
  ],
};

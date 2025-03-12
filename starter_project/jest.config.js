module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest"  // Use babel-jest to transform all .js files
    },
    testEnvironment: "jsdom",      // Use jsdom for DOM APIs
    moduleFileExtensions: ["js", "jsx", "json"],
    transformIgnorePatterns: ["/node_modules/"]
  };
  
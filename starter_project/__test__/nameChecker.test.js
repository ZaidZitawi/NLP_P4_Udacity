// __test__/nameChecker.test.js

import { checkURL } from "../src/client/js/nameChecker";

describe("nameChecker module", () => {
  test("checkURL returns true for valid URL", () => {
    const validURL = "https://www.example.com";
    expect(checkURL(validURL)).toBe(true);
  });

  test("checkURL returns false for invalid URL", () => {
    const invalidURL = "not a url";
    expect(checkURL(invalidURL)).toBe(false);
  });
});

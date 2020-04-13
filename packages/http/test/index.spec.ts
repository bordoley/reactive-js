import { parseMediaTypeOrThrow } from "../src";

describe("mediaType", () => {
  test("parseMediaType with params", () => {
    const result = parseMediaTypeOrThrow("application/json; charset=UTF-8");
    expect(result.type).toEqual("application");
    expect(result.subtype).toEqual("json");
    expect(result.params["charset"]).toEqual("UTF-8");
  });

  test("parseMediaType without params", () => {
    const result = parseMediaTypeOrThrow("application/json");
    expect(result.type).toEqual("application");
    expect(result.subtype).toEqual("json");
  });

  test("parseMediaType with invalid params", () => {
    expect(() => parseMediaTypeOrThrow("application/json; =")).toThrow();
  });

  test("parseMediaType with empty params", () => {
    expect(() => parseMediaTypeOrThrow("application/json; charset=")).toThrow();
  });

  test("parseMediaRange", () => {
    const result = parseMediaTypeOrThrow("*/*; q=0.1; charset=UTF-8");
    expect(result.type).toEqual("*");
    expect(result.subtype).toEqual("*");
    expect(result.params["q"]).toEqual("0.1");
  });
});

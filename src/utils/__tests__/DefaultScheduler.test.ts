import {
  describe,
  expectIsNone,
  expectToThrow,
  test,
  testModule,
} from "../../__internal__/testing.js";

import * as DefaultScheduler from "../DefaultScheduler.js";

testModule(
  "DefaultScheduler",
  describe(
    "getOrNone",
    test("getOrNone returns none if no scheduler is set", () => {
      expectIsNone(DefaultScheduler.getOrNone());
    }),
  ),
  describe(
    "get",
    test("throws if no scheduler is set", () => {
      expectToThrow(DefaultScheduler.get);
    }),
  ),
)();

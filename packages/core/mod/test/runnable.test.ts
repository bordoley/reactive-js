import {
  compute,
  contains,
  first,
  fromArray,
  empty,
  forEach,
  noneSatisfy,
  generate,
  everySatisfy,
} from "../lib/runnable.ts";
import * as Runnable from "../lib/runnable.ts";
import {
  pipe,
  returns,
  alwaysFalse,
  alwaysTrue,
  increment,
  defer,
} from "../lib/functions.ts";
import {
  test,
  describe,
  expectNone,
  expectEquals,
  mockFn,
  expectToHaveBeenCalledTimes,
  expectTrue,
  expectFalse,
} from "../lib/internal/testing.ts";
import { createMonadTests } from "./monadTests.ts";

export const tests = describe(
  "runnable",
  describe(
    "contains",
    test("source is empty", defer(empty<number>(), contains(1), expectFalse)),
    test(
      "source contains value",
      defer(generate(increment, returns<number>(0)), contains(1), expectTrue),
    ),
    test(
      "source does not contain value",
      defer([2, 3, 4], fromArray(), contains(1), expectFalse),
    ),
  ),

  describe(
    "everySatisfy",
    test(
      "source is empty",
      defer(empty(), everySatisfy(alwaysFalse), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer([1, 2, 3], fromArray(), everySatisfy(alwaysTrue), expectTrue),
    ),
    test(
      "source values fail predicate",
      defer([1, 2, 3], fromArray(), everySatisfy(alwaysFalse), expectFalse),
    ),
  ),
  describe(
    "first",
    test(
      "when enumerable is not empty",
      defer(returns(1), compute(), first, expectEquals(1)),
    ),
    test("when enumerable is empty", defer(empty(), first, expectNone)),
  ),
  test("forEach", () => {
    const fn = mockFn();

    pipe([1, 2, 3], fromArray(), forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
  }),
  describe(
    "noneSatisfy",
    test(
      "source is empty",
      defer(empty(), noneSatisfy(alwaysFalse), expectTrue),
    ),
    test(
      "source values pass predicate",
      defer([1, 2, 3], fromArray(), noneSatisfy(alwaysTrue), expectFalse),
    ),
    test(
      "source values fail predicate",
      defer([1, 2, 3], fromArray(), noneSatisfy(alwaysFalse), expectTrue),
    ),
  ),
  createMonadTests(Runnable),
);

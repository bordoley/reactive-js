import {
  bufferTests,
  catchErrorTests,
  concatAllTests,
  concatTests,
  containsTests,
  decodeWithCharsetTests,
  distinctUntilChangedTests,
  everySatisfyTests,
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  pairwiseTests,
  reduceTests,
  repeatTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
} from "../../__tests__/operators.js";
import {
  describe,
  expectEquals,
  test,
  testModule,
} from "../../__tests__/testing.js";
import { Optional, none, pipeLazy } from "../../functions.js";
import { RunnableLike } from "../../rx.js";
import * as Runnable from "../Runnable.js";

testModule(
  "Runnable",
  bufferTests(Runnable),
  catchErrorTests(Runnable),
  concatTests<RunnableLike>(Runnable),
  concatAllTests(Runnable),
  containsTests(Runnable),
  decodeWithCharsetTests(Runnable),
  distinctUntilChangedTests(Runnable),
  everySatisfyTests(Runnable),
  forEachTests(Runnable),
  fromReadonlyArrayTests<RunnableLike>(Runnable),
  keepTests(Runnable),
  mapTests(Runnable),
  pairwiseTests(Runnable),
  reduceTests(Runnable),
  repeatTests(Runnable),
  scanTests(Runnable),
  skipFirstTests(Runnable),
  takeFirstTests(Runnable),
  takeLastTests(Runnable),
  takeWhileTests(Runnable),
  throwIfEmptyTests(Runnable),
  describe(
    "first",
    test(
      "when the source has values",
      pipeLazy(
        [0, 1, 2],
        Runnable.fromReadonlyArray(),
        Runnable.first(),
        expectEquals<Optional<number>>(0),
      ),
    ),
    test(
      "when the source is empty",
      pipeLazy(
        [],
        Runnable.fromReadonlyArray(),
        Runnable.first(),
        expectEquals<Optional<number>>(none),
      ),
    ),
  ),
  describe(
    "last",
    test(
      "when the source has values",
      pipeLazy(
        [0, 1, 2],
        Runnable.fromReadonlyArray(),
        Runnable.last(),
        expectEquals<Optional<number>>(2),
      ),
    ),
    test(
      "when the source is empty",
      pipeLazy(
        [],
        Runnable.fromReadonlyArray(),
        Runnable.last(),
        expectEquals<Optional<number>>(none),
      ),
    ),
  ),
);

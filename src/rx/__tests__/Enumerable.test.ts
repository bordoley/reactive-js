import {
  bufferTests,
  concatAllTests,
  concatMapTests,
  concatTests,
  concatWithTests,
  distinctUntilChangedTests,
  endWithTests,
  flatMapIterableTests,
  forEachTests,
  fromReadonlyArrayTests,
  ignoreElementsTests,
  keepTests,
  mapTests,
  mapToTests,
  pairwiseTests,
  //repeatTests,
  scanTests,
  skipFirstTests,
  startWithTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
  toObservableTests,
  zipTests,
  zipWithTests,
} from "../../__tests__/operators.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__tests__/testing.js";
import { pipe, returns } from "../../functions.js";
import { EnumerableLike } from "../../rx.js";
import { EnumeratorLike_current, EnumeratorLike_move } from "../../util.js";
import * as Enumerable from "../Enumerable.js";

testModule(
  "Enumerable",
  bufferTests(Enumerable),
  concatTests<EnumerableLike>(Enumerable),
  concatAllTests(Enumerable),
  concatMapTests(Enumerable),
  concatWithTests<EnumerableLike>(Enumerable),
  distinctUntilChangedTests(Enumerable),
  endWithTests<EnumerableLike>(Enumerable),
  forEachTests(Enumerable),
  fromReadonlyArrayTests<EnumerableLike>(Enumerable),
  flatMapIterableTests(Enumerable),
  ignoreElementsTests(Enumerable),
  keepTests(Enumerable),
  mapTests(Enumerable),
  mapToTests(Enumerable),
  pairwiseTests(Enumerable),
  // FIXME
  //repeatTests(Enumerable),
  scanTests(Enumerable),
  skipFirstTests(Enumerable),
  startWithTests<EnumerableLike>(Enumerable),
  takeFirstTests(Enumerable),
  takeLastTests(Enumerable),
  takeWhileTests(Enumerable),
  throwIfEmptyTests(Enumerable),
  toObservableTests<EnumerableLike>(Enumerable),
  zipTests<EnumerableLike>(Enumerable),
  zipWithTests<EnumerableLike>(Enumerable),
  describe(
    "enumerate",
    test("with higher order observable and no delay", () => {
      const enumerator = pipe(
        Enumerable.generate(
          _ => pipe(1, Enumerable.fromOptional()),
          returns(Enumerable.empty()),
        ),
        Enumerable.concatAll(),
        Enumerable.takeFirst({ count: 10 }),
        Enumerable.enumerate<number>(),
      );

      const result: number[] = [];

      while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
      }

      pipe(result, expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
    }),
  ),
);

import ReadonlyArray from "../../containers/ReadonlyArray";
import { pipeLazy } from "../../functions";
import Enumerable from "../../ix/Enumerable";
import { EnumerableObservableLike } from "../../rx";
import EnumerableObservable from "../../rx/EnumerableObservable";
import {
  bufferTests,
  catchErrorTests,
  concatAllTests,
  concatMapTests,
  concatTests,
  concatWithTests,
  decodeWithCharsetTests,
  distinctUntilChangedTests,
  endWithTests,
  everySatisfyTests,
  forEachTests,
  fromArrayTests,
  ignoreElementsTests,
  keepTests,
  mapTests,
  mapToTests,
  pairwiseTests,
  reduceTests,
  scanAsyncTests,
  scanTests,
  skipFirstTests,
  someSatisfyTests,
  startWithTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
  zipTests,
  zipWithTests,
} from "../operators";
import { describe, expectArrayEquals, test, testModule } from "../testing";

const toEnumerableTests = describe(
  "toEnumerable",
  test(
    "with an enumerable observable",
    pipeLazy(
      [1, 2, 3, 4],
      ReadonlyArray.toEnumerableObservable(),
      EnumerableObservable.toEnumerable(),
      Enumerable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 4]),
    ),
  ),
);

testModule(
  "EnumerableObservable",
  bufferTests(EnumerableObservable),
  catchErrorTests(EnumerableObservable),
  concatTests<EnumerableObservableLike>(EnumerableObservable),
  concatAllTests(EnumerableObservable),
  concatMapTests(EnumerableObservable),
  concatWithTests<EnumerableObservableLike>(EnumerableObservable),
  decodeWithCharsetTests(EnumerableObservable),
  distinctUntilChangedTests(EnumerableObservable),
  endWithTests<EnumerableObservableLike>(EnumerableObservable),
  everySatisfyTests(EnumerableObservable),
  forEachTests(EnumerableObservable),
  fromArrayTests<EnumerableObservableLike>(EnumerableObservable),
  ignoreElementsTests(EnumerableObservable),
  keepTests(EnumerableObservable),
  mapTests(EnumerableObservable),
  mapToTests(EnumerableObservable),
  pairwiseTests(EnumerableObservable),
  reduceTests(EnumerableObservable),
  scanTests(EnumerableObservable),
  scanAsyncTests<EnumerableObservableLike, EnumerableObservableLike>(
    EnumerableObservable,
    EnumerableObservable,
  ),
  skipFirstTests(EnumerableObservable),
  someSatisfyTests(EnumerableObservable),
  startWithTests<EnumerableObservableLike>(EnumerableObservable),
  takeFirstTests(EnumerableObservable),
  takeLastTests(EnumerableObservable),
  takeWhileTests(EnumerableObservable),
  throwIfEmptyTests(EnumerableObservable),
  toEnumerableTests,
  zipTests<EnumerableObservableLike>(EnumerableObservable),
  zipWithTests<EnumerableObservableLike>(EnumerableObservable),
);

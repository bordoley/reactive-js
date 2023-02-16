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
  fromReadonlyArrayTests,
  ignoreElementsTests,
  keepTests,
  mapTests,
  mapToTests,
  pairwiseTests,
  reduceTests,
  retryTests,
  scanAsyncTests,
  scanTests,
  skipFirstTests,
  someSatisfyTests,
  startWithTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
  toEnumerableTests,
  toRunnableObservableTests,
  zipTests,
  zipWithTests,
} from "../operators";
import { testModule } from "../testing";

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
  fromReadonlyArrayTests<EnumerableObservableLike>(EnumerableObservable),
  ignoreElementsTests(EnumerableObservable),
  keepTests(EnumerableObservable),
  mapTests(EnumerableObservable),
  mapToTests(EnumerableObservable),
  pairwiseTests(EnumerableObservable),
  reduceTests(EnumerableObservable),
  retryTests<EnumerableObservableLike>(EnumerableObservable),
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
  toEnumerableTests<EnumerableObservableLike>(EnumerableObservable),
  toRunnableObservableTests<EnumerableObservableLike>(EnumerableObservable),
  zipTests<EnumerableObservableLike>(EnumerableObservable),
  zipWithTests<EnumerableObservableLike>(EnumerableObservable),
);

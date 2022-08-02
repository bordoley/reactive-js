import { describe, expectArrayEquals, test } from "../../__internal__/testing";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import { pipeLazy } from "../../functions";
import { toReadonlyArray } from "../../ix/EnumerableLike";
import { deferObservableT } from "../../rx";
import {
  concatT,
  decodeWithCharsetT,
  distinctUntilChangedT,
  forEachT,
  keepT,
  mapT,
  pairwiseT,
  reduceT,
  scanT,
  skipFirstT,
  takeFirstT,
  takeLastT,
  takeWhileT,
  throwIfEmptyT,
  toEnumerable,
  toReadonlyArrayT,
} from "../../rx/EnumerableObservableLike";
import {
  concatTests,
  decodeWithCharsetTests,
  distinctUntilChangedTests,
  forEachTests,
  keepTests,
  mapTests,
  pairwiseTests,
  reduceTests,
  scanTests,
  skipFirstTests,
  takeFirstTests,
  takeLastTests,
  takeWhileTests,
  throwIfEmptyTests,
} from "../operators";

export const EnumerableObservableLikeTests = describe(
  "RunnableObservableLike",
  concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
  }),
  decodeWithCharsetTests({
    fromArray: toObservable,
    ...decodeWithCharsetT,
    ...deferObservableT,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  distinctUntilChangedTests({
    fromArray: toObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
  }),
  forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
  }),
  keepTests({
    fromArray: toObservable,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  pairwiseTests({
    fromArray: toObservable,
    ...pairwiseT,
    ...toReadonlyArrayT,
  }),
  reduceTests({
    fromArray: toObservable,
    ...reduceT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: toObservable,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  skipFirstTests({
    fromArray: toObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
  }),
  takeFirstTests({
    fromArray: toObservable,
    ...takeFirstT,
    ...toReadonlyArrayT,
  }),
  takeLastTests({
    fromArray: toObservable,
    ...takeLastT,
    ...toReadonlyArrayT,
  }),
  takeWhileTests({
    fromArray: toObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
  throwIfEmptyTests({
    fromArray: toObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
  }),
  test(
    "toEnumerable",
    pipeLazy(
      [1, 2, 3, 4],
      toObservable(),
      toEnumerable(),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 4]),
    ),
  ),
);

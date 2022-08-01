import { describe, expectArrayEquals, test } from "../__internal__/testing";
import { toObservable } from "../containers/ReadonlyArrayLike";
import { pipe, pipeLazy } from "../functions";
import { deferObservableT } from "../rx";
import { takeUntil } from "../rx/ObservableLike";
import {
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
  toReadonlyArray,
  toReadonlyArrayT,
} from "../rx/RunnableObservableLike";
import {
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
} from "./operators.test";

export const RunnableObservableLikeTests = describe(
  "RunnableObservableLike",
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
    "takeUntil",
    pipeLazy(
      [1, 2, 3, 4, 5],
      toObservable({ delay: 1 }),
      takeUntil(pipe([1], toObservable({ delay: 3, delayStart: true }))),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
);

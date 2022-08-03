import {
  describe,
  expectArrayEquals,
  expectIsSome,
  expectToHaveBeenCalledTimes,
  mockFn,
  test,
} from "../../__internal__/testing";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import { pipe, pipeLazy, raise } from "../../functions";
import { toReadonlyArray } from "../../ix/EnumerableLike";
import { deferEnumerableObservableT } from "../../rx";
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
import { onSubscribe, subscribe } from "../../rx/ObservableLike";
import { createVirtualTimeScheduler } from "../../scheduling";
import { run } from "../../util/ContinuationLike";
import { getException } from "../../util/DisposableLike";
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
  "EnumerableObservableLike",
  concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
  }),
  decodeWithCharsetTests({
    fromArray: toObservable,
    ...decodeWithCharsetT,
    ...deferEnumerableObservableT,
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
  describe(
    "onSubscribe",
    test("when subscribe function returns a teardown function", () => {
      const scheduler = createVirtualTimeScheduler();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe([1], toObservable(), onSubscribe(f), subscribe(scheduler));

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      run(scheduler);

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),

    test("when callback function throws", () => {
      const scheduler = createVirtualTimeScheduler();
      const subscription = pipe(
        [1],
        toObservable(),
        onSubscribe(raise),
        subscribe(scheduler),
      );

      pipe(subscription, getException, expectIsSome);
    }),
  ),
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

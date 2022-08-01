import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../__internal__/testing";
import { toObservable } from "../containers/ReadonlyArrayLike";
import { increment, pipe, pipeLazy, returns } from "../functions";
import { deferObservableT, generateObservable } from "../rx";
import { subscribe, takeUntil } from "../rx/ObservableLike";
import {
  decodeWithCharsetT,
  distinctUntilChangedT,
  forEach,
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
  toFlowable,
  toReadonlyArray,
  toReadonlyArrayT,
} from "../rx/RunnableObservableLike";
import { createVirtualTimeScheduler } from "../scheduling";
import { dispatch, dispatchTo } from "../scheduling/DispatcherLike";
import { getCurrentTime, schedule } from "../scheduling/SchedulerLike";
import { stream } from "../streaming/StreamableLike";
import { run } from "../util/ContinuationLike";
import { dispose, isDisposed } from "../util/DisposableLike";
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
  describe(
    "toFlowable",
    test("flow a generating source", () => {
      const scheduler = createVirtualTimeScheduler();

      const generateStream = pipe(
        generateObservable(increment, returns(-1), {
          delay: 1,
          delayStart: true,
        }),
        toFlowable(),
        stream(scheduler),
      );

      pipe(generateStream, dispatch("resume"));

      pipe(
        scheduler,
        schedule(pipeLazy("pause", dispatchTo(generateStream)), {
          delay: 2,
        }),
      );

      pipe(
        scheduler,
        schedule(pipeLazy("resume", dispatchTo(generateStream)), {
          delay: 4,
        }),
      );

      pipe(
        scheduler,
        schedule(pipeLazy(generateStream, dispose()), { delay: 5 }),
      );

      const f = mockFn();
      const subscription = pipe(
        generateStream,
        forEach(x => {
          f(getCurrentTime(scheduler), x);
        }),
        subscribe(scheduler),
      );

      pipe(scheduler, run);

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(f.calls[0][1], expectEquals(0));
      pipe(f.calls[1][1], expectEquals(1));
      pipe(f.calls[2][1], expectEquals(2));

      pipe(subscription, isDisposed, expectTrue);
    }),
  ),
);

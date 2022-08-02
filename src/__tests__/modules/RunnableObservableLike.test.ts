import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  expectTrue,
  mockFn,
  test,
} from "../../__internal__/testing";
import { concatMap, throws } from "../../containers/ContainerLike";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import { increment, pipe, pipeLazy, raise, returns } from "../../functions";
import {
  RunnableObservableLike,
  emptyObservable,
  generateObservable,
} from "../../rx";
import { subscribe, takeUntil } from "../../rx/ObservableLike";
import {
  forEach,
  mapT,
  merge,
  switchAll,
  switchAllT,
  toFlowable,
  toReadonlyArray,
} from "../../rx/RunnableObservableLike";
import { createVirtualTimeScheduler } from "../../scheduling";
import { dispatch, dispatchTo } from "../../scheduling/DispatcherLike";
import { getCurrentTime, schedule } from "../../scheduling/SchedulerLike";
import { stream } from "../../streaming/StreamableLike";
import { run } from "../../util/ContinuationLike";
import { dispose, isDisposed } from "../../util/DisposableLike";

export const RunnableObservableLikeTests = describe(
  "RunnableObservableLike",
  describe(
    "merge",
    test(
      "two arrays",
      pipeLazy(
        merge(
          pipe([0, 2, 3, 5, 6], toObservable({ delay: 1, delayStart: true })),
          pipe([1, 4, 7], toObservable({ delay: 2, delayStart: true })),
        ),
        toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test(
      "when one source throws",
      pipeLazy(
        pipeLazy(
          merge(
            pipe([1, 4, 7], toObservable({ delay: 2 })),
            throws({ fromArray: toObservable, ...mapT }, { delay: 5 })(raise),
          ),
          toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),
  ),
  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        emptyObservable(),
        switchAll(),
        toReadonlyArray(),
        expectArrayEquals([] as unknown[]),
      ),
    ),

    test(
      "when source throw",
      pipeLazy(
        pipeLazy(
          raise,
          throws({ fromArray: toObservable, ...mapT }),
          switchAll(),
          toReadonlyArray(),
        ),
        expectToThrow,
      ),
    ),

    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        toObservable({ delay: 1 }),
        concatMap<RunnableObservableLike, number, number>(
          { ...switchAllT, ...mapT },
          _ => pipe([1, 2, 3], toObservable()),
        ),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),

    test(
      "overlapping notification",
      pipeLazy(
        [1, 2, 3],
        toObservable({ delay: 4 }),
        concatMap<RunnableObservableLike, number, number>(
          { ...switchAllT, ...mapT },
          _ => pipe([1, 2, 3], toObservable({ delay: 2 })),
        ),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
      ),
    ),
  ),
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

      run(scheduler);

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(f.calls[0][1], expectEquals(0));
      pipe(f.calls[1][1], expectEquals(1));
      pipe(f.calls[2][1], expectEquals(2));

      pipe(subscription, isDisposed, expectTrue);
    }),
  ),
);

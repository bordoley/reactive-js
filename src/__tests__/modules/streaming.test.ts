import {
  describe,
  expectEquals,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../../__internal__/testing";
import { increment, pipe, pipeLazy, returns } from "../../functions";
import { generateObservable } from "../../rx";
import { forEach, subscribe } from "../../rx/ObservableLike";
import { createVirtualTimeScheduler } from "../../scheduling";
import { dispatch, dispatchTo } from "../../scheduling/DispatcherLike";
import { getCurrentTime, schedule } from "../../scheduling/SchedulerLike";
import { flow } from "../../streaming";
import { stream } from "../../streaming/StreamableLike";
import { run } from "../../util/ContinuationLike";
import { dispose, isDisposed } from "../../util/DisposableLike";

export const streamingTests = describe(
  "streaming",

  describe(
    "flow",
    test("flow a generating source", () => {
      const scheduler = createVirtualTimeScheduler();

      const generateStream = pipe(
        generateObservable(increment, returns(-1), {
          delay: 1,
          delayStart: true,
        }),
        flow(),
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
        forEach<number>(x => {
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

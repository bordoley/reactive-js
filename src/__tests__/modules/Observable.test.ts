import { throws } from "../../containers/Container";
import { toRunnableObservable } from "../../containers/ReadonlyArray";
import {
  arrayEquality,
  increment,
  incrementBy,
  newInstance,
  pipe,
  pipeLazy,
  raise,
  returns,
  sum,
} from "../../functions";
import { ObservableLike } from "../../rx";
import {
  combineLatest,
  concat,
  empty,
  forEach,
  fromArray,
  generate,
  map,
  onSubscribe,
  retry,
  share,
  subscribe,
  takeFirst,
  takeUntil,
  throttle,
  timeout,
  toFlowable,
  toReadonlyArray,
  withLatestFrom,
  zip,
  zipLatest,
  zipWithLatestFrom,
} from "../../rx/Observable";
import { run } from "../../scheduling/Continuation";
import { dispatch, dispatchTo } from "../../scheduling/Dispatcher";
import { getCurrentTime, schedule } from "../../scheduling/Scheduler";
import { create as createVirtualTimeScheduler } from "../../scheduling/VirtualTimeScheduler";
import { FlowMode_pause, FlowMode_resume } from "../../streaming";
import { stream } from "../../streaming/Streamable";
import { dispose, getError, isDisposed } from "../../util/Disposable";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsSome,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  expectToThrowError,
  expectTrue,
  mockFn,
  test,
  testModule,
} from "../testing";

const combineLatestTests = describe(
  "combineLatest",
  test(
    "combineLatest",
    pipeLazy(
      combineLatest(
        pipe(
          generate(incrementBy(2), returns(1), { delay: 2 }),
          takeFirst({ count: 3 }),
        ),
        pipe(
          generate(incrementBy(2), returns(0), { delay: 3 }),
          takeFirst({ count: 2 }),
        ),
      ),
      toReadonlyArray(),
      expectArrayEquals(
        [[3, 2] as readonly [number, number], [5, 2], [5, 4], [7, 4]],
        arrayEquality(),
      ),
    ),
  ),
);

const onSubscribeTests = describe(
  "onSubscribe",
  test("when subscribe function returns a teardown function", () => {
    const scheduler = createVirtualTimeScheduler();

    const disp = mockFn();
    const f = mockFn(disp);

    pipe([1], toRunnableObservable(), onSubscribe(f), subscribe(scheduler));

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
      toRunnableObservable(),
      onSubscribe(raise),
      subscribe(scheduler),
    );

    pipe(subscription, getError, expectIsSome);
  }),
);

const retryTests = describe(
  "retry",
  test(
    "repeats the observable n times",
    pipeLazy(
      concat(
        pipe([1, 2, 3], toRunnableObservable()),
        pipe(
          raise,
          throws<ObservableLike, number>({
            fromArray,
            map,
          }),
        ),
      ),
      retry(),
      takeFirst({ count: 6 }),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3]),
    ),
  ),
);

const shareTests = describe(
  "share",
  test("shared observable zipped with itself", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe(
      [1, 2, 3],
      toRunnableObservable({ delay: 1 }),
      share(scheduler, { replay: 1 }),
    );

    let result: number[] = [];
    pipe(
      zip(shared, shared),
      map<[number, number], number>(([a, b]) => a + b),
      forEach<number>(x => {
        result.push(x);
      }),
      subscribe(scheduler),
    );

    run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));
  }),
);

const takeUntilTests = describe(
  "takeUntil",
  test(
    "takes until the notifier notifies its first notification",
    pipeLazy(
      [1, 2, 3, 4, 5],
      toRunnableObservable({ delay: 1 }),
      takeUntil(
        pipe([1], toRunnableObservable({ delay: 3, delayStart: true })),
      ),
      toReadonlyArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
);

const timeoutTests = describe(
  "timeout",
  test(
    "throws when a timeout occurs",
    pipeLazy(
      pipeLazy(
        [1],
        toRunnableObservable({ delay: 2, delayStart: true }),
        timeout(1),
        toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when timeout is greater than observed time",
    pipeLazy(
      [1],
      toRunnableObservable({ delay: 2, delayStart: true }),
      timeout(3),
      toReadonlyArray(),
      expectArrayEquals([1]),
    ),
  ),
);

const throttleTests = describe(
  "throttle",
  test(
    "first",
    pipeLazy(
      generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      takeFirst({ count: 100 }),
      throttle(50, { mode: "first" }),
      toReadonlyArray(),
      expectArrayEquals([0, 49, 99]),
    ),
  ),

  test(
    "last",
    pipeLazy(
      generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      takeFirst({ count: 200 }),
      throttle(50, { mode: "last" }),
      toReadonlyArray(),
      expectArrayEquals([49, 99, 149, 199]),
    ),
  ),

  test(
    "interval",
    pipeLazy(
      generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      takeFirst({ count: 200 }),
      throttle(75, { mode: "interval" }),
      toReadonlyArray(),
      expectArrayEquals([0, 74, 149, 199]),
    ),
  ),

  /*
  test(
    "when duration observable throws",
    pipeLazy(
      pipeLazy(
        [1, 2, 3, 4, 5],
        fromArray({ delay: 1 }),
        throttle(_ => throws({ fromArray, mapT })(raise)),
        toRunnable(),
        last(),
      ),
      expectToThrow,
    ),
  ),*/
);

const toFlowableTests = describe(
  "toFlowable",
  test("flow a generating source", () => {
    const scheduler = createVirtualTimeScheduler();

    const generateStream = pipe(
      generate(increment, returns(-1), {
        delay: 1,
        delayStart: true,
      }),
      toFlowable(),
      stream(scheduler),
    );

    pipe(generateStream, dispatch(FlowMode_resume));

    pipe(
      scheduler,
      schedule(pipeLazy(FlowMode_pause, dispatchTo(generateStream)), {
        delay: 2,
      }),
    );

    pipe(
      scheduler,
      schedule(pipeLazy(FlowMode_resume, dispatchTo(generateStream)), {
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
);

const withLatestFromTest = describe(
  "withLatestFrom",
  test(
    "when source and latest are interlaced",
    pipeLazy(
      [0, 1, 2, 3],
      toRunnableObservable({ delay: 1 }),
      withLatestFrom(
        pipe([0, 1, 2, 3], toRunnableObservable({ delay: 2 })),
        (a, b) => [a, b],
      ),
      toReadonlyArray(),
      expectArrayEquals(
        [
          [0, 0],
          [1, 0],
          [2, 1],
          [3, 1],
        ],
        arrayEquality(),
      ),
    ),
  ),
  test(
    "when latest produces no values",
    pipeLazy(
      [0],
      toRunnableObservable({ delay: 1 }),
      withLatestFrom(empty(), sum),
      toReadonlyArray(),
      expectArrayEquals([] as number[]),
    ),
  ),
  test("when latest throws", () => {
    const error = newInstance(Error);

    pipe(
      pipeLazy(
        [0],
        toRunnableObservable({ delay: 1 }),
        withLatestFrom(throws({ fromArray, map })(returns(error)), sum),
        toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
      expectToThrowError(error),
    );
  }),
);

const zipLatestTests = describe(
  "zipLatest",
  test(
    "zipLatestWith",
    pipeLazy(
      zipLatest(
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8],
          toRunnableObservable({ delay: 1, delayStart: true }),
        ),
        pipe(
          [1, 2, 3, 4],
          toRunnableObservable({ delay: 2, delayStart: true }),
        ),
      ),
      map<[number, number], number>(([a, b]) => a + b),
      toReadonlyArray(),
      expectArrayEquals([2, 5, 8, 11]),
    ),
  ),
);

const zipWithLatestTests = describe(
  "zipWithLatestFrom",
  test(
    "when source throws",
    pipeLazy(
      pipeLazy(
        throws({ fromArray, map })(raise),
        zipWithLatestFrom(pipe([1], toRunnableObservable()), (_, b) => b),
        toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other throws",
    pipeLazy(
      pipeLazy(
        [1, 2, 3],
        toRunnableObservable({ delay: 1 }),
        zipWithLatestFrom(throws({ fromArray, map })(raise), (_, b) => b),
        toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other completes first",
    pipeLazy(
      [1, 2, 3],
      toRunnableObservable({ delay: 2 }),
      zipWithLatestFrom(
        pipe([2, 4], toRunnableObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      toReadonlyArray(),
      expectArrayEquals([3, 6]),
    ),
  ),

  test(
    "when this completes first",
    pipeLazy(
      [1, 2, 3],
      toRunnableObservable({ delay: 2 }),
      zipWithLatestFrom(
        pipe([2, 4, 6, 8], toRunnableObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      toReadonlyArray(),
      expectArrayEquals([3, 6, 11]),
    ),
  ),
);

testModule(
  "Observable",
  combineLatestTests,
  onSubscribeTests,
  retryTests,
  shareTests,
  takeUntilTests,
  throttleTests,
  timeoutTests,
  toFlowableTests,
  withLatestFromTest,
  zipLatestTests,
  zipWithLatestTests,
);

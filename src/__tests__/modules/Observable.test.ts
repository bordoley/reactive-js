import Container from "../../containers/Container";
import ReadonlyArray from "../../containers/ReadonlyArray";
import {
  arrayEquality,
  increment,
  isSome,
  newInstance,
  pipe,
  pipeLazy,
  raise,
  returns,
  sum,
} from "../../functions";
import { ObservableLike, RunnableObservableLike } from "../../rx";
import Observable from "../../rx/Observable";
import { __await, __memo } from "../../rx/Observable/effects";
import RunnableObservable from "../../rx/RunnableObservable";
import Continuation from "../../scheduling/Continuation";
import Dispatcher from "../../scheduling/Dispatcher";
import Scheduler from "../../scheduling/Scheduler";
import VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler";
import { FlowMode_pause, FlowMode_resume } from "../../streaming";
import Streamable from "../../streaming/Streamable";
import Disposable from "../../util/Disposable";
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

const onSubscribeTests = describe(
  "onSubscribe",
  test("when subscribe function returns a teardown function", () => {
    const scheduler = VirtualTimeScheduler.create();

    const disp = mockFn();
    const f = mockFn(disp);

    pipe(
      [1],
      ReadonlyArray.toObservable(),
      Observable.onSubscribe(f),
      Observable.subscribe(scheduler),
    );

    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));

    Continuation.run(scheduler);

    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
  }),

  test("when callback function throws", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subscription = pipe(
      [1],
      ReadonlyArray.toObservable(),
      Observable.onSubscribe(raise),
      Observable.subscribe(scheduler),
    );

    pipe(subscription, Disposable.getError, expectIsSome);
  }),
);

const retryTests = describe(
  "retry",
  test(
    "repeats the observable n times",
    pipeLazy(
      Observable.concat(
        pipe([1, 2, 3], ReadonlyArray.toObservable()),
        pipe(raise, Container.throws<ObservableLike, number>(Observable)),
      ),
      Observable.retry(),
      Observable.takeFirst({ count: 6 }),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 1, 2, 3]),
    ),
  ),
);

const shareTests = describe(
  "share",
  test("shared observable zipped with itself", () => {
    const scheduler = VirtualTimeScheduler.create();
    const shared = pipe(
      [1, 2, 3],
      ReadonlyArray.toObservable({ delay: 1 }),
      Observable.share(scheduler, { replay: 1 }),
    );

    let result: number[] = [];
    pipe(
      Observable.zip(shared, shared),
      Observable.map<[number, number], number>(([a, b]) => a + b),
      Observable.forEach<number>(x => {
        result.push(x);
      }),
      Observable.subscribe(scheduler),
    );

    Continuation.run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));
  }),
);

const takeUntilTests = describe(
  "takeUntil",
  test(
    "takes until the notifier notifies its first notification",
    pipeLazy(
      [1, 2, 3, 4, 5],
      ReadonlyArray.toObservable({ delay: 1 }),
      Observable.takeUntil(
        pipe([1], ReadonlyArray.toObservable({ delay: 3, delayStart: true })),
      ),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
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
        ReadonlyArray.toObservable({ delay: 2, delayStart: true }),
        Observable.timeout(1),
        (x): RunnableObservableLike<number> =>
          Observable.isRunnable(x) ? x : RunnableObservable.empty(),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when timeout is greater than observed time",
    pipeLazy(
      [1],
      ReadonlyArray.toObservable({ delay: 2, delayStart: true }),
      Observable.timeout(3),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([1]),
    ),
  ),
);

const throttleTests = describe(
  "throttle",
  test(
    "first",
    pipeLazy(
      Observable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      Observable.takeFirst({ count: 100 }),
      Observable.throttle(50, { mode: "first" }),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([0, 49, 99]),
    ),
  ),

  test(
    "last",
    pipeLazy(
      Observable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      Observable.takeFirst({ count: 200 }),
      Observable.throttle(50, { mode: "last" }),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([49, 99, 149, 199]),
    ),
  ),

  test(
    "interval",
    pipeLazy(
      Observable.generate(increment, returns<number>(-1), {
        delay: 1,
        delayStart: true,
      }),
      Observable.takeFirst({ count: 200 }),
      Observable.throttle(75, { mode: "interval" }),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
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
    const scheduler = VirtualTimeScheduler.create();

    const generateStream = pipe(
      Observable.generate(increment, returns(-1), {
        delay: 1,
        delayStart: true,
      }),
      Observable.toFlowable(),
      Streamable.stream(scheduler),
    );

    pipe(generateStream, Dispatcher.dispatch(FlowMode_resume));

    pipe(
      scheduler,
      Scheduler.schedule(
        pipeLazy(FlowMode_pause, Dispatcher.dispatchTo(generateStream)),
        {
          delay: 2,
        },
      ),
    );

    pipe(
      scheduler,
      Scheduler.schedule(
        pipeLazy(FlowMode_resume, Dispatcher.dispatchTo(generateStream)),
        {
          delay: 4,
        },
      ),
    );

    pipe(
      scheduler,
      Scheduler.schedule(pipeLazy(generateStream, Disposable.dispose()), {
        delay: 5,
      }),
    );

    const f = mockFn();
    const subscription = pipe(
      generateStream,
      Observable.forEach<number>(x => {
        f(Scheduler.getCurrentTime(scheduler), x);
      }),
      Observable.subscribe(scheduler),
    );

    Continuation.run(scheduler);

    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));

    pipe(subscription, Disposable.isDisposed, expectTrue);
  }),
);

const withLatestFromTest = describe(
  "withLatestFrom",
  test(
    "when source and latest are interlaced",
    pipeLazy(
      [0, 1, 2, 3],
      ReadonlyArray.toObservable({ delay: 1 }),
      Observable.withLatestFrom(
        pipe([0, 1, 2, 3], ReadonlyArray.toObservable({ delay: 2 })),
        (a, b) => [a, b],
      ),
      (x): RunnableObservableLike<[number, number]> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
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
      ReadonlyArray.toObservable({ delay: 1 }),
      Observable.withLatestFrom(Observable.empty(), sum),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([] as number[]),
    ),
  ),
  test("when latest throws", () => {
    const error = newInstance(Error);

    pipe(
      pipeLazy(
        [0],
        ReadonlyArray.toObservable({ delay: 1 }),
        Observable.withLatestFrom(
          Container.throws(Observable)(returns(error)),
          sum,
        ),
        (x): RunnableObservableLike<number> =>
          Observable.isRunnable(x) ? x : RunnableObservable.empty(),
        RunnableObservable.toReadonlyArray(),
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
      Observable.zipLatest(
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8],
          ReadonlyArray.toObservable({ delay: 1, delayStart: true }),
        ),
        pipe(
          [1, 2, 3, 4],
          ReadonlyArray.toObservable({ delay: 2, delayStart: true }),
        ),
      ),
      Observable.map<[number, number], number>(([a, b]) => a + b),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
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
        Container.throws(Observable)(raise),
        Observable.zipWithLatestFrom(
          pipe([1], ReadonlyArray.toObservable()),
          (_, b) => b,
        ),
        (x): RunnableObservableLike<number> =>
          Observable.isRunnable(x) ? x : RunnableObservable.empty(),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other throws",
    pipeLazy(
      pipeLazy(
        [1, 2, 3],
        ReadonlyArray.toObservable({ delay: 1 }),
        Observable.zipWithLatestFrom(
          Container.throws(Observable)(raise),
          (_, b) => b,
        ),
        (x): RunnableObservableLike<number> =>
          Observable.isRunnable(x) ? x : RunnableObservable.empty(),
        RunnableObservable.toReadonlyArray(),
      ),
      expectToThrow,
    ),
  ),

  test(
    "when other completes first",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toObservable({ delay: 2 }),
      Observable.zipWithLatestFrom(
        pipe([2, 4], ReadonlyArray.toObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([3, 6]),
    ),
  ),

  test(
    "when this completes first",
    pipeLazy(
      [1, 2, 3],
      ReadonlyArray.toObservable({ delay: 2 }),
      Observable.zipWithLatestFrom(
        pipe([2, 4, 6, 8], ReadonlyArray.toObservable({ delay: 1 })),
        (a, b) => a + b,
      ),
      (x): RunnableObservableLike<number> =>
        Observable.isRunnable(x) ? x : RunnableObservable.empty(),
      RunnableObservable.toReadonlyArray(),
      expectArrayEquals([3, 6, 11]),
    ),
  ),
);

const asyncTests = describe(
  "async",
  test("batch mode", () => {
    const scheduler = VirtualTimeScheduler.create();

    const fromValueWithDelay = (
      delay: number,
      value: number,
    ): ObservableLike<number> => pipe([value], Observable.fromArray({ delay }));

    let result = -1;

    pipe(
      Observable.async(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);

        return result1 + result2 + result3;
      }),
      Observable.takeLast<number>(),
      Observable.forEach<number>(v => {
        result = v;
      }),
      Observable.subscribe(scheduler),
    );

    Continuation.run(scheduler);

    pipe(result, expectEquals(22));
  }),
  test("combined-latest mode", () => {
    const scheduler = VirtualTimeScheduler.create();

    const oneTwoThreeDelayed = pipe(
      [1, 2, 3],
      Observable.fromArray({ delay: 1 }),
    );
    const createOneTwoThree = (_: unknown) =>
      pipe([1, 2, 3], Observable.fromArray());

    const result: number[] = [];

    pipe(
      Observable.async(
        () => {
          const v = __await(oneTwoThreeDelayed);
          const next = __memo(createOneTwoThree, v);
          return __await(next);
        },
        { mode: "combine-latest" },
      ),
      Container.keepType(Observable, isSome),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      Observable.subscribe(scheduler),
    );

    Continuation.run(scheduler);

    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
  }),
  test("conditional hooks", () => {
    const scheduler = VirtualTimeScheduler.create();

    const src = pipe([0, 1, 2, 3, 4, 5], Observable.fromArray({ delay: 5 }));
    const src2 = Observable.generate(increment, returns(100), {
      delay: 2,
      delayStart: false,
    });

    const result: number[] = [];

    pipe(
      Observable.async(() => {
        const v = __await(src);

        if (v % 2 === 0) {
          __memo(increment, 1);
          return __await(src2);
        }
        return v;
      }),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      Observable.subscribe(scheduler),
    );

    Continuation.run(scheduler);

    pipe(
      result,
      expectArrayEquals([101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5]),
    );
  }),
);

testModule(
  "Observable",
  asyncTests,
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

import Container from "../../containers/Container";
import ReadonlyArray from "../../containers/ReadonlyArray";
import {
  increment,
  isSome,
  pipe,
  pipeLazy,
  raise,
  returns,
} from "../../functions";
import { ObservableLike } from "../../rx";
import Observable from "../../rx/Observable";
import { __await, __memo } from "../../rx/Observable/effects";
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
  shareTests,
  toFlowableTests,
);

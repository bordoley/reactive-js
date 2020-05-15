import {
  decodeWithCharset,
  empty,
  encodeUtf8,
  fromValue,
  FlowMode,
  FlowEventType,
  fromObservable,
  map,
} from "../lib/flowable.ts";
import { createFlowableSinkAccumulator } from "../lib/internal/flowableSinkAccumulatorForTests.ts";
import { increment, pipe, returns, sum, bind } from "../lib/functions.ts";
import {
  onNotify,
  subscribe,
  generate,
  fromArray,
  dispatch,
} from "../lib/observable.ts";
import { createVirtualTimeScheduler, schedule } from "../lib/scheduler.ts";
import {
  test,
  describe,
  expectEquals,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
} from "../lib/internal/testing.ts";
import { sink, stream } from "../lib/streamable.ts";
import { dispose } from "../lib/disposable.ts";

export const tests = describe(
  "flowables",
  test("decodeWithCharset", () => {
    const lib = pipe(
      [Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])],
      fromArray(),
      fromObservable,
      decodeWithCharset(),
    );
    const dest = createFlowableSinkAccumulator(
      (acc: string, next: string) => acc + next,
      returns(""),
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.continue();

    pipe(dest.acc, expectEquals(String.fromCodePoint(8364)));
    expectTrue(subscription.isDisposed);
  }),
  test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = stream(empty(), scheduler);

    dispatch(emptyStream, FlowMode.Pause);
    dispatch(emptyStream, FlowMode.Resume);

    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.continue();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0].type, expectEquals(FlowEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
  }),
  test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";

    const lib = pipe(str, fromValue(), encodeUtf8, decodeWithCharset());
    const dest = createFlowableSinkAccumulator(
      (acc: string, next: string) => acc + next,
      returns(""),
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.continue();

    pipe(dest.acc, expectEquals(str));
    expectTrue(subscription.isDisposed);
  }),
  test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = stream(
      pipe(generate(increment, returns(-1), { delay: 1 }), fromObservable),
      scheduler,
    );

    dispatch(generateStream, FlowMode.Resume);

    schedule(scheduler, bind(dispatch, generateStream, FlowMode.Pause), {
      delay: 2,
    });
    schedule(scheduler, bind(dispatch, generateStream, FlowMode.Resume), {
      delay: 4,
    });
    schedule(scheduler, bind(dispose, generateStream), { delay: 5 });

    const f = mockFn();
    const subscription = pipe(
      generateStream,
      onNotify(x => {
        f(scheduler.now, x);
      }),
      subscribe(scheduler),
    );

    scheduler.continue();

    pipe(f, expectToHaveBeenCalledTimes(4));
    pipe(f.calls[0][1].type, expectEquals(FlowEventType.Next));
    pipe(f.calls[0][1].data, expectEquals(0));
    pipe(f.calls[1][1].type, expectEquals(FlowEventType.Next));
    pipe(f.calls[1][1].data, expectEquals(1));
    pipe(f.calls[2][1].type, expectEquals(FlowEventType.Next));
    pipe(f.calls[2][1].data, expectEquals(2));
    pipe(f.calls[3][1].type, expectEquals(FlowEventType.Complete));

    expectTrue(subscription.isDisposed);
  }),
  test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = stream(fromValue()(1), scheduler);

    dispatch(fromValueStream, FlowMode.Pause);
    dispatch(fromValueStream, FlowMode.Pause);
    dispatch(fromValueStream, FlowMode.Resume);
    dispatch(fromValueStream, FlowMode.Resume);
    dispatch(fromValueStream, FlowMode.Pause);

    const f = mockFn();
    const subscription = pipe(
      fromValueStream,
      onNotify(f),
      subscribe(scheduler),
    );

    scheduler.continue();

    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals(FlowEventType.Next));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals(FlowEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
  }),
  test("map", () => {
    const lib = pipe(
      1,
      fromValue(),
      map(_ => 2),
    );
    const dest = createFlowableSinkAccumulator(sum, returns(0));

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.continue();

    pipe(dest.acc, expectEquals(2));
    expectTrue(subscription.isDisposed);
  }),
);

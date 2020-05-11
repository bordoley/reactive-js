import {
  decodeWithCharset,
  empty,
  encodeUtf8,
  fromValue,
  FlowMode,
  FlowEventType,
  fromObservable,
  map,
  createFlowableSinkAccumulator,
} from "../src/flowable";
import { increment, pipe, returns, sum } from "../src/functions";
import { onNotify, subscribe, generate, fromArray } from "../src/observable";
import { createVirtualTimeScheduler, schedule } from "../src/scheduler";
import {
  test,
  describe,
  expectEquals,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
} from "../src/internal/testing";
import { sink } from "../src/streamable";

export const tests = describe(
  "flowables",
  test("decodeWithCharset", () => {
    const src = pipe(
      [Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])],
      fromArray(),
      fromObservable,
      decodeWithCharset(),
    );
    const dest = createFlowableSinkAccumulator(
      (acc: string, next: string) => acc + next,
      () => "",
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    scheduler.run();

    pipe(dest.acc, expectEquals(String.fromCodePoint(8364)));
    expectTrue(subscription.isDisposed);
  }),
  test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const stream = empty().stream(scheduler);

    stream.dispatch(FlowMode.Pause);
    stream.dispatch(FlowMode.Resume);

    const f = mockFn();
    const subscription = pipe(stream, onNotify(f), subscribe(scheduler));
    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0].type, expectEquals(FlowEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(stream.isDisposed);
  }),
  test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";

    const src = pipe(str, fromValue, encodeUtf8, decodeWithCharset());
    const dest = createFlowableSinkAccumulator(
      (acc: string, next: string) => acc + next,
      returns(""),
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    scheduler.run();

    pipe(dest.acc, expectEquals(str));
    expectTrue(subscription.isDisposed);
  }),
  test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const stream = pipe(
      generate(increment, returns(0), { delay: 1 }),
      fromObservable,
    ).stream(scheduler);

    stream.dispatch(FlowMode.Resume);

    pipe(
      scheduler,
      schedule(
        _ => {
          stream.dispatch(FlowMode.Pause);
        },
        { delay: 2 },
      ),
    );

    pipe(
      scheduler,
      schedule(
        _ => {
          stream.dispatch(FlowMode.Resume);
        },
        { delay: 4 },
      ),
    );

    pipe(
      scheduler,
      schedule(
        _ => {
          stream.dispose();
        },
        { delay: 5 },
      ),
    );

    const f = mockFn();
    const subscription = pipe(
      stream,
      onNotify(x => {
        f(scheduler.now, x);
      }),
      subscribe(scheduler),
    );

    scheduler.run();

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
    const stream = fromValue(1).stream(scheduler);

    stream.dispatch(FlowMode.Pause);
    stream.dispatch(FlowMode.Pause);
    stream.dispatch(FlowMode.Resume);
    stream.dispatch(FlowMode.Resume);
    stream.dispatch(FlowMode.Pause);

    const f = mockFn();
    const subscription = pipe(stream, onNotify(f), subscribe(scheduler));

    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals(FlowEventType.Next));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals(FlowEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(stream.isDisposed);
  }),
  test("map", () => {
    const src = pipe(
      fromValue(1),
      map(_ => 2),
    );
    const dest = createFlowableSinkAccumulator(
      sum,
      returns(0),
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    scheduler.run();

    pipe(dest.acc, expectEquals(2));
    expectTrue(subscription.isDisposed);
  }),
);

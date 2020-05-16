import {
  decodeWithCharset,
  empty,
  encodeUtf8,
  fromArray,
  fromValue,
  IOEventType,
  map,
} from "../lib/io";
import { FlowMode } from "../lib/flowable";
import { createIOSinkAccumulator } from "../lib/internal/ioSinkAccumulatorForTests";
import { pipe, returns, sum } from "../lib/functions";
import {
  onNotify,
  subscribe,
  dispatch,
} from "../lib/observable";
import { createVirtualTimeScheduler } from "../lib/scheduler";
import {
  test,
  describe,
  expectEquals,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
} from "../lib/internal/testing";
import { sink, stream } from "../lib/streamable";

export const tests = describe(
  "flowables",
  test("decodeWithCharset", () => {
    const lib = pipe(
      [Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])],
      fromArray(),
      decodeWithCharset(),
    );
    const dest = createIOSinkAccumulator(
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
    pipe(f.calls[0][0].type, expectEquals(IOEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
  }),
  test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";

    const lib = pipe(str, fromValue(), encodeUtf8, decodeWithCharset());
    const dest = createIOSinkAccumulator(
      (acc: string, next: string) => acc + next,
      returns(""),
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.continue();

    pipe(dest.acc, expectEquals(str));
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
    pipe(f.calls[0][0].type, expectEquals(IOEventType.Next));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals(IOEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
  }),
  test("map", () => {
    const lib = pipe(
      1,
      fromValue(),
      map(_ => 2),
    );
    const dest = createIOSinkAccumulator(sum, returns(0));

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(lib, dest), subscribe(scheduler));
    scheduler.continue();

    pipe(dest.acc, expectEquals(2));
    expectTrue(subscription.isDisposed);
  }),
);

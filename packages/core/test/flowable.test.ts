import {
  decodeWithCharset,
  empty,
  encodeUtf8,
  fromValue,
  FlowMode,
  FlowEventType,
} from "../src/flowable";
import { pipe, } from "../src/functions";
import { onNotify, scan, subscribe } from "../src/observable";
import { createVirtualTimeScheduler } from "../src/scheduler";
import {
  test,
  describe,
  expectEquals,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
} from "../src/testing";

export const tests = describe(
  "flowables",
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
    const scheduler = createVirtualTimeScheduler();

    const transformed = pipe(
      str,
      fromValue,
      encodeUtf8,
      decodeWithCharset(),
    ).stream(scheduler);

    let result = "";
    const subscription = pipe(
      transformed,
      scan(
        (acc, ev) => (ev.type === FlowEventType.Next ? acc + ev.data : acc),
        () => "",
      ),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    transformed.dispatch(FlowMode.Resume);
    scheduler.run();

    pipe(result, expectEquals(str));
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
    pipe(f.calls[0][0].type, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals(FlowEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(stream.isDisposed);
  }),
);

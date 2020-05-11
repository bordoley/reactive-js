import {
  decodeWithCharset,
  empty,
  encodeUtf8,
  fromValue,
  FlowMode,
  FlowEventType,
  fromObservable,
  map,
} from "../src/flowable";
import { increment, pipe, returns } from "../src/functions";
import {
  onNotify,
  scan,
  subscribe,
  generate,
  fromArray,
} from "../src/observable";
import { createVirtualTimeScheduler, schedule } from "../src/scheduler";
import {
  test,
  describe,
  expectEquals,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
} from "../src/internal/testing";

export const tests = describe(
  "flowables",
  test("decodeWithCharset", () => {
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      [
        Uint8Array.from([226]),
        Uint8Array.from([130]),
        Uint8Array.from([172]),
      ],
      fromArray(),
      fromObservable,
      decodeWithCharset(),
    ).stream(scheduler);

    stream.dispatch(FlowMode.Resume);

    const f = mockFn();
    const subscription = pipe(stream, onNotify(f), subscribe(scheduler));

    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals(FlowEventType.Next));
    pipe(f.calls[0][0].data, expectEquals(String.fromCodePoint(8364)));    
    expectTrue(subscription.isDisposed);
    expectTrue(stream.isDisposed);
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
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      str,
      fromValue,
      encodeUtf8,
      decodeWithCharset(),
    ).stream(scheduler);

    let result = "";
    const subscription = pipe(
      stream,
      scan(
        (acc, ev) => (ev.type === FlowEventType.Next ? acc + ev.data : acc),
        () => "",
      ),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    stream.dispatch(FlowMode.Resume);
    scheduler.run();

    pipe(result, expectEquals(str));
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
          debugger;
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
    const scheduler = createVirtualTimeScheduler();
    const stream = pipe(
      fromValue(1),
      map(_ => 2),
    ).stream(scheduler);

    stream.dispatch(FlowMode.Resume);

    const f = mockFn();
    const subscription = pipe(stream, onNotify(f), subscribe(scheduler));

    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals(FlowEventType.Next));
    pipe(f.calls[0][0].data, expectEquals(2));
    pipe(f.calls[1][0].type, expectEquals(FlowEventType.Complete));
    expectTrue(subscription.isDisposed);
    expectTrue(stream.isDisposed);
  }),
);

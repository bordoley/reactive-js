import { pipe, returns, sum } from "../functions";
import {
  createIOSinkAccumulator,
  decodeWithCharset,
  empty,
  encodeUtf8,
  fromArray,
  fromValue,
  map,
} from "../io";
import { subscribe } from "../observable";
import { none } from "../option";
import { createVirtualTimeScheduler } from "../scheduler";
import { sink, stream } from "../streamable";
import {
  describe,
  expectEquals,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../testing";

export const tests = describe(
  "io",
  test("decodeWithCharset", () => {
    const src = pipe(
      [Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])],
      fromArray(),
      decodeWithCharset(),
    );
    const dest = createIOSinkAccumulator(
      (acc: string, next: string) => acc + next,
      returns(""),
      { replay: 1 },
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));

    const f = mockFn();
    pipe(dest, subscribe(scheduler, f));

    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(String.fromCodePoint(8364)));
    expectTrue(subscription.isDisposed);
  }),
  test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(none, empty, stream(scheduler));

    emptyStream.dispatch("pause");
    emptyStream.dispatch("resume");

    const f = mockFn();
    const subscription = pipe(emptyStream, subscribe(scheduler, f));
    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0].type, expectEquals("done"));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
  }),
  test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";

    const src = pipe(str, fromValue(), encodeUtf8, decodeWithCharset());
    const dest = createIOSinkAccumulator(
      (acc: string, next: string) => acc + next,
      returns(""),
      { replay: 1 },
    );

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));

    const f = mockFn();
    pipe(dest, subscribe(scheduler, f));
    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(str));
    expectTrue(subscription.isDisposed);
  }),
  test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue(), stream(scheduler));

    fromValueStream.dispatch("resume");

    const f = mockFn();
    const subscription = pipe(fromValueStream, subscribe(scheduler, f));

    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals("notify"));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals("done"));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
  }),
  test("map", () => {
    const src = pipe(1, fromValue(), map(returns(2)));
    const dest = createIOSinkAccumulator(sum, returns(0), { replay: 1 });

    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));

    const f = mockFn();
    pipe(dest, subscribe(scheduler, f));
    scheduler.run();

    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(2));
    expectTrue(subscription.isDisposed);
  }),
);

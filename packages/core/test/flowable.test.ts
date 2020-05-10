import { decodeWithCharset, encodeUtf8, fromValue, FlowMode, FlowEventType } from "../src/flowable";
import { pipe } from "../src/functions";
import { onNotify, scan, subscribe } from "../src/observable";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { test, describe, expectEquals, expectTrue } from "../src/testing";

export const tests = describe(
  "textEncoding",
  test("encode/decode", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const scheduler = createVirtualTimeScheduler();

    const transformed = pipe(str, fromValue, encodeUtf8, decodeWithCharset()).stream(
      scheduler,
    );

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
);

import { test, describe, expectEquals } from "../src/testing";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { pipe } from "../src/functions";
import { ofValue, FlowMode, FlowEventType } from "../src/flowable";
import { encode, decode } from "../src/textEncoding";
import { onNotify, scan, subscribe } from "../src/observable";

export const tests = describe(
  "textEncoding",
  test("encode/decode", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const scheduler = createVirtualTimeScheduler();

    const transformed = pipe(ofValue(str), encode, decode()).stream(scheduler);

    let result = "";
    pipe(
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
  }),
);

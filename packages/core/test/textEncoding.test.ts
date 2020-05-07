import { ofValue, FlowMode, FlowEventType } from "../src/flowable";
import { pipe } from "../src/functions";
import { onNotify, scan, subscribe } from "../src/observable";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { test, describe, expectEquals } from "../src/testing";
import { encode, decode } from "../src/textEncoding";

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

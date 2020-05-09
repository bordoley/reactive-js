import { pipe } from "../src/functions";
import { subscribe, onNotify, buffer } from "../src/observable";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { identity, map, mapReq } from "../src/streamable";
import { test, describe, expectArrayEquals } from "../src/testing";

export const tests = describe(
  "streamable",
  test("map", () => {
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      identity<number>(),
      map((x: number) => x + 100),
    ).stream(scheduler);

    stream.dispatch(10);
    stream.dispatch(20);
    stream.dispatch(30);
    stream.dispose();

    let result: readonly number[] = [];
    pipe(
      stream,
      buffer(),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([110, 120, 130]));
  }),

  test("mapReq", () => {
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      identity<number>(),
      mapReq<number, number, number>(x => x + 100),
      mapReq<number, string, number>(x => Number.parseInt(x)),
    ).stream(scheduler);

    stream.dispatch("10");
    stream.dispatch("20");
    stream.dispatch("30");
    stream.dispose();

    let result: readonly number[] = [];
    pipe(
      stream,
      buffer(),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    scheduler.run();

    pipe(result, expectArrayEquals([110, 120, 130]));
  }),
);

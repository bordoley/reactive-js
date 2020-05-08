import { pipe } from "../src/functions";
import { reduce, subscribe, onNotify, throwIfEmpty } from "../src/observable";
import { createVirtualTimeScheduler, schedule } from "../src/scheduler";
import { identity, mapReq, map } from "../src/streamable";
import { test, describe, expectArrayEquals } from "../src/testing";

export const tests = describe(
  "streamable",
  test("mapReq", () => {
    const scheduler = createVirtualTimeScheduler();

    const stream = pipe(
      identity<string>(),
      mapReq((x: number) => (x + 100).toLocaleString()),
      mapReq(({ val }: { val: number }) => val),
    ).stream(scheduler);

    stream.dispatch({ val: 10 });
    stream.dispatch({ val: 20 });
    stream.dispatch({ val: 30 });
    stream.dispose();

    pipe(
      scheduler,
      schedule(_ => {
        stream.dispose();
      }, 1),
    );

    pipe(
      stream,
      reduce(
        (acc, next) => [...acc, next],
        (): string[] => [],
      ),
      throwIfEmpty(() => new Error("empty")),
      onNotify(expectArrayEquals(["110", "120", "130"])),
      onNotify(console.log),
      subscribe(scheduler),
    );

    scheduler.run();
  }),
  test("map", () => {
    const scheduler = createVirtualTimeScheduler();

    const lifted = pipe(
      identity<number>(),
      map(x => x + 100),
      map(x => ({ x })),
    );

    const stream = lifted.stream(scheduler);

    const result: number[] = [];
    pipe(
      stream,
      onNotify(({ x }) => result.push(x)),
      subscribe(scheduler),
    );

    stream.dispatch(0);
    stream.dispatch(1);
    stream.dispatch(2);

    scheduler.run();

    pipe(result, expectArrayEquals([100, 101, 102]));
  }),
);

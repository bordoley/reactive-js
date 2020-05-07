import { pipe } from "../src/functions";
import { subscribe, onNotify } from "../src/observable";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { identity, mapReq, map } from "../src/streamable";
import { test, describe, expectArrayEquals } from "../src/testing";

export const tests = describe(
  "streamable",
  test("mapReq", () => {
    const scheduler = createVirtualTimeScheduler();

    const lifted = pipe(
      identity<string>(),
      mapReq((x: number) => (x + 100).toLocaleString()),
      mapReq(({ val }: { val: number }) => val),
    );

    const stream = lifted.stream(scheduler);

    const result: string[] = [];
    pipe(
      stream,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    stream.dispatch({ val: 10 });
    stream.dispatch({ val: 20 });
    stream.dispatch({ val: 30 });

    scheduler.run();

    pipe(result, expectArrayEquals(["110", "120", "130"]));
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

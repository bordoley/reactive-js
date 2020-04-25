import { subscribe, onNotify } from "../src/observable";
import { pipe } from "../src/pipe";
import { createVirtualTimeScheduler } from "../src/scheduler";
import { identity, liftReq, map } from "../src/streamable";

test("liftReq", () => {
  const scheduler = createVirtualTimeScheduler();

  const lifted = pipe(
    identity<string>(),
    liftReq((x: number) => (x + 100).toLocaleString()),
    liftReq(({ val }: { val: number }) => val),
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

  expect(result).toEqual(["110", "120", "130"]);
});

test("liftReq", () => {
  const scheduler = createVirtualTimeScheduler();

  const lifted = pipe(
    identity<number>(),
    map(x => x + 100),
    map(x => ({ x })),
  );

  const stream = lifted.stream(scheduler);

  const result: { x: number }[] = [];
  pipe(
    stream,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  stream.dispatch(0);
  stream.dispatch(1);
  stream.dispatch(2);

  scheduler.run();

  expect(result).toEqual([{ x: 100 }, { x: 101 }, { x: 102 }]);
});

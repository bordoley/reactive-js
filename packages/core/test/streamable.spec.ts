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

  const enumerator = lifted.stream(scheduler);

  const result: string[] = [];
  pipe(
    enumerator,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  enumerator.dispatch({ val: 10 });
  enumerator.dispatch({ val: 20 });
  enumerator.dispatch({ val: 30 });

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

  const enumerator = lifted.stream(scheduler);

  const result: { x: number }[] = [];
  pipe(
    enumerator,
    onNotify(x => result.push(x)),
    subscribe(scheduler),
  );

  enumerator.dispatch(0);
  enumerator.dispatch(1);
  enumerator.dispatch(2);

  scheduler.run();

  expect(result).toEqual([{ x: 100 }, { x: 101 }, { x: 102 }]);
});

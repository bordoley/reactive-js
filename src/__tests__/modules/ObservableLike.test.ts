import { describe, test } from "../../__internal__/testing";

export const ObservableLikeTests = describe(
  "ObservableLike",
  test("share", () => {
    /*
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe(
      [1, 2, 3],
      toObservable({ delay: 1 }),
      share(scheduler, { replay: 1 }),
    );

    let result: number[] = [];
    pipe(
      zip(shared, shared),
      map(([a, b]) => a + b),
      buffer(),
      forEach(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));*/
  }),
);

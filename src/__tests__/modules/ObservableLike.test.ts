import {
  describe,
  expectPromiseToThrow,
  testAsync,
} from "../../__internal__/testing";
import { pipe } from "../../functions";
import { emptyObservable } from "../../rx";
import { toPromise } from "../../rx/ObservableLike";
import { createHostScheduler } from "../../scheduling";
import { dispose } from "../../util/DisposableLike";

export const ObservableLikeTests = describe(
  "ObservableLike",
  describe(
    "toPromise",
    testAsync(
      "when observable completes without producing a value",
      async () => {
        const scheduler = createHostScheduler();
        try {
          await pipe(
            pipe(emptyObservable(), toPromise(scheduler)),
            expectPromiseToThrow,
          );
        } finally {
          pipe(scheduler, dispose());
        }
      },
    ),
  ),
  /*
  test("share", () => {
   
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
    pipe(result, expectArrayEquals([2, 4, 6]));
  }),*/
);

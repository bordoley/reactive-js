import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
} from "../../__internal__/testing";
import { toObservable } from "../../containers/PromiseableLike";
import { newInstance, pipe } from "../../functions";
import { toPromise } from "../../rx/ObservableLike";
import { createHostScheduler } from "../../scheduling";
import { dispose } from "../../util/DisposableLike";

export default describe(
  "PromiseableLike",
  describe(
    "toObservable",
    testAsync("when the promise resolves", async () => {
      const scheduler = createHostScheduler();

      const promise = Promise.resolve(1);

      try {
        const result = await pipe(
          promise,
          toObservable(),
          toPromise(scheduler),
        );
        pipe(result, expectEquals(1));
      } finally {
        pipe(scheduler, dispose());
      }
    }),
    testAsync("when the promise reject", async () => {
      const scheduler = createHostScheduler();

      const error = newInstance(Error);
      const promise = Promise.reject(error);

      try {
        await pipe(
          pipe(promise, toObservable(), toPromise(scheduler)),
          expectPromiseToThrow,
        );
      } finally {
        pipe(scheduler, dispose());
      }
    }),
  ),
);

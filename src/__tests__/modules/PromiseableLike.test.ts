import { toObservable } from "../../containers/PromiseableLike";
import { newInstance, pipe } from "../../functions";
import { toPromise } from "../../rx/ObservableLike";
import { createHostScheduler } from "../../scheduling/SchedulerLike";
import { dispose } from "../../util/DisposableLike";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../testing";

testModule(
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

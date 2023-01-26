import { toObservable } from "../../containers/Promiseable";
import { newInstance, pipe } from "../../functions";
import { toPromise } from "../../rx/Observable";
import { createHostScheduler } from "../../scheduling/Scheduler";
import { dispose } from "../../util/Disposable";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../testing";

testModule(
  "Promiseable",
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

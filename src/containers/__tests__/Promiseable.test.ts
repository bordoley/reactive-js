import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../__tests__/testing.js";
import { newInstance, pipe } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { DisposableLike_dispose } from "../../util.js";
import * as Promiseable from "../Promiseable.js";

testModule(
  "Promiseable",
  describe(
    "toObservable",
    testAsync("when the promise resolves", async () => {
      const scheduler = Scheduler.createHostScheduler();

      const promise = Promise.resolve(1);

      try {
        const result = await pipe(
          promise,
          Promiseable.toObservable(),
          Observable.toPromise(scheduler),
        );
        pipe(result, expectEquals(1));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
    testAsync("when the promise reject", async () => {
      const scheduler = Scheduler.createHostScheduler();

      const error = newInstance(Error);
      const promise = Promise.reject(error);

      try {
        await pipe(
          pipe(
            promise,
            Promiseable.toObservable(),
            Observable.toPromise(scheduler),
          ),
          expectPromiseToThrow,
        );
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
  ),
);

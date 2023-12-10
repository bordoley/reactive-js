import {
  describe,
  expectArrayEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { pipe, Optional, newInstance } from "../../functions.js";
import * as EventSource from "../EventSource.js";

testModule(
  "EventSource",
  describe(
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      const promise = Promise.resolve(1);

      const result = await pipe(
        promise,
        EventSource.fromPromise(),
        EventSource.toReadonlyArrayAsync(),
      );
      pipe(result, expectArrayEquals<Optional<number>>([1]));
    }),
    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const promise = Promise.reject(error);

      await pipe(
        pipe(
          promise,
          EventSource.fromPromise(),
          EventSource.toReadonlyArrayAsync(),
        ),
        expectPromiseToThrow,
      );
    }),
  ),
);

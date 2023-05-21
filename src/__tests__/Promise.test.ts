import * as EventSource from "../EventSource.js";
import * as Observable from "../Observable.js";
import * as PromiseT from "../Promise.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../__internal__/testing.js";
import { Optional, newInstance, pipe } from "../functions.js";

testModule(
  "Promise",
  describe(
    "toEventSource",
    testAsync("when the promise resolves", async () => {
      const promise = Promise.resolve(1);

      const result = await pipe(
        promise,
        PromiseT.toEventSource(),
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
          PromiseT.toEventSource(),
          EventSource.toReadonlyArrayAsync(),
        ),
        expectPromiseToThrow,
      );
    }),
  ),
  describe(
    "toObservable",
    testAsync("when the promise resolves", async () => {
      const promise = Promise.resolve(1);

      const result = await pipe(
        promise,
        PromiseT.toObservable(),
        Observable.lastAsync(),
      );
      pipe(result, expectEquals<Optional<number>>(1));
    }),
    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const promise = Promise.reject(error);

      await pipe(
        pipe(promise, PromiseT.toObservable(), Observable.lastAsync()),
        expectPromiseToThrow,
      );
    }),
  ),
  describe(
    "toReadonlyArrayAsync",
    testAsync("when the promise resolves", async () => {
      const promise = Promise.resolve(1);

      const result = await pipe(promise, PromiseT.toReadonlyArrayAsync());
      pipe(result, expectArrayEquals<Optional<number>>([1]));
    }),
    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const promise = Promise.reject(error);

      await pipe(
        pipe(promise, PromiseT.toReadonlyArrayAsync()),
        expectPromiseToThrow,
      );
    }),
  ),
);

((_: PromiseT.Signature) => {})(PromiseT);

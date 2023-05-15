import * as Observable from "../Observable.js";
import * as PromiseT from "../Promise.js";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../__internal__/testing.js";
import { Optional, newInstance, pipe } from "../functions.js";

testModule(
  "Promise",
  describe(
    "toObservable",
    testAsync("when the promise resolves", async () => {
      const promise = Promise.resolve(1);

      const result = await pipe(
        promise,
        PromiseT.toSharedObservable(),
        Observable.lastAsync(),
      );
      pipe(result, expectEquals<Optional<number>>(1));
    }),
    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const promise = Promise.reject(error);

      await pipe(
        pipe(promise, PromiseT.toSharedObservable(), Observable.lastAsync()),
        expectPromiseToThrow,
      );
    }),
  ),
);

//((_: PromiseT.Signature) => {})(PromiseT);

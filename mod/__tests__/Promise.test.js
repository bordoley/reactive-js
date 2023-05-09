/// <reference types="./Promise.test.d.ts" />

import * as Observable from "../Observable.js";
import * as PromiseT from "../Promise.js";
import { describe, expectEquals, expectPromiseToThrow, testAsync, testModule, } from "../__internal__/testing.js";
import { newInstance, pipe } from "../functions.js";
testModule("Promise", describe("toObservable", testAsync("when the promise resolves", async () => {
    const promise = Promise.resolve(1);
    const result = await pipe(promise, PromiseT.toObservable(), Observable.lastAsync());
    pipe(result, expectEquals(1));
}), testAsync("when the promise reject", async () => {
    const error = newInstance(Error);
    const promise = Promise.reject(error);
    await pipe(pipe(promise, PromiseT.toObservable(), Observable.lastAsync()), expectPromiseToThrow);
})));

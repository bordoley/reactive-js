/// <reference types="./Promiseable.test.d.ts" />

import { describe, expectEquals, expectPromiseToThrow, testAsync, testModule, } from "../../__internal__/testing.js";
import { newInstance, pipe } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import * as Promiseable from "../Promiseable.js";
testModule("Promiseable", describe("toObservable", testAsync("when the promise resolves", async () => {
    const promise = Promise.resolve(1);
    const result = await pipe(promise, Promiseable.toObservable(), Observable.lastAsync());
    pipe(result, expectEquals(1));
}), testAsync("when the promise reject", async () => {
    const error = newInstance(Error);
    const promise = Promise.reject(error);
    await pipe(pipe(promise, Promiseable.toObservable(), Observable.lastAsync()), expectPromiseToThrow);
})));

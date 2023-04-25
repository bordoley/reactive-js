/// <reference types="./AsyncIterable.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, testAsync, testModule, } from "../../__internal__/testing.js";
import { error, pipe } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import * as AsyncIterable from "../AsyncIterable.js";
testModule("AsyncIterable", describe("toFlowable", testAsync("infinite immediately resolving iterable", async () => {
    const result = await pipe((async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    })(), AsyncIterable.toFlowable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync({ capacity: 5 }));
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
}), testAsync("iterable that completes", async () => {
    const result = await pipe((async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    })(), AsyncIterable.toFlowable(), Observable.buffer(), Observable.lastAsync({ capacity: 5 }));
    pipe(result ?? [], expectArrayEquals([1, 2, 3]));
}), testAsync("iterable that throws", async () => {
    const e = error();
    const result = await pipe((async function* foo() {
        throw e;
    })(), AsyncIterable.toFlowable(), Observable.catchError(e => pipe([e], Observable.fromReadonlyArray())), Observable.lastAsync({ capacity: 5 }));
    pipe(result, expectEquals(e));
})), describe("toObservable", testAsync("infinite immediately resolving iterable", async () => {
    const result = await pipe((async function* foo() {
        let i = 0;
        while (true) {
            yield i++;
        }
    })(), AsyncIterable.toObservable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync({ capacity: 5 }));
    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
}), testAsync("iterable that completes", async () => {
    const result = await pipe((async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    })(), AsyncIterable.toObservable(), Observable.buffer(), Observable.lastAsync({ capacity: 1 }));
    pipe(result ?? [], expectArrayEquals([1, 2, 3]));
}), testAsync("iterable that throws", async () => {
    const e = error();
    const result = await pipe((async function* foo() {
        throw e;
    })(), AsyncIterable.toObservable(), Observable.catchError(e => pipe([e], Observable.fromReadonlyArray())), Observable.lastAsync({ capacity: 1 }));
    pipe(result, expectEquals(e));
})));

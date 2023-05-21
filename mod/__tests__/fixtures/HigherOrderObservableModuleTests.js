/// <reference types="./HigherOrderObservableModuleTests.d.ts" />

import * as Observable from "../../Observable.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import * as Runnable from "../../Runnable.js";
import { describe, expectArrayEquals, expectToThrowAsync, testAsync, } from "../../__internal__/testing.js";
import { identity, none, pipe, pipeAsync, pipeLazyAsync, returns, } from "../../functions.js";
const HigherOrderObservableModuleTests = (m, fromRunnable) => describe("HigherOrderObservableModule", describe("catchError", testAsync("when source throws", async () => {
    const e = {};
    await pipeAsync(Observable.throws({ raise: returns(e) }), fromRunnable(), m.catchError(_ => pipe([1, 2, 3], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]));
}), testAsync("when source throws and the error handler also throws", async () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    await pipeAsync(Observable.throws({ raise: returns(e1) }), fromRunnable(), m.catchError(_ => {
        throw e2;
    }), Observable.catchError(e => {
        result = e["cause"];
    }), Observable.toReadonlyArrayAsync());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals([e2, e1]));
}), testAsync("when source does not throw", pipeLazyAsync([4, 5, 6], Observable.fromReadonlyArray(), fromRunnable(), m.catchError(_ => pipe([1, 2, 3], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync(), expectArrayEquals([4, 5, 6])))), describe("exhaust", testAsync("when the initial observable never disposes", pipeLazyAsync([
    pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
    pipe([4, 5, 6], Observable.fromReadonlyArray()),
    pipe([7, 8, 9], Observable.fromReadonlyArray()),
], Observable.fromReadonlyArray(), fromRunnable(), m.exhaust(), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3])))), describe("exhaustMap", testAsync("when the initial observable never disposes", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.exhaustMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 }))), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3])))), describe("mergeMap", testAsync("without delay, merge all observables as they are produced", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.mergeMap(x => pipe([x, x, x], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3])))), describe("scanLast", testAsync("fast src, slow acc", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.scanLast((acc, x) => pipe([x + acc], Observable.fromReadonlyArray({ delay: 1 })), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 3, 6]))), testAsync("fast src, fast acc", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.scanLast((acc, x) => pipe([x + acc], Observable.fromReadonlyArray()), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 3, 6]))), testAsync("fast src, fast acc", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.scanLast((acc, x) => pipe([x + acc], Runnable.fromReadonlyArray()), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 3, 6])))), describe("scanMany", testAsync("fast src, fast acc", pipeLazyAsync([1, 1, 1], Observable.fromReadonlyArray(), fromRunnable(), m.scanMany((acc, next) => pipe(Observable.generate(identity, returns(next + acc)), Observable.takeFirst({ count: 3 })), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]))), testAsync("fast src, slow acc", pipeLazyAsync([1, 1, 1], Observable.fromReadonlyArray(), fromRunnable(), m.scanMany((acc, next) => pipe(Observable.generate(identity, returns(next + acc), {
    delay: 1,
}), Observable.takeFirst({ count: 3 })), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3])))), describe("switchAll", testAsync("with empty source", pipeLazyAsync(Observable.empty(), fromRunnable(), m.switchAll(), Observable.toReadonlyArrayAsync(), expectArrayEquals([]))), testAsync("when source throw", pipeLazyAsync(pipeLazyAsync(Observable.throws(), fromRunnable(), m.switchAll(), Observable.toReadonlyArrayAsync()), expectToThrowAsync))), describe("switchMap", testAsync("only produce the last observable", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.switchMap(x => pipe([x, x, x], Observable.fromReadonlyArray({
    delay: 1,
    delayStart: true,
}))), Observable.toReadonlyArrayAsync(), expectArrayEquals([3, 3, 3])))));
export default HigherOrderObservableModuleTests;

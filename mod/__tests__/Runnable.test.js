/// <reference types="./Runnable.test.d.ts" />

import * as Observable from "../Observable.js";
import { __await, __constant, __memo } from "../Observable/effects.js";
import * as Runnable from "../Runnable.js";
import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import { bind, increment, isSome, none, pipe, pipeLazy, returns, } from "../functions.js";
testModule("Runnable", describe("compute", test("batch mode", () => {
    const result = [];
    pipe(Runnable.compute(() => {
        const fromValueWithDelay = __constant((delay, value) => pipe([value], Observable.fromReadonlyArray(), Observable.delay(delay)));
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);
        return result1 + result2 + result3;
    }), Observable.takeLast(), Observable.forEach(bind(Array.prototype.push, result)), Observable.run());
    pipe(result, expectArrayEquals([22]));
}), test("combined-latest mode", () => {
    const result = [];
    pipe(Runnable.compute(() => {
        const oneTwoThreeDelayed = __constant(pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1)));
        const createOneTwoThree = __constant((_) => pipe([1, 2, 3], Observable.fromReadonlyArray()));
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), Observable.keepType(isSome), Observable.forEach(bind(Array.prototype.push, result)), Observable.run());
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), test("conditional hooks", () => {
    const result = [];
    pipe(Runnable.compute(() => {
        const src = __constant(pipe([0, 1, 2, 3, 4, 5], Observable.fromReadonlyArray(), Observable.delay(5)));
        const src2 = __constant(pipe(Observable.generate(increment, returns(100)), Observable.delay(2)));
        const v = __await(src);
        if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
        }
        return v;
    }), Observable.forEach(bind(Array.prototype.push, result)), Observable.run());
    pipe(result, expectArrayEquals([
        101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5,
    ]));
})), describe("concatMap", test("maps each value to a container and flattens", pipeLazy([0, 1], Observable.fromReadonlyArray(), Runnable.concatMap(pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(2))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("exhaust", test("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1)),
    pipe([4, 5, 6], Observable.fromReadonlyArray()),
    pipe([7, 8, 9], Observable.fromReadonlyArray()),
], Observable.fromReadonlyArray(), Runnable.exhaust(), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))), describe("exhaustMap", test("when the initial observable never disposes", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Runnable.exhaustMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))), describe("mergeMap", test("without delay, merge all observables as they are produced", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Runnable.mergeMap(x => pipe([x, x, x], Observable.fromReadonlyArray())), Observable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3])))), describe("switchAll", test("with empty source", pipeLazy(Observable.empty(), Runnable.switchAll(), Observable.toReadonlyArray(), expectArrayEquals([])))), describe("switchMap", test("only produce the last observable", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Runnable.switchMap(x => pipe([x, x, x], Observable.fromReadonlyArray(), Observable.delay(1, { delayStart: true }))), Observable.toReadonlyArray(), expectArrayEquals([3, 3, 3])))), describe("switchMap", test("overlapping notification", pipeLazy([none, none, none], Observable.fromReadonlyArray(), Observable.delay(4), Runnable.switchMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(2))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))), test("concating arrays", pipeLazy([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(1), Runnable.switchMap(_ => pipe([1, 2, 3], Observable.fromReadonlyArray(), Observable.delay(0))), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3])))));
((_) => { })(Runnable);

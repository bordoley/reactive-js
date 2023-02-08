/// <reference types="./effects.test.d.ts" />
import Container from '../../containers/Container.mjs';
import { async, __memo, __await } from '../../effects.mjs';
import { pipe, isSome, increment, returns } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import { run } from '../../scheduling/Continuation.mjs';
import { create } from '../../scheduling/VirtualTimeScheduler.mjs';
import { testModule, test as createTest, expectEquals, expectArrayEquals } from '../testing.mjs';

testModule("effects", createTest("batch mode", () => {
    const scheduler = create();
    const fromValueWithDelay = (delay, value) => pipe([value], Observable.fromArray({ delay }));
    let result = -1;
    pipe(async(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);
        return result1 + result2 + result3;
    }), Observable.takeLast(), Observable.forEach(v => {
        result = v;
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(result, expectEquals(22));
}), createTest("combined-latest mode", () => {
    const scheduler = create();
    const oneTwoThreeDelayed = pipe([1, 2, 3], Observable.fromArray({ delay: 1 }));
    const createOneTwoThree = (_) => pipe([1, 2, 3], Observable.fromArray());
    const result = [];
    pipe(async(() => {
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), Container.keepType(Observable, isSome), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), createTest("conditional hooks", () => {
    const scheduler = create();
    const src = pipe([0, 1, 2, 3, 4, 5], Observable.fromArray({ delay: 5 }));
    const src2 = Observable.generate(increment, returns(100), {
        delay: 2,
        delayStart: false,
    });
    const result = [];
    pipe(async(() => {
        const v = __await(src);
        if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
        }
        return v;
    }), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5]));
}));

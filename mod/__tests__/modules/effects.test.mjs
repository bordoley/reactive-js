/// <reference types="./effects.test.d.ts" />
import { testModule, test as createTest, expectEquals, expectArrayEquals } from '../../__internal__/__internal__testing.mjs';
import { keepType } from '../../containers/ContainerLike.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { async, __memo, __await } from '../../effects.mjs';
import { pipe, isSome } from '../../functions.mjs';
import { takeLast, forEach, subscribe, keepT } from '../../rx/ObservableLike.mjs';
import { r as createVirtualTimeScheduler } from '../../DisposableLike-d42502aa.mjs';
import { run } from '../../util/ContinuationLike.mjs';

testModule("effects", createTest("batch mode", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueWithDelay = (delay, value) => pipe([value], toObservable({ delay }));
    let result = -1;
    pipe(async(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);
        return result1 + result2 + result3;
    }), takeLast(), forEach(v => {
        result = v;
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectEquals(22));
}), createTest("combined-latest mode", () => {
    const scheduler = createVirtualTimeScheduler();
    const oneTwoThreeDelayed = pipe([1, 2, 3], toObservable({ delay: 1 }));
    const createOneTwoThree = (_) => pipe([1, 2, 3], toObservable());
    const result = [];
    pipe(async(() => {
        const v = __await(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __await(next);
    }, { mode: "combine-latest" }), keepType(keepT, isSome), forEach(v => {
        result.push(v);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}));

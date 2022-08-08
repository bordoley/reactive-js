/// <reference types="./effects.test.d.ts" />
import { describe as createDescribe, test as createTest, expectEquals, expectArrayEquals } from '../../__internal__/__internal__testing.mjs';
import { keepType } from '../../containers/ContainerLike.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { async, __memo, __await } from '../../effects.mjs';
import { pipe, isSome } from '../../functions.mjs';
import { emptyObservable } from '../../rx.mjs';
import { takeLast, forEach, subscribe, keepT } from '../../rx/ObservableLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { run } from '../../util/ContinuationLike.mjs';

var effectsTests = createDescribe("effects", createTest("batch mode", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueWithDelay = (delay, value) => pipe([value], toObservable({ delay }));
    const emptyDelayed = emptyObservable({ delay: 100 });
    let result = -1;
    pipe(async(() => {
        var _a, _b, _c;
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = (_a = __await(obs1)) !== null && _a !== void 0 ? _a : 0;
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = (_b = __await(obs2)) !== null && _b !== void 0 ? _b : 0;
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = (_c = __await(obs3)) !== null && _c !== void 0 ? _c : 0;
        __await(emptyDelayed);
        return result1 + result2 + result3;
    }), takeLast(), forEach(v => {
        result = v;
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectEquals(22));
}), createTest("combined-latest mode", () => {
    const scheduler = createVirtualTimeScheduler();
    const oneTwoThreeDelayed = pipe([1, 2, 3], toObservable({ delay: 1 }));
    const createOneTwoThree = (x) => isSome(x) ? pipe([1, 2, 3], toObservable()) : emptyObservable();
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

export { effectsTests as default };

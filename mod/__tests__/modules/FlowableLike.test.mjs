/// <reference types="./FlowableLike.test.d.ts" />
import { testModule, test as createTest } from '../../__internal__/__internal__testing.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe } from '../../functions.mjs';
import { toFlowable, forEach, subscribe } from '../../rx/ObservableLike.mjs';
import { r as createVirtualTimeScheduler } from '../../rx-31e22181.mjs';
import { toObservable as toObservable$1 } from '../../streaming/FlowableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';

testModule("FlowableLike", createTest("toObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const result = [];
    pipe([0, 1, 2, 3, 4], toObservable({ delay: 1 }), toFlowable(), toObservable$1(), forEach(v => {
        result.push(v);
    }), subscribe(scheduler));
    run(scheduler);
}));

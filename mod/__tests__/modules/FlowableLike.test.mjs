/// <reference types="./FlowableLike.test.d.ts" />
import { describe as createDescribe, test as createTest } from '../../__internal__/testing.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe } from '../../functions.mjs';
import { toFlowable } from '../../rx/ObservableLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { toObservable as toObservable$1 } from '../../streaming/FlowableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import { forEach, subscribe } from '../../__internal__/rx/ObservableLikeInternal.mjs';

const FlowableLikeTests = createDescribe("FlowableLike", createTest("toObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const result = [];
    pipe([0, 1, 2, 3, 4], toObservable({ delay: 1 }), toFlowable(), toObservable$1(), forEach(v => {
        result.push(v);
    }), subscribe(scheduler));
    run(scheduler);
}));

export { FlowableLikeTests };

/// <reference types="./FlowableLike.test.d.ts" />
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe } from '../../functions.mjs';
import { t as toFlowable, f as forEach, s as subscribe } from '../../ObservableLike-ca8b1474.mjs';
import { run } from '../../scheduling/ContinuationLike.mjs';
import { create } from '../../scheduling/VirtualTimeSchedulerLike.mjs';
import { toObservable as toObservable$1 } from '../../streaming/FlowableLike.mjs';
import { testModule, test as createTest } from '../testing.mjs';

testModule("FlowableLike", createTest("toObservable", () => {
    const scheduler = create();
    const result = [];
    pipe([0, 1, 2, 3, 4], toObservable({ delay: 1 }), toFlowable(), toObservable$1(), forEach(v => {
        result.push(v);
    }), subscribe(scheduler));
    run(scheduler);
}));

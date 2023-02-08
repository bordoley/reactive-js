/// <reference types="./Flowable.test.d.ts" />
import { toObservable } from '../../containers/ReadonlyArray.mjs';
import { pipe } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import { run } from '../../scheduling/Continuation.mjs';
import { create } from '../../scheduling/VirtualTimeScheduler.mjs';
import { toObservable as toObservable$1 } from '../../streaming/Flowable.mjs';
import { testModule, test as createTest } from '../testing.mjs';

testModule("Flowable", createTest("toObservable", () => {
    const scheduler = create();
    const result = [];
    pipe([0, 1, 2, 3, 4], toObservable({ delay: 1 }), Observable.toFlowable(), toObservable$1(), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    run(scheduler);
}));

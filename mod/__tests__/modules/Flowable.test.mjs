/// <reference types="./Flowable.test.d.ts" />
import ReadonlyArray from '../../containers/ReadonlyArray.mjs';
import { pipe } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import RunnableObservable from '../../rx/RunnableObservable.mjs';
import Continuation from '../../scheduling/Continuation.mjs';
import VirtualTimeScheduler from '../../scheduling/VirtualTimeScheduler.mjs';
import Flowable from '../../streaming/Flowable.mjs';
import { testModule, test as createTest } from '../testing.mjs';

testModule("Flowable", createTest("toObservable", () => {
    const scheduler = VirtualTimeScheduler.create();
    const result = [];
    pipe([0, 1, 2, 3, 4], ReadonlyArray.toRunnableObservable({ delay: 1 }), RunnableObservable.toFlowable(), Flowable.toObservable(), Observable.forEach(v => {
        result.push(v);
    }), Observable.subscribe(scheduler));
    Continuation.run(scheduler);
}));

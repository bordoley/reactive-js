/// <reference types="./Promiseable.test.d.ts" />
import Promiseable from '../../containers/Promiseable.mjs';
import { pipe, newInstance } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import Scheduler from '../../scheduling/Scheduler.mjs';
import Disposable from '../../util/Disposable.mjs';
import { testModule, describe as createDescribe, testAsync, expectEquals, expectPromiseToThrow } from '../testing.mjs';

testModule("Promiseable", createDescribe("toObservable", testAsync("when the promise resolves", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const promise = Promise.resolve(1);
    try {
        const result = await pipe(promise, Promiseable.toObservable(), Observable.toPromise(scheduler));
        pipe(result, expectEquals(1));
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
}), testAsync("when the promise reject", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const error = newInstance(Error);
    const promise = Promise.reject(error);
    try {
        await pipe(pipe(promise, Promiseable.toObservable(), Observable.toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
})));

/// <reference types="./PromiseableLike.test.d.ts" />
import { toObservable } from '../../containers/PromiseableLike.mjs';
import { pipe, newInstance } from '../../functions.mjs';
import { p as toPromise } from '../../ObservableLike-0a1b87fb.mjs';
import { createHostScheduler } from '../../scheduling/SchedulerLike.mjs';
import { dispose } from '../../util/DisposableLike.mjs';
import { testModule, describe as createDescribe, testAsync, expectEquals, expectPromiseToThrow } from '../testing.mjs';

testModule("PromiseableLike", createDescribe("toObservable", testAsync("when the promise resolves", async () => {
    const scheduler = createHostScheduler();
    const promise = Promise.resolve(1);
    try {
        const result = await pipe(promise, toObservable(), toPromise(scheduler));
        pipe(result, expectEquals(1));
    }
    finally {
        pipe(scheduler, dispose());
    }
}), testAsync("when the promise reject", async () => {
    const scheduler = createHostScheduler();
    const error = newInstance(Error);
    const promise = Promise.reject(error);
    try {
        await pipe(pipe(promise, toObservable(), toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
})));

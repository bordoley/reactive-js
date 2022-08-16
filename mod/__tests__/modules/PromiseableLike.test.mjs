/// <reference types="./PromiseableLike.test.d.ts" />
import { testModule, describe as createDescribe, testAsync, expectEquals, expectPromiseToThrow } from '../../__internal__/__internal__testing.mjs';
import { toObservable } from '../../containers/PromiseableLike.mjs';
import { pipe, newInstance } from '../../functions.mjs';
import { toPromise } from '../../rx/ObservableLike.mjs';
import { x as createHostScheduler, f as dispose } from '../../DisposableLike-45fa23bf.mjs';

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

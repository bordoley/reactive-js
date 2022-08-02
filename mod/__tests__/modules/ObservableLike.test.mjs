/// <reference types="./ObservableLike.test.d.ts" />
import { describe as createDescribe, testAsync, expectPromiseToThrow } from '../../__internal__/testing.mjs';
import { pipe } from '../../functions.mjs';
import { emptyObservable } from '../../rx.mjs';
import { toPromise } from '../../rx/ObservableLike.mjs';
import { createHostScheduler } from '../../scheduling.mjs';
import '../../util/DisposableLike.mjs';
import { dispose } from '../../__internal__/util/DisposableLikeInternal.mjs';

const ObservableLikeTests = createDescribe("ObservableLike", createDescribe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    try {
        await pipe(pipe(emptyObservable(), toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
})));

export { ObservableLikeTests };

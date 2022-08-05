/// <reference types="./ObservableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, testAsync, expectPromiseToThrow, expectToThrow } from '../../__internal__/testing.mjs';
import { throws } from '../../containers/ContainerLike.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe, pipeLazy, getOrRaise, arrayEquality, raise, getOrDefault } from '../../functions.mjs';
import { emptyObservable } from '../../rx.mjs';
import { share, zip, map, forEach, subscribe, toPromise, toRunnableObservable } from '../../rx/ObservableLike.mjs';
import { toReadonlyArray, mapT } from '../../rx/RunnableObservableLike.mjs';
import { createVirtualTimeScheduler, createHostScheduler } from '../../scheduling.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import '../../util/DisposableLike.mjs';
import { dispose } from '../../__internal__/util/DisposableLikeInternal.mjs';

const ObservableLikeTests = createDescribe("ObservableLike", createDescribe("share", createTest("shared observable zipped with itself", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], toObservable({ delay: 1 }), share(scheduler, { replay: 1 }));
    let result = [];
    pipe(zip(shared, shared), map(([a, b]) => a + b), forEach(x => {
        result.push(x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));
})), createDescribe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    try {
        await pipe(pipe(emptyObservable(), toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
})), createDescribe("zip", createTest("with synchronous and non-synchronous sources", pipeLazy(zip(pipe([1, 2], toObservable({ delay: 1 })), pipe([2, 3], toObservable()), pipe([3, 4, 5], toObservable({ delay: 1 }))), toRunnableObservable(), getOrRaise(), toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), createTest("fast with slow", pipeLazy(zip(pipe([1, 2, 3], toObservable({ delay: 1 })), pipe([1, 2, 3], toObservable({ delay: 5 }))), toRunnableObservable(), getOrRaise(), toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), createTest("when source throws", pipeLazy(pipeLazy(zip(pipe(raise, throws({ fromArray: toObservable, ...mapT })), pipe([1, 2, 3], toObservable())), map(([, b]) => b), toRunnableObservable(), getOrDefault(emptyObservable({ delay: 0 })), toReadonlyArray()), expectToThrow))));

export { ObservableLikeTests };

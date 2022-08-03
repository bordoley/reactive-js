/// <reference types="./EnumerableObservableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, mockFn, expectToHaveBeenCalledTimes, expectIsSome, expectArrayEquals } from '../../__internal__/testing.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe, raise, pipeLazy } from '../../functions.mjs';
import { toReadonlyArray } from '../../ix/EnumerableLike.mjs';
import { deferEnumerableObservableT } from '../../rx.mjs';
import { concatT, toReadonlyArrayT, decodeWithCharsetT, mapT, distinctUntilChangedT, forEachT, keepT, pairwiseT, reduceT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toEnumerable } from '../../rx/EnumerableObservableLike.mjs';
import { onSubscribe, subscribe } from '../../rx/ObservableLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import '../../util/DisposableLike.mjs';
import { concatTests, decodeWithCharsetTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';
import { getException } from '../../__internal__/util/DisposableLikeInternal.mjs';

const EnumerableObservableLikeTests = createDescribe("EnumerableObservableLike", concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
}), decodeWithCharsetTests({
    fromArray: toObservable,
    ...decodeWithCharsetT,
    ...deferEnumerableObservableT,
    ...mapT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toObservable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
}), pairwiseTests({
    fromArray: toObservable,
    ...pairwiseT,
    ...toReadonlyArrayT,
}), reduceTests({
    fromArray: toObservable,
    ...reduceT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: toObservable,
    ...scanT,
    ...toReadonlyArrayT,
}), skipFirstTests({
    fromArray: toObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), takeFirstTests({
    fromArray: toObservable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toObservable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeWhileTests({
    fromArray: toObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), throwIfEmptyTests({
    fromArray: toObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
}), createDescribe("onSubscribe", createTest("when subscribe function returns a teardown function", () => {
    const scheduler = createVirtualTimeScheduler();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe([1], toObservable(), onSubscribe(f), subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    run(scheduler);
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), createTest("when callback function throws", () => {
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe([1], toObservable(), onSubscribe(raise), subscribe(scheduler));
    pipe(subscription, getException, expectIsSome);
})), createTest("toEnumerable", pipeLazy([1, 2, 3, 4], toObservable(), toEnumerable(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))));

export { EnumerableObservableLikeTests };

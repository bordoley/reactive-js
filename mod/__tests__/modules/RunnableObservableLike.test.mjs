/// <reference types="./RunnableObservableLike.test.d.ts" />
import { throws, concatMap } from '../../containers/ContainerLike.mjs';
import { toRunnableObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, raise, identity, arrayEquality } from '../../functions.mjs';
import { toReadonlyArray as toReadonlyArray$1 } from '../../ix/EnumerableLike.mjs';
import { exhaust, toReadonlyArray, merge, fromArray, map, empty, switchAll, toEnumerable, toPromise, zip, buffer, catchError, concat, defer, decodeWithCharset, distinctUntilChanged, everySatisfy, forEach, keep, pairwise, reduce, scan, scanAsync, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty } from '../../rx/RunnableObservableLike.mjs';
import { createHostScheduler } from '../../scheduling/SchedulerLike.mjs';
import { dispose } from '../../util/DisposableLike.mjs';
import { zipTests as zipTests$1, bufferTests, catchErrorTests, concatTests, decodeWithCharsetTests, distinctUntilChangedTests, everySatisfyTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, scanTests, scanAsyncTests, skipFirstTests, someSatisfyTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrow, testAsync, expectPromiseToThrow, testModule } from '../testing.mjs';

const exhaustTests = createDescribe("exhaust", createTest("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], toRunnableObservable({ delay: 3 })),
    pipe([4, 5, 6], toRunnableObservable()),
    pipe([7, 8, 9], toRunnableObservable({ delay: 2 })),
], toRunnableObservable({ delay: 5 }), exhaust(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 7, 8, 9]))));
const mergeTests = createDescribe("merge", createTest("two arrays", pipeLazy(merge(pipe([0, 2, 3, 5, 6], toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], toRunnableObservable({ delay: 2, delayStart: true }))), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), createTest("when one source throws", pipeLazy(pipeLazy(merge(pipe([1, 4, 7], toRunnableObservable({ delay: 2 })), throws({ fromArray, map }, { delay: 5 })(raise)), toReadonlyArray()), expectToThrow)));
const switchAllTests = createDescribe("switchAll", createTest("with empty source", pipeLazy(empty({ delay: 1 }), switchAll(), toReadonlyArray(), expectArrayEquals([]))), createTest("when source throw", pipeLazy(pipeLazy(raise, throws({
    fromArray,
    map,
}), switchAll(), toReadonlyArray()), expectToThrow, identity)), createTest("concating arrays", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 1 }), concatMap({ concatAll: switchAll, map }, _ => pipe([1, 2, 3], toRunnableObservable({ delay: 0 }))), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("overlapping notification", pipeLazy([1, 2, 3], toRunnableObservable({ delay: 4 }), concatMap({ concatAll: switchAll, map }, _ => pipe([1, 2, 3], toRunnableObservable({ delay: 2 }))), toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))));
const toEnumerableTests = createDescribe("toEnumerable", createTest("with an enumerable observable", pipeLazy([1, 2, 3, 4], toRunnableObservable(), toEnumerable(), toReadonlyArray$1(), expectArrayEquals([1, 2, 3, 4]))));
const toPromiseTests = createDescribe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    try {
        await pipe(pipe(empty(), toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
}));
const zipTests = createDescribe("zip", zipTests$1({
    fromArray,
    zip,
    toReadonlyArray,
}), createTest("with synchronous and non-synchronous sources", pipeLazy(zip(pipe([1, 2], toRunnableObservable({ delay: 1 })), pipe([2, 3], toRunnableObservable()), pipe([3, 4, 5], toRunnableObservable({ delay: 1 }))), toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), createTest("fast with slow", pipeLazy(zip(pipe([1, 2, 3], toRunnableObservable({ delay: 1 })), pipe([1, 2, 3], toRunnableObservable({ delay: 5 }))), toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), createTest("when source throws", pipeLazy(pipeLazy(zip(pipe(raise, throws({ fromArray, map })), pipe([1, 2, 3], toRunnableObservable())), map(([, b]) => b), toReadonlyArray()), expectToThrow)));
testModule("RunnableObservableLike", bufferTests({
    fromArray,
    buffer,
    toReadonlyArray,
}), catchErrorTests({
    fromArray,
    catchError,
    map,
    toReadonlyArray,
}), concatTests({
    fromArray,
    concat,
    toReadonlyArray,
}), decodeWithCharsetTests({
    fromArray,
    defer,
    decodeWithCharset,
    map,
    toReadonlyArray,
}), distinctUntilChangedTests({
    fromArray,
    distinctUntilChanged,
    toReadonlyArray,
}), everySatisfyTests({
    fromArray,
    everySatisfy,
    toReadonlyArray,
}), exhaustTests, forEachTests({
    fromArray,
    forEach,
    toReadonlyArray,
}), keepTests({
    fromArray,
    keep,
    toReadonlyArray,
}), mapTests({
    fromArray,
    map,
    toReadonlyArray,
}), mergeTests, pairwiseTests({
    fromArray,
    pairwise,
    toReadonlyArray,
}), reduceTests({
    fromArray,
    reduce,
    toReadonlyArray,
}), scanTests({
    fromArray,
    scan,
    toReadonlyArray,
}), scanAsyncTests({
    fromArray,
    scanAsync,
    toReadonlyArray,
}, { fromArray }), skipFirstTests({
    fromArray,
    skipFirst,
    toReadonlyArray,
}), someSatisfyTests({
    fromArray,
    someSatisfy,
    toReadonlyArray,
}), switchAllTests, takeFirstTests({
    fromArray,
    takeFirst,
    toReadonlyArray,
}), takeLastTests({
    fromArray,
    takeLast,
    toReadonlyArray,
}), takeWhileTests({
    fromArray,
    takeWhile,
    toReadonlyArray,
}), throwIfEmptyTests({
    fromArray,
    throwIfEmpty,
    toReadonlyArray,
}), toEnumerableTests, toPromiseTests, zipTests);

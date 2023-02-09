/// <reference types="./RunnableObservable.test.d.ts" />
import Container from '../../containers/Container.mjs';
import ReadonlyArray from '../../containers/ReadonlyArray.mjs';
import { pipeLazy, pipe, raise, identity, arrayEquality } from '../../functions.mjs';
import Enumerable from '../../ix/Enumerable.mjs';
import RunnableObservable from '../../rx/RunnableObservable.mjs';
import Scheduler from '../../scheduling/Scheduler.mjs';
import Disposable from '../../util/Disposable.mjs';
import { zipTests as zipTests$1, bufferTests, catchErrorTests, concatTests, concatAllTests, concatMapTests, concatWithTests, decodeWithCharsetTests, distinctUntilChangedTests, endWithTests, everySatisfyTests, forEachTests, fromArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, reduceTests, scanTests, scanAsyncTests, skipFirstTests, someSatisfyTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipWithTests } from '../operators.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrow, testAsync, expectPromiseToThrow, testModule } from '../testing.mjs';

const exhaustTests = createDescribe("exhaust", createTest("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 3 })),
    pipe([4, 5, 6], ReadonlyArray.toRunnableObservable()),
    pipe([7, 8, 9], ReadonlyArray.toRunnableObservable({ delay: 2 })),
], ReadonlyArray.toRunnableObservable({ delay: 5 }), RunnableObservable.exhaust(), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 7, 8, 9]))));
const mergeTests = createDescribe("merge", createTest("two arrays", pipeLazy(RunnableObservable.merge(pipe([0, 2, 3, 5, 6], ReadonlyArray.toRunnableObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], ReadonlyArray.toRunnableObservable({ delay: 2, delayStart: true }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), createTest("when one source throws", pipeLazy(pipeLazy(RunnableObservable.merge(pipe([1, 4, 7], ReadonlyArray.toRunnableObservable({ delay: 2 })), Container.throws(RunnableObservable, { delay: 5 })(raise)), RunnableObservable.toReadonlyArray()), expectToThrow)));
const switchAllTests = createDescribe("switchAll", createTest("with empty source", pipeLazy(RunnableObservable.empty({ delay: 1 }), RunnableObservable.switchAll(), RunnableObservable.toReadonlyArray(), expectArrayEquals([]))), createTest("when source throw", pipeLazy(pipeLazy(raise, Container.throws(RunnableObservable), RunnableObservable.switchAll(), RunnableObservable.toReadonlyArray()), expectToThrow, identity)), createTest("concating arrays", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 }), Container.concatMap({
    concatAll: RunnableObservable.switchAll,
    map: RunnableObservable.map,
}, _ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 0 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("overlapping notification", pipeLazy([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 4 }), Container.concatMap({
    concatAll: RunnableObservable.switchAll,
    map: RunnableObservable.map,
}, _ => pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 2 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))));
const toEnumerableTests = createDescribe("toEnumerable", createTest("with an enumerable observable", pipeLazy([1, 2, 3, 4], ReadonlyArray.toRunnableObservable(), RunnableObservable.toEnumerable(), Enumerable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))));
const toPromiseTests = createDescribe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = Scheduler.createHostScheduler();
    try {
        await pipe(pipe(RunnableObservable.empty(), RunnableObservable.toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
}));
const zipTests = createDescribe("zip", zipTests$1(RunnableObservable), createTest("with synchronous and non-synchronous sources", pipeLazy(RunnableObservable.zip(pipe([1, 2], ReadonlyArray.toRunnableObservable({ delay: 1 })), pipe([2, 3], ReadonlyArray.toRunnableObservable()), pipe([3, 4, 5], ReadonlyArray.toRunnableObservable({ delay: 1 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), createTest("fast with slow", pipeLazy(RunnableObservable.zip(pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 1 })), pipe([1, 2, 3], ReadonlyArray.toRunnableObservable({ delay: 5 }))), RunnableObservable.toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), createTest("when source throws", pipeLazy(pipeLazy(RunnableObservable.zip(pipe(raise, Container.throws(RunnableObservable)), pipe([1, 2, 3], ReadonlyArray.toRunnableObservable())), RunnableObservable.map(([, b]) => b), RunnableObservable.toReadonlyArray()), expectToThrow)));
testModule("RunnableObservable", bufferTests(RunnableObservable), catchErrorTests(RunnableObservable), concatTests(RunnableObservable), concatAllTests(RunnableObservable), concatMapTests(RunnableObservable), concatWithTests(RunnableObservable), decodeWithCharsetTests(RunnableObservable), distinctUntilChangedTests(RunnableObservable), endWithTests(RunnableObservable), everySatisfyTests(RunnableObservable), exhaustTests, forEachTests(RunnableObservable), fromArrayTests(RunnableObservable), ignoreElementsTests(RunnableObservable), keepTests(RunnableObservable), mapTests(RunnableObservable), mapToTests(RunnableObservable), mergeTests, pairwiseTests(RunnableObservable), reduceTests(RunnableObservable), scanTests(RunnableObservable), scanAsyncTests(RunnableObservable, RunnableObservable), skipFirstTests(RunnableObservable), someSatisfyTests(RunnableObservable), startWithTests(RunnableObservable), switchAllTests, takeFirstTests(RunnableObservable), takeLastTests(RunnableObservable), takeWhileTests(RunnableObservable), throwIfEmptyTests(RunnableObservable), zipWithTests(RunnableObservable), toEnumerableTests, toPromiseTests, zipTests);

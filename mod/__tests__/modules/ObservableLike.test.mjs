/// <reference types="./ObservableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrow, mockFn, expectToHaveBeenCalledTimes, expectIsSome, expectEquals, expectTrue, testAsync, expectPromiseToThrow } from '../../__internal__/testing.mjs';
import { throws, concatMap } from '../../containers/ContainerLike.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, incrementBy, returns, arrayEquality, raise, identity, increment } from '../../functions.mjs';
import { toReadonlyArray as toReadonlyArray$1 } from '../../ix/EnumerableLike.mjs';
import { generateObservable, emptyObservable, deferObservable, enumerableObservableType } from '../../rx.mjs';
import { combineLatest, takeFirst, toReadonlyArray, merge, mapT, onSubscribe, subscribe, share, zip, map, forEach, switchAll, switchAllT, takeUntil, toEnumerable, toFlowable, toPromise, zipT, toReadonlyArrayT, zipLatest, bufferT, concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, pairwiseT, reduceT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT } from '../../rx/ObservableLike.mjs';
import { createVirtualTimeScheduler, createHostScheduler } from '../../scheduling.mjs';
import { dispatch, dispatchTo } from '../../scheduling/DispatcherLike.mjs';
import { schedule, getCurrentTime } from '../../scheduling/SchedulerLike.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import { getException, dispose, isDisposed } from '../../util/DisposableLike.mjs';
import { zipTests as zipTests$1, bufferTests, concatTests, decodeWithCharsetTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';

const combineLatestTests = createDescribe("combineLatest", createTest("combineLatest", pipeLazy(combineLatest(pipe(generateObservable(incrementBy(2), returns(1), { delay: 2 }), takeFirst({ count: 3 })), pipe(generateObservable(incrementBy(2), returns(0), { delay: 3 }), takeFirst({ count: 2 }))), toReadonlyArray(), expectArrayEquals([[3, 2], [5, 2], [5, 4], [7, 4]], arrayEquality()))));
const exhaustTests = createDescribe("exhaust", createTest("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], toObservable({ delay: 10 })),
    pipe([4, 5, 6], toObservable()),
], toObservable())));
const mergeTests = createDescribe("merge", createTest("two arrays", pipeLazy(merge(pipe([0, 2, 3, 5, 6], toObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], toObservable({ delay: 2, delayStart: true }))), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), createTest("when one source throws", pipeLazy(pipeLazy(merge(pipe([1, 4, 7], toObservable({ delay: 2 })), throws({ fromArray: toObservable, ...mapT }, { delay: 5 })(raise)), toReadonlyArray()), expectToThrow)));
const onSubscribeTests = createDescribe("onSubscribe", createTest("when subscribe function returns a teardown function", () => {
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
}));
const shareTests = createDescribe("share", createTest("shared observable zipped with itself", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], toObservable({ delay: 1 }), share(scheduler, { replay: 1 }));
    let result = [];
    pipe(zip(shared, shared), map(([a, b]) => a + b), forEach(x => {
        result.push(x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([2, 4, 6]));
}));
const switchAllTests = createDescribe("switchAll", createTest("with empty source", pipeLazy(emptyObservable({ delay: 1 }), switchAll(), toReadonlyArray())), createTest("when source throw", pipeLazy(pipeLazy(raise, throws({
    fromArray: () => toObservable({ delay: 0 }),
    ...mapT,
}), switchAll(), toReadonlyArray()), 
// FIXME
//expectToThrow,
identity)), createTest("concating arrays", pipeLazy([1, 2, 3], toObservable({ delay: 1 }), concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], toObservable({ delay: 0 }))), toReadonlyArray())), createTest("overlapping notification", pipeLazy([1, 2, 3], toObservable({ delay: 4 }), concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], toObservable({ delay: 2 }))), toReadonlyArray())));
const takeUntilTests = createDescribe("takeUntil", createTest("takes until the notifier notifies its first notification", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), takeUntil(pipe([1], toObservable({ delay: 3, delayStart: true }))), toReadonlyArray(), expectArrayEquals([1, 2, 3]))));
const toEnumerableTests = createDescribe("toEnumerable", createTest("with an enumerable observable", pipeLazy([1, 2, 3, 4], toObservable(), toEnumerable(), toReadonlyArray$1(), expectArrayEquals([1, 2, 3, 4]))));
const toFlowableTests = createDescribe("toFlowable", createTest("flow a generating source", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(generateObservable(increment, returns(-1), {
        delay: 1,
        delayStart: true,
    }), toFlowable(), stream(scheduler));
    pipe(generateStream, dispatch("resume"));
    pipe(scheduler, schedule(pipeLazy("pause", dispatchTo(generateStream)), {
        delay: 2,
    }));
    pipe(scheduler, schedule(pipeLazy("resume", dispatchTo(generateStream)), {
        delay: 4,
    }));
    pipe(scheduler, schedule(pipeLazy(generateStream, dispose()), { delay: 5 }));
    const f = mockFn();
    const subscription = pipe(generateStream, forEach(x => {
        f(getCurrentTime(scheduler), x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    pipe(subscription, isDisposed, expectTrue);
}));
const toPromiseTests = createDescribe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    try {
        await pipe(pipe(emptyObservable(), toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
}));
const zipTests = createDescribe("zip", ...zipTests$1({
    fromArray: toObservable,
    ...zipT,
    ...toReadonlyArrayT,
}).tests, createTest("with synchronous and non-synchronous sources", pipeLazy(zip(pipe([1, 2], toObservable({ delay: 1 })), pipe([2, 3], toObservable()), pipe([3, 4, 5], toObservable({ delay: 1 }))), toReadonlyArray(), expectArrayEquals([[1, 2, 3], [2, 3, 4]], arrayEquality()))), createTest("fast with slow", pipeLazy(zip(pipe([1, 2, 3], toObservable({ delay: 1 })), pipe([1, 2, 3], toObservable({ delay: 5 }))), toReadonlyArray(), expectArrayEquals([[1, 1], [2, 2], [3, 3]], arrayEquality()))), createTest("when source throws", pipeLazy(pipeLazy(zip(pipe(raise, throws({ fromArray: toObservable, ...mapT })), pipe([1, 2, 3], toObservable())), map(([, b]) => b), toReadonlyArray()), expectToThrow)));
const zipLatestTests = createDescribe("zipLatest", createTest("zipLatestWith", pipeLazy(zipLatest(pipe([1, 2, 3, 4, 5, 6, 7, 8], toObservable({ delay: 1, delayStart: true })), pipe([1, 2, 3, 4], toObservable({ delay: 2, delayStart: true }))), map(([a, b]) => a + b), toReadonlyArray(), expectArrayEquals([2, 5, 8, 11]))));
var ObservableLikeTests = createDescribe("ObservableLike", bufferTests({
    fromArray: toObservable,
    ...bufferT,
    ...toReadonlyArrayT,
}), combineLatestTests, concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
}), decodeWithCharsetTests({
    fromArray: toObservable,
    defer: f => deferObservable(f, { type: enumerableObservableType }),
    ...decodeWithCharsetT,
    ...mapT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), exhaustTests, forEachTests({
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
}), mergeTests, onSubscribeTests, pairwiseTests({
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
}), shareTests, skipFirstTests({
    fromArray: toObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), switchAllTests, takeFirstTests({
    fromArray: toObservable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toObservable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeUntilTests, takeWhileTests({
    fromArray: toObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), throwIfEmptyTests({
    fromArray: toObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
}), toEnumerableTests, toFlowableTests, toPromiseTests, zipTests, zipLatestTests);

export { ObservableLikeTests as default };

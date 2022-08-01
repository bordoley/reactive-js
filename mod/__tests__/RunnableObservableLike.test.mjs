/// <reference types="./RunnableObservableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, mockFn, expectToHaveBeenCalledTimes, expectEquals, expectTrue } from '../__internal__/testing.mjs';
import { toObservable } from '../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, increment, returns } from '../functions.mjs';
import { deferObservableT, generateObservable } from '../rx.mjs';
import { takeUntil, subscribe } from '../rx/ObservableLike.mjs';
import { decodeWithCharsetT, mapT, toReadonlyArrayT, distinctUntilChangedT, forEachT, keepT, pairwiseT, reduceT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toReadonlyArray, toFlowable, forEach } from '../rx/RunnableObservableLike.mjs';
import { createVirtualTimeScheduler } from '../scheduling.mjs';
import { dispatch, dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { schedule } from '../scheduling/SchedulerLike.mjs';
import { stream } from '../streaming/StreamableLike.mjs';
import { run } from '../util/ContinuationLike.mjs';
import '../util/DisposableLike.mjs';
import { decodeWithCharsetTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from './operators.test.mjs';
import { dispose, isDisposed } from '../__internal__/util/DisposableLikeInternal.mjs';
import { getCurrentTime } from '../__internal__/schedulingInternal.mjs';

const RunnableObservableLikeTests = createDescribe("RunnableObservableLike", decodeWithCharsetTests({
    fromArray: toObservable,
    ...decodeWithCharsetT,
    ...deferObservableT,
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
}), createTest("takeUntil", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), takeUntil(pipe([1], toObservable({ delay: 3, delayStart: true }))), toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createDescribe("toFlowable", createTest("flow a generating source", () => {
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
    pipe(scheduler, run);
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    pipe(subscription, isDisposed, expectTrue);
})));

export { RunnableObservableLikeTests };

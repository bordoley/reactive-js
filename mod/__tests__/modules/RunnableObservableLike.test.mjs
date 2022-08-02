/// <reference types="./RunnableObservableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrow, mockFn, expectToHaveBeenCalledTimes, expectEquals, expectTrue } from '../../__internal__/testing.mjs';
import { throws } from '../../containers/ContainerLike.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, raise, increment, returns } from '../../functions.mjs';
import { generateObservable } from '../../rx.mjs';
import { takeUntil, subscribe } from '../../rx/ObservableLike.mjs';
import { merge, toReadonlyArray, mapT, toFlowable, forEach } from '../../rx/RunnableObservableLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { dispatch, dispatchTo } from '../../scheduling/DispatcherLike.mjs';
import { schedule } from '../../scheduling/SchedulerLike.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import '../../util/DisposableLike.mjs';
import { dispose, isDisposed } from '../../__internal__/util/DisposableLikeInternal.mjs';
import { getCurrentTime } from '../../__internal__/schedulingInternal.mjs';

const RunnableObservableLikeTests = createDescribe("RunnableObservableLike", createDescribe("merge", createTest("two arrays", pipeLazy(merge(pipe([0, 2, 3, 5, 6], toObservable({ delay: 1, delayStart: true })), pipe([1, 4, 7], toObservable({ delay: 2, delayStart: true }))), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), createTest("when one source throws", pipeLazy(pipeLazy(merge(pipe([1, 4, 7], toObservable({ delay: 2 })), throws({ fromArray: toObservable, ...mapT }, { delay: 5 })(raise)), toReadonlyArray()), expectToThrow))), createTest("takeUntil", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), takeUntil(pipe([1], toObservable({ delay: 3, delayStart: true }))), toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createDescribe("toFlowable", createTest("flow a generating source", () => {
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
})));

export { RunnableObservableLikeTests };

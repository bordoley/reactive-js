/// <reference types="./streaming.test.d.ts" />
import { describe as createDescribe, test as createTest, mockFn, expectToHaveBeenCalledTimes, expectEquals, expectTrue } from '../../__internal__/testing.mjs';
import { pipe, increment, returns, pipeLazy } from '../../functions.mjs';
import { generateObservable } from '../../rx.mjs';
import { forEach, subscribe } from '../../rx/ObservableLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { dispatch, dispatchTo } from '../../scheduling/DispatcherLike.mjs';
import { schedule } from '../../scheduling/SchedulerLike.mjs';
import { flow } from '../../streaming.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import '../../util/DisposableLike.mjs';
import { dispose, isDisposed } from '../../__internal__/util/DisposableLikeInternal.mjs';
import { getCurrentTime } from '../../__internal__/schedulingInternal.mjs';

const streamingTests = createDescribe("streaming", createDescribe("flow", createTest("flow a generating source", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(generateObservable(increment, returns(-1), {
        delay: 1,
        delayStart: true,
    }), flow(), stream(scheduler));
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

export { streamingTests };

/// <reference types="./DisposableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectIsNone, expectEquals, expectArrayEquals } from '../../__internal__/testing.mjs';
import { pipe, pipeLazy, none, raise } from '../../functions.mjs';
import '../../rx/ObservableLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { schedule } from '../../scheduling/SchedulerLike.mjs';
import { createDisposable } from '../../util.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import { toObservable } from '../../util/DisposableLike.mjs';
import { addIgnoringChildErrors, dispose, isDisposed, onDisposed, getException, addTo, add } from '../../__internal__/util/DisposableLikeInternal.mjs';
import { subscribe } from '../../__internal__/rx/ObservableLikeInternal.mjs';
import { getCurrentTime } from '../../__internal__/schedulingInternal.mjs';

const DisposableLikeTests = createDescribe("DisposableLike", createTest("disposes child disposable when disposed", () => {
    const child = createDisposable();
    pipe(createDisposable(), addIgnoringChildErrors(child), dispose());
    pipe(child, isDisposed, expectTrue);
}), createTest("adding to disposed disposable disposes the child", () => {
    const child = createDisposable();
    pipe(createDisposable(), dispose(), addIgnoringChildErrors(child));
    pipe(child, isDisposed, expectTrue);
}), createTest("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    pipe(createDisposable(), onDisposed(teardown), onDisposed(teardown), dispose());
    pipe(teardown, expectToHaveBeenCalledTimes(1));
}), createTest("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);
    const disposable = pipe(createDisposable(), onDisposed(teardown), dispose());
    pipe(disposable, getException, expectIsNone);
}), createTest("propogates errors when disposed with an Exception", () => {
    const error = { cause: null };
    const childTeardown = mockFn();
    const disposable = pipe(createDisposable(), onDisposed(childTeardown));
    pipe(disposable, dispose(error));
    pipe(disposable, getException, expectEquals(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
}), createTest("ignores when it is added to itself", () => {
    const disposable = createDisposable();
    pipe(disposable, addTo(disposable), dispose());
}), createTest("disposes parent when child is disposed with error", () => {
    const parent = createDisposable();
    const child = createDisposable();
    pipe(parent, add(child));
    const cause = new Error();
    pipe(child, dispose({ cause }));
    pipe(parent, getException, ({ cause } = { cause: undefined }) => cause, expectEquals(cause));
}), createTest("toObservable", () => {
    const disposable = createDisposable();
    const scheduler = createVirtualTimeScheduler();
    let disposedTime = 0;
    pipe(disposable, toObservable(), subscribe(scheduler), onDisposed(_ => {
        disposedTime = getCurrentTime(scheduler);
    }));
    pipe(scheduler, schedule(() => {
        pipe(disposable, dispose());
    }, { delay: 2 }));
    run(scheduler);
    pipe(disposedTime, expectEquals(2));
}));

export { DisposableLikeTests };

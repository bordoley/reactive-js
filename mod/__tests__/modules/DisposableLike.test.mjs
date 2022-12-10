/// <reference types="./DisposableLike.test.d.ts" />
import { pipe, pipeLazy, none, raise } from '../../functions.mjs';
import { subscribe } from '../../rx/ObservableLike.mjs';
import { run } from '../../scheduling/ContinuationLike.mjs';
import { getCurrentTime, schedule } from '../../scheduling/SchedulerLike.mjs';
import { create as create$1 } from '../../scheduling/VirtualTimeSchedulerLike.mjs';
import { create, addIgnoringChildErrors, dispose, isDisposed, onDisposed, getException, addTo, add, toObservable } from '../../util/DisposableLike.mjs';
import { testModule, test as createTest, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectIsNone, expectEquals, expectArrayEquals } from '../testing.mjs';

testModule("DisposableLike", createTest("disposes child disposable when disposed", () => {
    const child = create();
    pipe(create(), addIgnoringChildErrors(child), dispose());
    pipe(child, isDisposed, expectTrue);
}), createTest("adding to disposed disposable disposes the child", () => {
    const child = create();
    pipe(create(), dispose(), addIgnoringChildErrors(child));
    pipe(child, isDisposed, expectTrue);
}), createTest("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    pipe(create(), onDisposed(teardown), onDisposed(teardown), dispose());
    pipe(teardown, expectToHaveBeenCalledTimes(1));
}), createTest("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);
    const disposable = pipe(create(), onDisposed(teardown), dispose());
    pipe(disposable, getException, expectIsNone);
}), createTest("propogates errors when disposed with an Exception", () => {
    const error = { cause: null };
    const childTeardown = mockFn();
    const disposable = pipe(create(), onDisposed(childTeardown));
    pipe(disposable, dispose(error));
    pipe(disposable, getException, expectEquals(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
}), createTest("ignores when it is added to itself", () => {
    const disposable = create();
    pipe(disposable, addTo(disposable), dispose());
}), createTest("disposes parent when child is disposed with error", () => {
    const parent = create();
    const child = create();
    pipe(parent, add(child));
    const cause = new Error();
    pipe(child, dispose({ cause }));
    pipe(parent, getException, ({ cause } = { cause: undefined }) => cause, expectEquals(cause));
}), createTest("toObservable", () => {
    const disposable = create();
    const scheduler = create$1();
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

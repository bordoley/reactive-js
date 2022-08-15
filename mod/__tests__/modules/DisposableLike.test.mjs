/// <reference types="./DisposableLike.test.d.ts" />
import { testModule, test as createTest, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectIsNone, expectEquals, expectArrayEquals } from '../../__internal__/__internal__testing.mjs';
import { pipe, pipeLazy, none, raise } from '../../functions.mjs';
import { subscribe } from '../../rx/ObservableLike.mjs';
import { r as create, t as addIgnoringChildErrors, f as dispose, i as isDisposed, k as onDisposed, u as getException, h as addTo, v as add, w as createVirtualTimeScheduler, x as toObservable, y as getCurrentTime, s as schedule } from '../../DisposableLike-82e2991c.mjs';
import { run } from '../../util/ContinuationLike.mjs';

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

/// <reference types="./DisposableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectNone, expectEquals, expectArrayEquals } from '../__internal__/testing.mjs';
import { pipe, pipeLazy, none, raise } from '../functions.mjs';
import { createDisposable } from '../util.mjs';
import { addIgnoringChildErrors, onDisposed } from '../util/DisposableLike.mjs';
import { dispose, isDisposed, getError } from '../__internal__/util/DisposableLikeInternal.mjs';

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
    pipe(disposable, getError, expectNone);
}), createTest("propogates errors when disposed with an Error", () => {
    const error = { cause: null };
    const childTeardown = mockFn();
    const disposable = pipe(createDisposable(), onDisposed(childTeardown));
    pipe(disposable, dispose(error));
    pipe(disposable, getError, expectEquals(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
}));

export { DisposableLikeTests };

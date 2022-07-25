/// <reference types="./disposable.test.d.ts" />
import { describe as createDescribe, test as createTest, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectNone, expectEquals, expectArrayEquals } from '../__internal__/testing.mjs';
import { pipe, pipeLazy, raise } from '../functions.mjs';
import { create, addIgnoringChildErrors, onDisposed } from '../util/DisposableLike.mjs';
import { none } from '../util/Option.mjs';
import { dispose, isDisposed, getError } from '../__internal__/util/DisposableLike.mjs';

const tests = createDescribe("Disposable", createDescribe("Disposable", createTest("disposes child disposable when disposed", () => {
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
    pipe(disposable, getError, expectNone);
}), createTest("propogates errors when disposed with an Error", () => {
    const error = { cause: null };
    const childTeardown = mockFn();
    const disposable = pipe(create(), onDisposed(childTeardown));
    pipe(disposable, dispose(error));
    pipe(disposable, getError, expectEquals(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
})));

export { tests };

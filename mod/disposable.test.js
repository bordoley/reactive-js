'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
var testing = require('./testing.js');

const tests = testing.describe("Disposable", testing.describe("AbstractDisposable", testing.test("disposes child disposable when disposed", () => {
    const disposable$1 = disposable.createDisposable();
    const child = disposable.createDisposable();
    disposable.addDisposable(disposable$1, child);
    functions.pipe(disposable$1, disposable.dispose());
    testing.expectTrue(child.isDisposed);
}), testing.test("adding to disposed disposable disposes the child", () => {
    const disposable$1 = disposable.createDisposable();
    const child = disposable.createDisposable();
    functions.pipe(disposable$1, disposable.dispose());
    disposable.addDisposable(disposable$1, child);
    testing.expectTrue(child.isDisposed);
}), testing.test("disposes teardown function exactly once when disposed", () => {
    const teardown = testing.mockFn();
    const disposable$1 = disposable.createDisposable(teardown);
    disposable.addTeardown(disposable$1, teardown);
    functions.pipe(disposable$1, disposable.dispose());
    functions.pipe(teardown, testing.expectToHaveBeenCalledTimes(1));
}), testing.test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = functions.defer(option.none, functions.raise);
    const disposable$1 = disposable.createDisposable(teardown);
    functions.pipe(disposable$1, disposable.dispose());
    functions.pipe(disposable$1.error, testing.expectNone);
}), testing.test("propogates errors when disposed with an Error", () => {
    const error = { cause: null };
    const childTeardown = testing.mockFn();
    const disposable$1 = disposable.createDisposable(childTeardown);
    functions.pipe(disposable$1, disposable.dispose(error));
    functions.pipe(disposable$1.error, testing.expectEquals(error));
    functions.pipe(childTeardown, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(childTeardown.calls[0], testing.expectArrayEquals([error]));
})), testing.describe("AbstractSerialDisposable", testing.test("setting inner disposable disposes the previous inner disposable", () => {
    const serialDisposable = disposable.createSerialDisposable();
    const child = disposable.createDisposable();
    serialDisposable.inner = child;
    functions.pipe(serialDisposable.inner, testing.expectEquals(child));
    serialDisposable.inner = disposable.disposed;
    functions.pipe(child.isDisposed, testing.expectTrue);
}), testing.test("setting inner disposable with the same inner disposable has no effect", () => {
    const serialDisposable = disposable.createSerialDisposable();
    const child = disposable.createDisposable();
    serialDisposable.inner = child;
    functions.pipe(serialDisposable.inner, testing.expectEquals(child));
    serialDisposable.inner = child;
    functions.pipe(child.isDisposed, testing.expectFalse);
})), testing.describe("DisposableValue", testing.test("disposes the value when disposed", () => {
    const value = disposable.createDisposable();
    const disposable$1 = disposable.createDisposableValue(value, disposable.dispose());
    functions.pipe(disposable$1, disposable.dispose());
    functions.pipe(disposable$1.value, testing.expectEquals(value));
    functions.pipe(value.isDisposed, testing.expectTrue);
})));

exports.tests = tests;

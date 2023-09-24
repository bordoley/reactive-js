/// <reference types="./Disposable.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectIsNone, expectToHaveBeenCalledTimes, expectTrue, mockFn, test, testModule, } from "../../__internal__/testing.js";
import { error, newInstance, none, pipe, pipeLazy, raise, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
testModule("Disposable", describe("add", test("disposes child disposable when disposed", () => {
    const child = Disposable.create();
    const disposable = pipe(Disposable.create(), Disposable.add(child, { ignoreChildErrors: true }));
    disposable[DisposableLike_dispose]();
    pipe(child[DisposableLike_isDisposed], expectTrue);
}), test("adding to disposed disposable disposes the child", () => {
    const child = Disposable.create();
    const disposable = Disposable.create();
    disposable[DisposableLike_dispose]();
    pipe(disposable, Disposable.add(child, { ignoreChildErrors: true }));
    pipe(child[DisposableLike_isDisposed], expectTrue);
}), test("disposes parent when child is disposed with error", () => {
    const parent = Disposable.create();
    const child = Disposable.create();
    pipe(parent, Disposable.add(child));
    const e = new Error();
    child[DisposableLike_dispose](e);
    pipe(parent[DisposableLike_error], expectEquals(e));
})), describe("addTo", test("ignores when it is added to itself", () => {
    const disposable = Disposable.create();
    pipe(disposable, Disposable.addTo(disposable));
    disposable[DisposableLike_dispose]();
})), describe("bindTo", test("disposing the child disposable disposes the parent", () => {
    const parent = Disposable.create();
    const child = Disposable.create();
    pipe(parent, Disposable.bindTo(child));
    child[DisposableLike_dispose]();
    expectTrue(child[DisposableLike_isDisposed]);
}), test("disposing the child disposable with an error disposes the parent with an error", () => {
    const parent = Disposable.create();
    const child = Disposable.create();
    pipe(parent, Disposable.bindTo(child));
    const error = newInstance(Error);
    child[DisposableLike_dispose](error);
    pipe(parent[DisposableLike_error], expectEquals(error));
})), describe("onComplete", test("disposing the parent without error invokes the callback", () => {
    const disposable = Disposable.create();
    const callback = mockFn();
    pipe(disposable, Disposable.onComplete(callback));
    disposable[DisposableLike_dispose]();
    pipe(callback, expectToHaveBeenCalledTimes(1));
}), test("disposing the parent with an error does not invoke the callback", () => {
    const disposable = Disposable.create();
    const callback = mockFn();
    pipe(disposable, Disposable.onComplete(callback));
    disposable[DisposableLike_dispose](newInstance(Error));
    pipe(callback, expectToHaveBeenCalledTimes(0));
})), describe("onDisposed", test("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    const disposable = pipe(Disposable.create(), Disposable.onDisposed(teardown), Disposable.onDisposed(teardown));
    disposable[DisposableLike_dispose]();
    pipe(teardown, expectToHaveBeenCalledTimes(1));
}), test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);
    const disposable = pipe(Disposable.create(), Disposable.onDisposed(teardown));
    disposable[DisposableLike_dispose]();
    pipe(disposable[DisposableLike_error], expectIsNone);
}), test("propogates errors when disposed with an Error", () => {
    const err = error(null);
    const childTeardown = mockFn();
    const disposable = pipe(Disposable.create(), Disposable.onDisposed(childTeardown));
    disposable[DisposableLike_dispose](err);
    pipe(disposable[DisposableLike_error], expectEquals(err));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([err]));
})), describe("toAbortSignal", test("disposing the disposable invokes the abort signal", () => {
    const disposable = Disposable.create();
    const signal = pipe(disposable, Disposable.toAbortSignal);
    const callback = mockFn();
    signal.onabort = callback;
    disposable[DisposableLike_dispose]();
    pipe(callback, expectToHaveBeenCalledTimes(1));
}), test("disposing the disposable with an error invokes the abort signal", () => {
    const disposable = Disposable.create();
    const signal = pipe(disposable, Disposable.toAbortSignal);
    const callback = mockFn();
    signal.onabort = callback;
    const error = newInstance(Error);
    disposable[DisposableLike_dispose](error);
    pipe(callback, expectToHaveBeenCalledTimes(1));
    pipe(signal.reason, expectEquals(error));
})), describe("toErrorHandler", test("disposes the disposable with a wrapped error", () => {
    const disposable1 = Disposable.create();
    const errorHandler1 = pipe(disposable1, Disposable.toErrorHandler);
    const error = newInstance(Error);
    errorHandler1(error);
    pipe(disposable1[DisposableLike_error], expectEquals(error));
    const disposable2 = Disposable.create();
    const errorHandler2 = pipe(disposable2, Disposable.toErrorHandler);
    errorHandler2("message");
    pipe(disposable2[DisposableLike_error]?.message, expectEquals("message"));
})));
((_) => { })(Disposable);

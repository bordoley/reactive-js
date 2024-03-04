/// <reference types="./Disposable.test.d.ts" />

import { describe, expectEquals, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import { newInstance, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
testModule("Disposable", describe("add", test("disposes child disposable when disposed", () => {
    const child = Disposable.create();
    const disposable = pipe(Disposable.create(), Disposable.add(child));
    disposable[DisposableLike_dispose]();
    pipe(child[DisposableLike_isDisposed], expectTrue);
}), test("adding to disposed disposable disposes the child", () => {
    const child = Disposable.create();
    const disposable = Disposable.create();
    disposable[DisposableLike_dispose]();
    pipe(disposable, Disposable.add(child));
    pipe(child[DisposableLike_isDisposed], expectTrue);
}), test("disposes parent when child is disposed with error", () => {
    const parent = Disposable.create();
    const child = Disposable.create();
    pipe(parent, Disposable.add(child));
    const e = newInstance(Error);
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

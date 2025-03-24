/// <reference types="./SerialDisposable.test.d.ts" />

import { expectFalse, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SerialDisposableLike_current, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as SerialDisposable from "../SerialDisposable.js";
testModule("SerialDisposable", test("setting a new a disposable, disposes the old disposable", () => {
    const s = SerialDisposable.create();
    const d1 = Disposable.create();
    const d2 = Disposable.create();
    s[SerialDisposableLike_current] = d1;
    s[SerialDisposableLike_current] = d2;
    expectTrue("d1 should be disposed")(d1[DisposableLike_isDisposed]);
    expectFalse("d2 should not be disposed")(d2[DisposableLike_isDisposed]);
}), test("disposing the serial disposable, disposes the inner disposable", () => {
    const s = SerialDisposable.create();
    const d = Disposable.create();
    s[SerialDisposableLike_current] = d;
    s[DisposableLike_dispose]();
    expectTrue("d should be disposed")(d[DisposableLike_isDisposed]);
}));
((_) => { })(Disposable);

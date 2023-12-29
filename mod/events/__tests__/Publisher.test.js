/// <reference types="./Publisher.test.d.ts" />

import { describe, expectEquals, expectFalse, expectIsNone, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import { ignore, newInstance, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";
testModule("Publisher", describe("create", test("when disposed with an error", () => {
    const e = newInstance(Error);
    const publisher = Publisher.create();
    pipe(publisher[DisposableLike_error], expectIsNone);
    publisher[DisposableLike_dispose](e);
    pipe(publisher[DisposableLike_error], expectEquals(e));
}), test("auto disposing", () => {
    const publisher = Publisher.create({ autoDispose: true });
    const subscription = pipe(publisher, EventSource.addEventHandler(ignore));
    expectFalse(subscription[DisposableLike_isDisposed]);
    expectFalse(publisher[DisposableLike_isDisposed]);
    subscription[DisposableLike_dispose]();
    expectTrue(subscription[DisposableLike_isDisposed]);
    expectTrue(publisher[DisposableLike_isDisposed]);
})));

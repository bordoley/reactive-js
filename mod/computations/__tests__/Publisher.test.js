/// <reference types="./Publisher.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import * as Publisher from "../../computations/Publisher.js";
import { SourceLike_subscribe } from "../../computations.js";
import { ignore, newInstance, none, pipe, raiseError, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
testModule("Publisher", describe("create", test("when disposed with an error", () => {
    const e = newInstance(Error);
    const publisher = Publisher.create();
    pipe(publisher[DisposableLike_error], expectIsNone);
    publisher[DisposableLike_dispose](e);
    pipe(publisher[DisposableLike_error], expectEquals(e));
}), test("auto disposing", () => {
    const publisher = Publisher.create({ autoDispose: true });
    const subscription = pipe(publisher, Broadcaster.addEventHandler(ignore));
    pipe(subscription[DisposableLike_isDisposed], expectFalse());
    pipe(publisher[DisposableLike_isDisposed], expectFalse());
    subscription[DisposableLike_dispose]();
    pipe(subscription[DisposableLike_isDisposed], expectTrue());
    pipe(publisher[DisposableLike_isDisposed], expectTrue());
}), test("when a EventListener throws an exception", () => {
    const e = newInstance(Error);
    const publisher = Publisher.create({ autoDispose: true });
    const subscription = pipe(publisher, Broadcaster.addEventHandler(_ => {
        raiseError(e);
    }));
    publisher[EventListenerLike_notify](none);
    pipe(subscription[DisposableLike_error], expectEquals(e));
}), test("notifying after the publisher is disposed", () => {
    const publisher = Publisher.create({ autoDispose: true });
    const result = [];
    pipe(publisher, Broadcaster.addEventHandler(v => {
        result.push(v);
    }));
    publisher[EventListenerLike_notify](1);
    publisher[EventListenerLike_notify](2);
    publisher[DisposableLike_dispose]();
    publisher[EventListenerLike_notify](3);
    pipe(result, expectArrayEquals([1, 2]));
})), test("add the same publisher as a EventListener multiple times", () => {
    const publisher = Publisher.create({ autoDispose: true });
    const EventListener = Publisher.create({ autoDispose: true });
    publisher[SourceLike_subscribe](EventListener);
    publisher[SourceLike_subscribe](EventListener);
    EventListener[DisposableLike_dispose]();
    pipe(publisher[DisposableLike_isDisposed], expectTrue());
}));

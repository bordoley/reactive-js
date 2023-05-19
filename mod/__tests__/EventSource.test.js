/// <reference types="./EventSource.test.d.ts" />

import * as Disposable from "../Disposable.js";
import * as EventSource from "../EventSource.js";
import { testModule } from "../__internal__/testing.js";
import { isSome, pipe } from "../functions.js";
import { DisposableLike_dispose, DisposableLike_error, SinkLike_notify, } from "../types.js";
import ContainerTypeClassTests from "./fixtures/ContainerTypeClassTests.js";
const fromReadonlyArray = () => (arr) => EventSource.create(listener => {
    for (let i = 0; i < arr.length; i++) {
        listener[SinkLike_notify](arr[i]);
    }
    listener[DisposableLike_dispose]();
});
const toReadonlyArray = () => (eventSource) => {
    const result = [];
    const subscription = pipe(eventSource, EventSource.addEventHandler(v => {
        result.push(v);
    }));
    if (isSome(subscription[DisposableLike_error])) {
        throw subscription[DisposableLike_error];
    }
    return result;
};
testModule("EventSource", ContainerTypeClassTests(EventSource, () => Disposable.disposed, fromReadonlyArray, toReadonlyArray));
((_) => { })(EventSource);

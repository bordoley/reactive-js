/// <reference types="./EventSource.test.d.ts" />

import * as Disposable from "../Disposable.js";
import * as EventSource from "../EventSource.js";
import ReadonlyArray_toEventSource from "../ReadonlyArray/__internal__/ReadonlyArray.toEventSource.js";
import { testModule } from "../__internal__/testing.js";
import { isSome, pipe } from "../functions.js";
import { DisposableLike_error } from "../types.js";
import ContainerTypeClassTests from "./fixtures/ContainerTypeClassTests.js";
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
testModule("EventSource", ContainerTypeClassTests(EventSource, () => Disposable.disposed, ReadonlyArray_toEventSource, toReadonlyArray));
((_) => { })(EventSource);

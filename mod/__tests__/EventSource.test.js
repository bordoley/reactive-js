/// <reference types="./EventSource.test.d.ts" />

import * as Disposable from "../Disposable.js";
import * as EventSource from "../EventSource.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import { testModule } from "../__internal__/testing.js";
import { isSome, pipe } from "../functions.js";
import { DisposableLike_error } from "../types.js";
import ContainerModuleTests from "./fixtures/ContainerModuleTests.js";
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
testModule("EventSource", ContainerModuleTests(EventSource, () => Disposable.disposed, () => ReadonlyArray.toEventSource(), toReadonlyArray));
((_) => { })(EventSource);

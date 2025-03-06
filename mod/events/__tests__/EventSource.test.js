/// <reference types="./EventSource.test.d.ts" />

import { Array_length, Array_push } from "../../__internal__/constants.js";
import { describe, expectIsSome, test, testModule, } from "../../__internal__/testing.js";
import ComputationModuleTests from "../../computations/__tests__/fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "../../computations/__tests__/fixtures/ConcurrentReactiveComputationModuleTests.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, Computation_multicastOfT, } from "../../computations.js";
import * as Observable from "../../concurrent/Observable.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../events.js";
import { bindMethod, ignore, isSome, pick, pipe, pipeLazy, raise, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";
const EventSourceTypes = {
    [Computation_multicastOfT]: EventSource.never(),
};
testModule("EventSource", ComputationModuleTests({
    ...EventSource,
    fromReadonlyArray() {
        return (arr) => ({
            [ComputationLike_isDeferred]: false,
            [ComputationLike_isSynchronous]: false,
            [EventSourceLike_addEventListener](listener) {
                for (let i = 0; i < arr[Array_length]; i++) {
                    listener[EventListenerLike_notify](arr[i]);
                }
                listener[DisposableLike_dispose]();
            },
        });
    },
    toReadonlyArray() {
        return (eventSource) => {
            const result = [];
            const subscription = pipe(eventSource, EventSource.addEventHandler(bindMethod(result, Array_push)));
            if (isSome(subscription[DisposableLike_error])) {
                throw subscription[DisposableLike_error];
            }
            return result;
        };
    },
}, EventSourceTypes), ConcurrentReactiveComputationModuleTests({
    ...EventSource,
    fromObservable: Observable.toEventSource,
    toObservable: Observable.fromEventSource,
}, EventSourceTypes), describe("create", test("when the setup function throws", pipeLazy(EventSource.create(_ => raise()), EventSource.addEventHandler(ignore), pick(DisposableLike_error), expectIsSome))));
((_) => { })(EventSource);

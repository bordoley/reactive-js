/// <reference types="./EventSource.test.d.ts" />

import { Array_length, Array_push } from "../../__internal__/constants.js";
import { describe, expectIsSome, test, testModule, } from "../../__internal__/testing.js";
import * as Observable from "../../computations/Observable.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, Computation_multicastOfT, EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../computations.js";
import { bindMethod, ignore, isSome, pick, pipe, pipeLazy, raise, } from "../../functions.js";
import { DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_error, } from "../../utils.js";
import * as EventSource from "../EventSource.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
const EventSourceTypes = {
    [Computation_multicastOfT]: EventSource.never(),
};
testModule("EventSource", ComputationModuleTests({
    ...EventSource,
    fromReadonlyArray() {
        return (arr) => ({
            [ComputationLike_isDeferred]: false,
            [ComputationLike_isSynchronous]: false,
            [DisposableContainerLike_add](_) { },
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

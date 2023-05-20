/// <reference types="./EventSource.dispatchTo.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import { bindMethod, invoke, pipe } from "../../functions.js";
import { DispatcherLike_complete, EventSourceLike_addEventListener, } from "../../types.js";
import EventSource_create from "./EventSource.create.js";
import EventSource_enqueue from "./EventSource.enqueue.js";
const EventSource_dispatchTo = (dispatcher) => (eventSource) => EventSource_create((listener) => {
    pipe(listener, Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)));
    pipe(eventSource, EventSource_enqueue(dispatcher), invoke(EventSourceLike_addEventListener, listener));
});
export default EventSource_dispatchTo;

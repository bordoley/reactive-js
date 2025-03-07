/// <reference types="./EventSource.fromPromise.d.ts" />

import { EventListenerLike_notify } from "../../../computations.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_fromPromise = () => (promise) => EventSource_create(listener => {
    promise.then(next => {
        if (!listener[DisposableLike_isDisposed]) {
            listener[EventListenerLike_notify](next);
            listener[DisposableLike_dispose]();
        }
    }, Disposable.toErrorHandler(listener));
});
export default EventSource_fromPromise;

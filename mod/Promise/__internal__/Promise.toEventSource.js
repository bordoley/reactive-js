/// <reference types="./Promise.toEventSource.d.ts" />

import Disposable_toErrorHandler from "../../Disposable/__internal__/Disposable.toErrorHandler.js";
import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_notify, } from "../../types.js";
const Promise_toEventSource = () => (promise) => EventSource_create(listener => {
    promise.then(next => {
        if (!listener[DisposableLike_isDisposed]) {
            listener[SinkLike_notify](next);
            listener[DisposableLike_dispose]();
        }
    }, Disposable_toErrorHandler(listener));
});
export default Promise_toEventSource;

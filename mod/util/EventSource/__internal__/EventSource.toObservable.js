/// <reference types="./EventSource.toObservable.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { DispatcherLike_complete } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { DisposableLike_dispose, EventSourceLike_addListener, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import EventListener_create from "../../EventListener/__internal__/EventListener.create.js";
const EventSource_toObservable = () => (eventSource) => Observable_create(observer => {
    const listener = pipe(EventListener_create(bindMethod(observer, QueueableLike_enqueue)), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable_onError(bindMethod(observer, DisposableLike_dispose)), Disposable_addTo(observer));
    eventSource[EventSourceLike_addListener](listener);
});
export default EventSource_toObservable;

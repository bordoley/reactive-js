/// <reference types="./EventSource.toObservable.d.ts" />

import { pipe } from "../../functions.js";
import Observable_create from "../../rx/Observable/__internal__/Observable.create.js";
import { EventSourceLike_addListener, QueueableLike_enqueue, } from "../../util.js";
import Disposable_add from "../Disposable/__internal__/Disposable.add.js";
import EventListener_create from "../EventListener/__internal__/EventListener.create.js";
const EventSource_toObservable = () => (eventSource) => Observable_create(observer => {
    const listener = EventListener_create(ev => {
        observer[QueueableLike_enqueue](ev);
    });
    pipe(observer, Disposable_add(listener));
    eventSource[EventSourceLike_addListener](listener);
});
export default EventSource_toObservable;

/// <reference types="./EventSource.toObservable.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import { bindMethod, pipe } from "../../functions.js";
import { DispatcherLike_complete, QueueableLike_enqueue, } from "../../types.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_toObservable = () => (eventSource) => MulticastObservable_create(observer => {
    pipe(eventSource, EventSource_addEventHandler(bindMethod(observer, QueueableLike_enqueue)), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable_addTo(observer));
});
export default EventSource_toObservable;

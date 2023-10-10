/// <reference types="./EventSource.mergeMany.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { DisposableLike_dispose, SinkLike_notify } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_mergeMany = (eventSources) => EventSource_create(listener => {
    const count = eventSources.length;
    let completed = 0;
    const eventHandler = bindMethod(listener, SinkLike_notify);
    for (const eventSource of eventSources) {
        pipe(eventSource, EventSource_addEventHandler(eventHandler), Disposable.addTo(listener), Disposable.onComplete(() => {
            completed++;
            if (completed >= count) {
                listener[DisposableLike_dispose]();
            }
        }));
    }
});
export default EventSource_mergeMany;

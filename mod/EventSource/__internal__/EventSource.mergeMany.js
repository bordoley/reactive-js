/// <reference types="./EventSource.mergeMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { bindMethod, pipe } from "../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_mergeMany = (eventSources) => EventSource_create(listener => {
    const count = ReadonlyArray_getLength(eventSources);
    let completed = 0;
    const eventHandler = bindMethod(listener, SinkLike_notify);
    for (const eventSource of eventSources) {
        pipe(eventSource, EventSource_addEventHandler(eventHandler), Disposable_addTo(listener), Disposable_onComplete(() => {
            completed++;
            if (completed >= count) {
                listener[DisposableLike_dispose]();
            }
        }));
    }
});
export default EventSource_mergeMany;

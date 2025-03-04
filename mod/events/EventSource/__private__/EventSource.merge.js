/// <reference types="./EventSource.merge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { EventListenerLike_notify } from "../../../events.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_merge = ((...eventSources) => EventSource_create(listener => {
    const count = eventSources[Array_length];
    let completed = 0;
    const eventHandler = bindMethod(listener, EventListenerLike_notify);
    for (const eventSource of eventSources) {
        pipe(eventSource, EventSource_addEventHandler(eventHandler), Disposable.addTo(listener), DisposableContainer.onComplete(() => {
            completed++;
            if (completed >= count) {
                listener[DisposableLike_dispose]();
            }
        }));
    }
}));
export default EventSource_merge;

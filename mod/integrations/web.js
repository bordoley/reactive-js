/// <reference types="./web.d.ts" />

import { __WindowLocationLike_canGoBack as WindowLocationLike_canGoBack, __WindowLocationLike_goBack as WindowLocationLike_goBack, __WindowLocationLike_push as WindowLocationLike_push, __WindowLocationLike_replace as WindowLocationLike_replace, } from "../__internal__/symbols.js";
import { error, newInstance, pipe } from "../functions.js";
import * as ReadonlyArray from "../keyed-containers/ReadonlyArray.js";
import * as Observable from "../rx/Observable.js";
import { DisposableLike_dispose, QueueableLike_enqueue } from "../util.js";
import * as Disposable from "../util/Disposable.js";
export { WindowLocationLike_push, WindowLocationLike_goBack, WindowLocationLike_canGoBack, WindowLocationLike_replace, };
const errorEvent = "error";
const reservedEvents = [errorEvent, "open"];
export const createEventSource = (url, options = {}) => {
    const events = pipe(options.events ?? ["message"], ReadonlyArray.keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return Observable.create(observer => {
        pipe(observer, Disposable.onDisposed(_ => {
            eventSource.removeEventListener(errorEvent, onError);
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        }));
        const eventSource = newInstance(EventSource, requestURL, options);
        const listener = (ev) => {
            observer[QueueableLike_enqueue]({
                id: ev.lastEventId ?? "",
                type: ev.type ?? "",
                data: ev.data ?? "",
            });
        };
        const onError = (e) => {
            observer[DisposableLike_dispose](error(e));
        };
        eventSource.addEventListener(errorEvent, onError);
        for (const ev of events) {
            eventSource.addEventListener(ev, listener);
        }
    });
};

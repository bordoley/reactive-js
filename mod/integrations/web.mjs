/// <reference types="./web.d.ts" />
import { toObservable } from '../containers/PromiseableLike.mjs';
import { keep } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, newInstance, none } from '../functions.mjs';
import { createObservable } from '../rx.mjs';
import { sinkInto } from '../rx/ReactiveContainerLike.mjs';
import { dispatch } from '../scheduling/DispatcherLike.mjs';
import { getDispatcher } from '../scheduling/ObserverLike.mjs';
import { onDisposed, toAbortSignal, dispose } from '../util/DisposableLike.mjs';

const reservedEvents = ["error", "open"];
const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = pipe(eventsOption, keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return createObservable(observer => {
        const dispatcher = pipe(observer, getDispatcher, onDisposed(_ => {
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        }));
        const eventSource = newInstance(EventSource, requestURL, options);
        const listener = (ev) => {
            var _a, _b, _c;
            pipe(dispatcher, dispatch({
                id: (_a = ev.lastEventId) !== null && _a !== void 0 ? _a : "",
                type: (_b = ev.type) !== null && _b !== void 0 ? _b : "",
                data: (_c = ev.data) !== null && _c !== void 0 ? _c : "",
            }));
        };
        for (const ev of events) {
            eventSource.addEventListener(ev, listener);
        }
    });
};
const globalFetch = self.fetch;
const fetch = (onResponse) => fetchRequest => createObservable(async (observer) => {
    const signal = toAbortSignal(observer);
    let request = none;
    if (typeof fetchRequest === "string") {
        request = fetchRequest;
    }
    else {
        const { uri, ...requestInit } = fetchRequest;
        request = newInstance(Request, uri, requestInit);
    }
    // This try/catch is necessary because we await in the try block.
    try {
        const response = await globalFetch(request, { signal });
        const onResponseResult = onResponse(response);
        const resultObs = onResponseResult instanceof Promise
            ? pipe(onResponseResult, toObservable())
            : onResponseResult;
        pipe(resultObs, sinkInto(observer));
    }
    catch (cause) {
        pipe(observer, dispose({ cause }));
    }
});
const addEventListener = (eventName, selector) => target => createObservable(observer => {
    const dispatcher = pipe(observer, getDispatcher, onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        const result = selector(event);
        pipe(dispatcher, dispatch(result));
    };
    target.addEventListener(eventName, listener, { passive: true });
});

export { addEventListener, createEventSource, fetch };

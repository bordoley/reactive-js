import { pipe, compose, returns } from './functions.mjs';
import { none } from './option.mjs';
import { dispose, addTeardown } from './disposable.mjs';
import { keep } from './readonlyArray.mjs';
import './enumerable.mjs';
import './runnable.mjs';
import './queues.mjs';
import './scheduler.mjs';
import { createObservable, throttle, onNotify, mergeWith, compute, concatWith, defer, fromPromise, observe } from './observable.mjs';
import './env.mjs';
import './dispatcher.mjs';
import { createStreamable, mapReq, map } from './streamable.mjs';
import { fromHref, toHref } from './relativeURI.mjs';
import { toStateStore } from './stateStore.mjs';

const fromEvent = (target, eventName, selector) => createObservable(dispatcher => {
    const listener = (event) => {
        try {
            const result = selector(event);
            dispatcher.dispatch(result);
        }
        catch (cause) {
            pipe(dispatcher, dispose({ cause }));
        }
    };
    target.addEventListener(eventName, listener, { passive: true });
    addTeardown(dispatcher, () => {
        target.removeEventListener(eventName, listener);
    });
});

const reservedEvents = ["error", "open"];
const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = pipe(eventsOption, keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return createObservable(dispatcher => {
        const eventSource = new EventSource(requestURL, options);
        const listener = (ev) => {
            var _a, _b, _c;
            dispatcher.dispatch({
                id: (_a = ev.lastEventId) !== null && _a !== void 0 ? _a : "",
                type: (_b = ev.type) !== null && _b !== void 0 ? _b : "",
                data: (_c = ev.data) !== null && _c !== void 0 ? _c : "",
            });
        };
        addTeardown(dispatcher, _ => {
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        });
        for (const ev of events) {
            eventSource.addEventListener(ev, listener);
        }
    });
};

const getCurrentLocation = (_) => window.location.href;
const pushHistoryState = (newLocation) => {
    const currentLocation = getCurrentLocation();
    if (currentLocation !== newLocation) {
        window.history.pushState(none, "", newLocation);
    }
};
const historyFunction = compose(throttle(15), onNotify(pushHistoryState), mergeWith(pipe(getCurrentLocation, compute(), concatWith(fromEvent(window, "popstate", getCurrentLocation)))));
const requestMapper = (stateUpdater) => (prevStateString) => {
    const prevStateURI = fromHref(prevStateString);
    const newStateURI = stateUpdater(prevStateURI);
    return newStateURI === prevStateURI
        ? prevStateString
        : toHref(newStateURI, prevStateString);
};
const _historyStateStore = pipe(createStreamable(historyFunction), toStateStore(), mapReq(requestMapper), map(fromHref));
const historyStateStore = _historyStateStore;

const globalFetch = self.fetch;
const fetch = (onResponse) => fetchRequest => defer(() => async (observer) => {
    const abortController = new AbortController();
    addTeardown(observer, () => abortController.abort());
    let request = none;
    if (typeof fetchRequest === "string") {
        request = fetchRequest;
    }
    else {
        const { uri, ...requestInit } = fetchRequest;
        request = new Request(uri, requestInit);
    }
    // This try/catch is necessary because we await in the try block.
    try {
        const response = await globalFetch(request, {
            signal: abortController.signal,
        });
        const onResponseResult = onResponse(response);
        const resultObs = onResponseResult instanceof Promise
            ? fromPromise(returns(onResponseResult))
            : onResponseResult;
        pipe(resultObs, observe(observer));
    }
    catch (cause) {
        pipe(observer, dispose({ cause }));
    }
});

export { createEventSource, fetch, fromEvent, historyStateStore };
